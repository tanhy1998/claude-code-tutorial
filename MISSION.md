# Mission: Claude Code for Power BI (PBIP) development

## Why
Speed up my own Power BI work (model changes, DAX, report edits) and set up an AI-assisted PBIP workflow my team can share through git. If the capstone works on a dummy project, I take it to real work projects.

## Success looks like
- I can write, by hand and without asking Claude to do it, each Claude Code building block: CLAUDE.md, rules, settings/permissions, skills, hooks, MCP config, subagents, and a plugin.
- For any recurring annoyance in PBIP work, I can say which feature fixes it and why (e.g. "that's a hook, not a CLAUDE.md line").
- Claude can safely edit TMDL/PBIR in a PBIP repo: it doesn't touch the files it shouldn't, it checks its own work, and Power BI Desktop applies the changes cleanly.
- **Capstone:** a team-ready PBIP setup (project config + skills + hooks + MCP + agents, packaged as a plugin) that a teammate can clone and use on day one.

## Constraints
- Up to ~1 hour per session; hands-on in my own terminal (Windows, PowerShell, Claude Code CLI).
- Advanced Power BI; knows PBIP/TMDL/PBIR; familiar with git but not a daily user.
- Practice on a dummy dataset only. No company data until the capstone is proven.

## Out of scope (for now)
- Agent SDK / building custom agents in code.
- Fabric admin, deployment pipelines, and tenant setup beyond what the capstone needs.
