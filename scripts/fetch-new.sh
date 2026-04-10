#!/usr/bin/env bash
# Fetch new content from all active creators in the registry
# Usage: ./fetch-new.sh [--since YYYY-MM-DD] [--creator slug] [--dry-run]
#
# Reads registry/creators.json, checks ingest-log.jsonl for dedup,
# downloads new YouTube transcripts, appends to ingest log.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
ROOT="$SCRIPT_DIR/.."
REGISTRY="$ROOT/registry/creators.json"
INGEST_LOG="$ROOT/registry/ingest-log.jsonl"
RAW_DIR="$ROOT/raw/youtube"

# Defaults
SINCE=$(date -v-7d +%Y%m%d 2>/dev/null || date -d '7 days ago' +%Y%m%d)
CREATOR_FILTER=""
DRY_RUN=false

# Parse args
while [[ $# -gt 0 ]]; do
  case $1 in
    --since)
      SINCE=$(echo "$2" | tr -d '-')
      shift 2
      ;;
    --creator)
      CREATOR_FILTER="$2"
      shift 2
      ;;
    --dry-run)
      DRY_RUN=true
      shift
      ;;
    *)
      echo "Unknown arg: $1"
      exit 1
      ;;
  esac
done

echo "📡 Fetching new content since $SINCE"
[ -n "$CREATOR_FILTER" ] && echo "   Filtered to: $CREATOR_FILTER"
$DRY_RUN && echo "   🏜️  DRY RUN — no downloads"

# Get active YouTube creators
CREATORS=$(jq -r '.creators[] | select(.status == "active" and .platforms.youtube != null) | "\(.slug)\t\(.platforms.youtube.channel_url)"' "$REGISTRY")

if [ -n "$CREATOR_FILTER" ]; then
  CREATORS=$(echo "$CREATORS" | grep "^${CREATOR_FILTER}\t" || true)
fi

if [ -z "$CREATORS" ]; then
  echo "No matching creators found."
  exit 0
fi

# Get already-ingested video IDs for dedup
EXISTING_IDS=$(cat "$INGEST_LOG" 2>/dev/null | jq -r 'select(.video_id != null) | .video_id' | sort -u)

TOTAL_NEW=0

echo "$CREATORS" | while IFS=$'\t' read -r SLUG URL; do
  echo ""
  echo "━━━ $SLUG ━━━"
  echo "    $URL"

  OUTDIR="$RAW_DIR/$SLUG"
  mkdir -p "$OUTDIR"

  # List videos since date (metadata only)
  echo "    Checking for new videos..."

  VIDEO_LIST=$(yt-dlp \
    --dateafter "$SINCE" \
    --flat-playlist \
    --print "%(id)s\t%(title)s\t%(upload_date)s\t%(duration_string)s" \
    --no-warnings \
    "$URL" 2>/dev/null || true)

  if [ -z "$VIDEO_LIST" ]; then
    echo "    No new videos."
    continue
  fi

  echo "$VIDEO_LIST" | while IFS=$'\t' read -r VID TITLE UDATE DURATION; do
    # Dedup check
    if echo "$EXISTING_IDS" | grep -q "^${VID}$"; then
      echo "    ⏭️  $TITLE (already ingested)"
      continue
    fi

    echo "    📥 $TITLE"

    if $DRY_RUN; then
      echo "       (dry run — skipping download)"
      continue
    fi

    # Download transcript
    yt-dlp \
      --write-auto-sub \
      --sub-lang en \
      --skip-download \
      --output "$OUTDIR/%(id)s" \
      "https://www.youtube.com/watch?v=$VID" 2>/dev/null || {
      echo "       ⚠️  Failed to download subtitles"
      continue
    }

    # Convert VTT to markdown
    VTT_FILE="$OUTDIR/${VID}.en.vtt"
    if [ ! -f "$VTT_FILE" ]; then
      # Try auto-generated
      VTT_FILE=$(ls "$OUTDIR"/${VID}*.vtt 2>/dev/null | head -1 || true)
    fi

    TRANSCRIPT=""
    if [ -f "$VTT_FILE" ]; then
      TRANSCRIPT=$(sed '/^$/d; /^[0-9]/d; /^WEBVTT/d; /^Kind:/d; /^Language:/d; /-->/d' "$VTT_FILE" \
        | sed 's/<[^>]*>//g' \
        | awk '!seen[$0]++' \
        | tr '\n' ' ' \
        | sed 's/  */ /g')
    fi

    # Create slug
    FILE_SLUG=$(echo "$TITLE" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9]/-/g' | sed 's/--*/-/g' | head -c 80)
    MD_FILE="$OUTDIR/${UDATE}-${FILE_SLUG}.md"
    YT_URL="https://www.youtube.com/watch?v=$VID"
    NOW=$(date -u +%Y-%m-%dT%H:%M:%SZ)

    cat >"$MD_FILE" <<EOMD
---
title: "${TITLE}"
creator: "${SLUG}"
source_type: youtube
date: ${UDATE}
ingested: $(date +%Y-%m-%d)
url: "${YT_URL}"
video_id: "${VID}"
duration: "${DURATION}"
status: ingested
topics: []
meta_patterns: []
---

# ${TITLE}

**Creator**: ${SLUG} | **Date**: ${UDATE} | **Duration**: ${DURATION}
**URL**: ${YT_URL}

## Transcript

${TRANSCRIPT}
EOMD

    # Append to ingest log
    jq -nc \
      --arg id "${UDATE}-${FILE_SLUG}" \
      --arg src "youtube" \
      --arg creator "$SLUG" \
      --arg file "raw/youtube/$SLUG/${UDATE}-${FILE_SLUG}.md" \
      --arg url "$YT_URL" \
      --arg vid "$VID" \
      --arg now "$NOW" \
      '{id: $id, source_type: $src, creator: $creator, status: "ingested", ingested_at: $now, file: $file, url: $url, video_id: $vid, extracted: false, indexed: false}' \
      >>"$INGEST_LOG"

    # Cleanup VTT files
    rm -f "$OUTDIR"/${VID}*.vtt "$OUTDIR"/${VID}*.json

    echo "       ✅ $MD_FILE"
    TOTAL_NEW=$((TOTAL_NEW + 1))
  done
done

echo ""
echo "🎉 Done. New items ingested: check ingest-log.jsonl for details"
echo ""
echo "Next steps:"
echo "  cat registry/ingest-log.jsonl | jq -s '.[] | select(.extracted == false) | .file'"
echo "  # → run extraction on those files"
