# Path rules work, but Lesson 2 was only half applied

The learner confirmed the canaries behaved as predicted, so they understand on-demand loading. Three things in the lab show the lesson was only half applied:

- **Couldn't detect the broken-quotes failure.** On v2.1.302 I reproduced it: the parse error appears only in the log file `~\.claude\debug\<session>.txt` (`[WARN] Failed to parse YAML frontmatter: YAML Parse error: Unresolved alias`), not in the terminal. Lesson 2 didn't say where to look. The gap was in the lesson, not the learner.
- **`pbir.md` was mangled by an editor** that escapes markdown (`\---`, `\*\*`, `&#x20;`), and it was committed in `0e75420`. With no frontmatter, it loads every session. The learner didn't notice, so they don't yet check `/context` after editing config.
- **CLAUDE.md was never edited.** The Team conventions are still there (duplicated in `tmdl.md`), and the ambiguous `report.json` line is unfixed. Their margin_pct answer ("caught, but it follows the tmdl rules") can't separate the two sources.

**Evidence**: file contents and lab git log checked 2026-10-18. Learner's answers: "1. yes 2. cant detect 3. yes, but it follow the tmdl rules".

**Implications**: Lesson 3 opens with a short repair step and a debug-log command. Future lessons should include a "verify what loaded" step (`/context`, `/status`, `/permissions`) after every config edit, and should name the editor to use. Ask which editor mangled pbir.md. If it's a tool they use daily, warn about it in every hand-written-config step.
