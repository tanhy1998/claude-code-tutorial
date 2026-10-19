# PreToolUse hook works, and the fail-open demo landed

The learner wrote `lab\.claude\hooks\block-unapplied.ps1` by hand and wired it into `lab\.claude\settings.json` (exec form, `onFailure: block`, matcher `Edit|Write|PowerShell|Bash`). Reported on 2026-10-19:

- **Step 5 (block):** they saw `PreToolUse:Edit hook error: […]: Blocked by hook: …`. The hook blocks Edit as designed.
- **Step 7 (typo in the -File path):** "the hook did not fire because the typo." The result is right, because the edit went through. The explanation is slightly off: the hook *did* run. `powershell.exe` started, couldn't find the script, and reported status 0, so Claude Code saw a success. That's why `onFailure` couldn't catch it. Correct this in Lesson 6's "From last time" and re-test it later with a spaced question.
- **Typo fixed:** the settings file now points at `block-unapplied.ps1` again.
- **Not committed:** `git status` shows `.claude/settings.json` modified and `.claude/hooks/` untracked. Commit at the start of Lesson 6.
- **Description lost:** `_Measure.tmdl` has no `///` description on Total Cost. The Lesson 5 step 7 cleanup (`git checkout -- Contoso.SemanticModel/definition`) reverted step 6's description too. That was a lesson bug, not the learner's mistake. Fixed in Lesson 5: step 7 now targets `Stores.tmdl`.
- **Lesson 4 steps 6–9:** the learner said "all good" and asked me to stop asking for that feedback. Don't chase it.

**Evidence**: learner's message on 2026-10-19; `git status` and `.claude/settings.json` in `lab\` on 2026-10-19.

**Implications**: Lesson 6 can reuse the same exec-form pattern and focus on what's new about PostToolUse (it can't block, and the tool has already run). The learner asked "proceed to lesson 6 first right? why lesson 7?" because I used an MCP example as a look-ahead. Keep look-ahead examples clearly labelled, or use ones from lessons they've already done.
