# Enforced the PBIP NEVER list with hand-written permission rules

The learner wrote `lab\.claude\settings.json` by hand. Checked 2026-10-18: valid JSON, with every deny rule and the ask rule matching the model answer, including the `**/*.Report/report.json` versus `definition/report.json` distinction from Lesson 2. They saw both layers work:

- **Step 4 (read localSettings.json):** "claude block it". It's not clear whether the model refused or Claude Code returned the tool error.
- **Step 6 (ask rule in auto mode):** the prompt appeared, as predicted. They've seen that ask rules beat auto mode.
- **Step 7 (local allow vs project deny):** the deny won, and they explained why in their own words: "deny rules always win over allow rules … Claude Code enforced the block before my edit ran."

Their first step-7 attempt never reached the permission check. CLAUDE.md made Claude decline without making a tool call, and the learner read that as "it still follows CLAUDE.md". That gave them a first-hand view of *context decides whether Claude tries; enforcement decides whether the call runs*. The cause was a lesson-design miss: steps 5 and 7 had no override wording. Now fixed.

The editor that mangled `pbir.md` was a WYSIWYG markdown extension in VS Code, which re-serializes markdown with escapes.

**Evidence**: learner messages on 2026-10-18; `lab\.claude\settings.json` and `settings.local.json` contents. Steps 8–9 were confirmed at the start of Lesson 4 (2026-10-18): commit `a238883`, and `git check-ignore` matches `.claude/settings.local.json`.

**Implications**: The model "CLAUDE.md = why, deny rule = enforcement" is in place. Lesson 5 (hooks) can build on it directly: a hook covers the *conditional* case, unappliedChanges.json, that a deny rule can't express. Every enforcement test must tell Claude to override the matching CLAUDE.md line. Every hand-written config step should say to open `.md` files in VS Code's plain text editor (`workbench.editorAssociations: {"*.md": "default"}`, or Open With → Text Editor). Lesson 4 will have them write a SKILL.md, so check its frontmatter isn't escaped. At the start of Lesson 4, confirm the commit landed and `settings.local.json` is gitignored.
