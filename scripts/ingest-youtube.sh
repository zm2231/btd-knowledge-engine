#!/usr/bin/env bash
# Ingest YouTube video transcripts into raw/ directory
# Usage: ./ingest-youtube.sh <url-or-playlist> [creator-slug]
#
# Requires: yt-dlp, jq
# Outputs: raw/youtube/{creator}/{video-slug}.md with frontmatter

set -euo pipefail

URL="${1:?Usage: $0 <url-or-playlist> [creator-slug]}"
CREATOR="${2:-unknown}"
OUTPUT_DIR="$(dirname "$0")/../raw/youtube/${CREATOR}"
mkdir -p "$OUTPUT_DIR"

echo "📥 Downloading transcripts from: $URL"
echo "📁 Output: $OUTPUT_DIR"

# Download metadata + subtitles
yt-dlp \
  --write-auto-sub \
  --sub-lang en \
  --skip-download \
  --write-info-json \
  --output "${OUTPUT_DIR}/%(id)s" \
  "$URL" 2>&1 | tail -5

# Convert each .info.json + .vtt into .md
for json_file in "${OUTPUT_DIR}"/*.info.json; do
  [ -f "$json_file" ] || continue

  video_id=$(jq -r '.id' "$json_file")
  title=$(jq -r '.title' "$json_file")
  channel=$(jq -r '.channel // .uploader' "$json_file")
  upload_date=$(jq -r '.upload_date' "$json_file")
  duration=$(jq -r '.duration_string // .duration' "$json_file")
  url=$(jq -r '.webpage_url' "$json_file")
  description=$(jq -r '.description // ""' "$json_file" | head -20)

  # Find matching subtitle file
  vtt_file="${OUTPUT_DIR}/${video_id}.en.vtt"

  # Convert VTT to plain text (strip timestamps and formatting)
  transcript=""
  if [ -f "$vtt_file" ]; then
    transcript=$(sed '/^$/d; /^[0-9]/d; /^WEBVTT/d; /^Kind:/d; /^Language:/d; /-->/d' "$vtt_file" \
      | sed 's/<[^>]*>//g' \
      | awk '!seen[$0]++' \
      | tr '\n' ' ' \
      | sed 's/  */ /g')
  fi

  # Create slug from title
  slug=$(echo "$title" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9]/-/g' | sed 's/--*/-/g' | head -c 80)

  md_file="${OUTPUT_DIR}/${slug}.md"

  cat >"$md_file" <<EOF
---
title: "${title}"
creator: "${channel}"
date: "${upload_date}"
url: "${url}"
duration: "${duration}"
video_id: "${video_id}"
source: youtube
topics: []
---

# ${title}

**Creator**: ${channel}  
**Date**: ${upload_date}  
**Duration**: ${duration}  
**URL**: ${url}

## Description

${description}

## Transcript

${transcript}
EOF

  echo "✅ ${slug}.md"

  # Clean up intermediate files
  rm -f "$json_file" "$vtt_file" "${OUTPUT_DIR}/${video_id}.en.vtt"
done

echo ""
echo "🎉 Done! Files in: $OUTPUT_DIR"
echo "Next: run 'leann index btd-content raw/' to index for semantic search"
