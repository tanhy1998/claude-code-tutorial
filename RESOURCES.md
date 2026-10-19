# Claude Code for PBIP Resources

## Knowledge

### Claude Code (primary: official docs, code.claude.com)
- [Docs index (llms.txt)](https://code.claude.com/docs/llms.txt)
  Machine-readable list of every docs page. Use for: finding the right page before teaching anything.
- [Extend Claude Code (features overview)](https://code.claude.com/docs/en/features-overview)
  The map: CLAUDE.md vs rules vs skills vs subagents vs hooks vs MCP vs plugins, context cost of each, and the "build your setup over time" trigger table. Use for: every "which feature?" question; the course spine.
- [How Claude remembers your project (memory)](https://code.claude.com/docs/en/memory)
  CLAUDE.md scopes, load order, `@imports`, `CLAUDE.local.md`, `.claude/rules/` with `paths:`, auto memory, `/memory`, `/context`. Use for: Lessons 1–2.
- [Settings](https://code.claude.com/docs/en/settings) · [Permissions](https://code.claude.com/docs/en/permissions) · [Permission modes](https://code.claude.com/docs/en/permission-modes)
  Settings scopes and precedence, allow/deny rules. Use for: the settings and permissions lesson (Lesson 3).
- [Tools reference](https://code.claude.com/docs/en/tools-reference)
  Canonical tool names for rules and hooks; the PowerShell tool on Windows, including "Bash deny rules also turn off the PowerShell tool". Use for: every rule or hook matcher.
- [Settings reference](https://code.claude.com/docs/en/settings-reference)
  Every settings key and the scopes it may be set from. Use for: checking whether a key works from a committed project file.
- [Skills](https://code.claude.com/docs/en/skills)
  SKILL.md format, frontmatter, invocation control, `!`command`` injection, lifecycle, troubleshooting. Use for: Lesson 4, and any "why didn't my skill trigger?" question.
- [Skill authoring best practices (Anthropic platform docs)](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices)
  Cross-product guidance on descriptions, structure, progressive disclosure. Use for: improving skill wording (Lesson 4 onward, capstone).
- [Hooks guide](https://code.claude.com/docs/en/hooks-guide) · [Hooks reference](https://code.claude.com/docs/en/hooks)
  Lifecycle events, matchers, exit codes, JSON output. Use for: the hooks lessons (guardrails and auto-validation). Reference sections that matter most on Windows: "Exit code output", "Block the action when a hook fails" (`onFailure`), "Windows PowerShell tool", "Debug hooks".
- [MCP](https://code.claude.com/docs/en/mcp)
  Adding servers, scopes (local/project/user), `.mcp.json`. Use for: the MCP lesson.
- [Subagents](https://code.claude.com/docs/en/sub-agents)
  Agent files, frontmatter, tools, model, preloaded skills. Use for: the subagents lesson.
- [Plugins overview](https://code.claude.com/docs/en/plugins/overview) · [Create a plugin](https://code.claude.com/docs/en/plugins/create) · [Create a marketplace](https://code.claude.com/docs/en/plugins/create-marketplace)
  Packaging and distribution. Use for: the capstone packaging step.
- [Run Claude Code programmatically (headless)](https://code.claude.com/docs/en/headless) · [GitHub Actions](https://code.claude.com/docs/en/github-actions)
  `claude -p`, CI usage. Use for: the automation/CI lesson.
- [Blog: Steering Claude Code: when to use CLAUDE.md, skills, hooks, and subagents](https://claude.com/blog/steering-claude-code-skills-hooks-rules-subagents-and-more)
  Long-form version of the feature-choice reasoning. Use for: building judgment between features.

### Power BI PBIP (primary: Microsoft Learn)
- [Power BI Desktop projects (PBIP)](https://learn.microsoft.com/en-us/power-bi/developer/projects/projects-overview)
  Folder structure, default `.gitignore`, files that don't support external edits, UTF-8 without BOM, CRLF, 260-char path limit. Use for: the facts that go in a PBIP CLAUDE.md.
- [Edit PBIP files outside Power BI Desktop](https://learn.microsoft.com/en-us/power-bi/developer/projects/projects-external-editing)
  Save → edit → "Apply external changes" workflow (preview, Desktop Aug 2026+). Use for: the edit-and-apply loop Claude must respect.
- [Semantic model folder: .pbi\unappliedChanges.json](https://learn.microsoft.com/en-us/power-bi/developer/projects/projects-dataset#pbiunappliedchangesjson)
  What "Apply later" saves, why external query edits get overwritten, and that it's committed to git by default. Use for: the Lesson 5 hook's justification.
- [about_Character_Encoding (PowerShell)](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_character_encoding)
  Windows PowerShell 5.1 reads BOM-less scripts as ANSI. Use for: hook scripts (keep them ASCII), and Lesson 6's encoding checks.
- [Power BI Desktop Bridge](https://learn.microsoft.com/en-us/power-bi/developer/agentic/power-bi-desktop-bridge-overview)
  Local named-pipe API plus the `powerbi-desktop` CLI (`status`, `reload`, `screenshot`). Use for: hooks and agents that reload or screenshot Desktop.
- [Power BI MCP servers overview](https://learn.microsoft.com/en-us/power-bi/developer/mcp/mcp-servers-overview)
  Power BI Authoring MCP (local GA, hosted preview) vs Fabric IQ; data-handling caveats. Use for: the MCP lesson and work-data risk discussion.
- [Power BI Report Authoring skill](https://learn.microsoft.com/en-us/power-bi/developer/agentic/power-bi-report-authoring-skill-overview) · [skills-for-fabric marketplace (GitHub)](https://github.com/microsoft/skills-for-fabric)
  Microsoft's first-party PBIR skills/plugin, cross-compatible with Claude Code. Use for: the plugins lesson (installing a real marketplace) and as a capstone model to learn from.
- [microsoft/powerbi-modeling-mcp (GitHub)](https://github.com/microsoft/powerbi-modeling-mcp)
  Source and README for the local modeling MCP server. Use for: install details and safety warnings.

## Wisdom (Communities)
- [r/ClaudeAI](https://www.reddit.com/r/ClaudeAI/)
  Large Claude user community; frequent Claude Code setup threads. Use for: sharing your CLAUDE.md/hooks and seeing other people's.
- [Anthropic Discord](https://www.anthropic.com/discord)
  Official community server. Use for: Claude Code questions in real time.
- [Microsoft Fabric Community – Power BI forums](https://community.fabric.microsoft.com/powerbi)
  Microsoft-moderated forum. Use for: PBIP/TMDL/PBIR edge cases and Desktop behaviour.
- [r/PowerBI](https://www.reddit.com/r/PowerBI/)
  Active practitioner subreddit. Use for: how other BI teams run AI-assisted PBIP workflows.

## Gaps
- No high-trust, end-to-end guide yet for "Claude Code + PBIP team workflow". The capstone fills this; consider writing it up for a community afterwards.
