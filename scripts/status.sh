#!/usr/bin/env bash
# Show ingestion status — what's been downloaded, extracted, indexed
# Usage: ./status.sh [--creator slug] [--pending]

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
ROOT="$SCRIPT_DIR/.."
REGISTRY="$ROOT/registry/creators.json"
INGEST_LOG="$ROOT/registry/ingest-log.jsonl"

echo "═══════════════════════════════════════════"
echo "  BTD Knowledge Engine — Ingestion Status"
echo "═══════════════════════════════════════════"
echo ""

# Creator count
ACTIVE=$(jq '[.creators[] | select(.status == "active")] | length' "$REGISTRY")
TOTAL=$(jq '.creators | length' "$REGISTRY")
echo "  Creators: $ACTIVE active / $TOTAL total"

# List creators
echo ""
jq -r '.creators[] | "  \(if .status == "active" then "●" else "○" end) \(.slug) — \(.name) [\(.topics | join(", "))]"' "$REGISTRY"

echo ""
echo "───────────────────────────────────────────"
echo "  Content"
echo "───────────────────────────────────────────"

if [ ! -f "$INGEST_LOG" ] || [ ! -s "$INGEST_LOG" ]; then
  echo "  No content ingested yet."
  exit 0
fi

# Counts
INGESTED=$(cat "$INGEST_LOG" | jq -s 'length')
EXTRACTED=$(cat "$INGEST_LOG" | jq -s '[.[] | select(.extracted == true)] | length')
INDEXED=$(cat "$INGEST_LOG" | jq -s '[.[] | select(.indexed == true)] | length')
PENDING_EXTRACT=$(cat "$INGEST_LOG" | jq -s '[.[] | select(.extracted == false)] | length')
PENDING_INDEX=$(cat "$INGEST_LOG" | jq -s '[.[] | select(.indexed == false)] | length')

echo ""
echo "  Total ingested:      $INGESTED"
echo "  Extracted:           $EXTRACTED  ($PENDING_EXTRACT pending)"
echo "  Indexed (LEANN):     $INDEXED  ($PENDING_INDEX pending)"

# By source type
echo ""
echo "  By source type:"
cat "$INGEST_LOG" | jq -s 'group_by(.source_type) | .[] | "    \(.[0].source_type): \(length)"' -r

# By creator
echo ""
echo "  By creator:"
cat "$INGEST_LOG" | jq -s 'group_by(.creator) | .[] | "    \(.[0].creator): \(length)"' -r

# Pending items
if [ "$PENDING_EXTRACT" -gt 0 ]; then
  echo ""
  echo "───────────────────────────────────────────"
  echo "  Pending Extraction"
  echo "───────────────────────────────────────────"
  cat "$INGEST_LOG" | jq -s '.[] | select(.extracted == false) | "  → \(.file)"' -r
fi

if [ "$PENDING_INDEX" -gt 0 ]; then
  echo ""
  echo "───────────────────────────────────────────"
  echo "  Pending Indexing"
  echo "───────────────────────────────────────────"
  cat "$INGEST_LOG" | jq -s '.[] | select(.indexed == false) | "  → \(.file)"' -r
fi

echo ""
