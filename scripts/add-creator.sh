#!/usr/bin/env bash
# Add a creator to the registry
# Usage: ./add-creator.sh <slug> <name> [youtube-url] [topics]
#
# Examples:
#   ./add-creator.sh andrej-karpathy "Andrej Karpathy" "https://www.youtube.com/@AndrejKarpathy" "ai,ml,building"
#   ./add-creator.sh 3blue1brown "3Blue1Brown" "https://www.youtube.com/@3blue1brown" "math,ml,visual"

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REGISTRY="$SCRIPT_DIR/../registry/creators.json"

SLUG="${1:?Usage: $0 <slug> <name> [youtube-url] [topics]}"
NAME="${2:?Usage: $0 <slug> <name> [youtube-url] [topics]}"
YT_URL="${3:-}"
TOPICS="${4:-}"
TODAY=$(date +%Y-%m-%d)

# Check if already exists
if jq -e ".creators[] | select(.slug == \"$SLUG\")" "$REGISTRY" >/dev/null 2>&1; then
  echo "⚠️  Creator '$SLUG' already exists in registry"
  exit 1
fi

# Build platforms object
PLATFORMS="{}"
if [ -n "$YT_URL" ]; then
  PLATFORMS=$(jq -n --arg url "$YT_URL" '{"youtube": {"channel_url": $url, "channel_id": null, "playlist_id": null}}')
fi

# Build topics array
TOPICS_JSON="[]"
if [ -n "$TOPICS" ]; then
  TOPICS_JSON=$(echo "$TOPICS" | tr ',' '\n' | jq -R . | jq -s .)
fi

# Add to registry
jq --arg slug "$SLUG" \
  --arg name "$NAME" \
  --argjson platforms "$PLATFORMS" \
  --argjson topics "$TOPICS_JSON" \
  --arg today "$TODAY" \
  '.creators += [{
     slug: $slug,
     name: $name,
     platforms: $platforms,
     topics: $topics,
     priority: "medium",
     notes: "",
     added: $today,
     status: "active"
   }]' "$REGISTRY" >"${REGISTRY}.tmp" && mv "${REGISTRY}.tmp" "$REGISTRY"

echo "✅ Added '$NAME' ($SLUG) to registry"
echo "   Topics: $TOPICS"
[ -n "$YT_URL" ] && echo "   YouTube: $YT_URL"
