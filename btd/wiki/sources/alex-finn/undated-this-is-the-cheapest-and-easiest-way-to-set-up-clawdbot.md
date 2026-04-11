---
title: "This is the CHEAPEST and EASIEST way to set up ClawdBot"
creator: alex-finn
platform: youtube
date: undated
url: "https://www.youtube.com/watch?v=04wh2Hlgbds"
---

# This is the CHEAPEST and EASIEST way to set up ClawdBot

Minimal-cost setup guide for ClawdBot: using a $5/month VPS instead of dedicated hardware. Finn walks through provisioning a VPS, SSH setup, installing ClawdBot, and configuring it to run persistently. Removes the Mac Mini requirement that other guides assume and makes self-hosted Claude agents accessible at near-zero infrastructure cost.

## Key Ideas
- A $5/mo VPS (DigitalOcean, Hetzner, etc.) is sufficient for most personal ClawdBot workloads
- SSH into VPS, run the ClawdBot install script — full setup under 20 minutes
- Use tmux or screen to keep ClawdBot running after SSH session ends
- Pair with Cloudflare Tunnel for secure remote access without port forwarding
- No specialized hardware needed — any unused laptop or cheap cloud instance works

## Concepts
[[ai-agents]], [[claude-code]]

## Creator
[[alex-finn]]
