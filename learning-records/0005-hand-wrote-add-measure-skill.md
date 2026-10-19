# Hand-wrote the /add-measure skill; observation steps unreported

The learner wrote `lab\.claude\skills\add-measure\SKILL.md` and `format-strings.md` by hand and committed them with the `Total Cost` measure in `e616f21` (2026-10-18). Checked on 2026-10-18:

- **Frontmatter is clean.** The first line is exactly `---`, with nothing escaped, so the VS Code plain-text editor fix from Lesson 4 step 1 worked. There's a stray blank line inside the frontmatter, which is harmless.
- **SKILL.md matches the model answer** almost word for word: literal paths, `shell: powershell`, and `allowed-tools: PowerShell(New-Guid)`. It doesn't repeat the conventions from `tmdl.md`. This is the first config with "one home per instruction" applied correctly (compare learning record 0003).
- **The CANARY line is gone** from `tmdl.md`.
- **`Total Cost` is correct TMDL.** It uses tabs and CRLF, sits in the Sales folder with the money format string from the supporting file, has a fresh lineageTag, and is inserted before `partition`. That means the skill's steps 4–6 ran as designed.

Not reported: what they saw in steps 6–9. Did the skill stop on the fake pending file? Did the natural-language trigger fire and catch `Total Sales`? Was the description gone with `disable-model-invocation`? And why is the default invocation right for this skill? They moved straight to "lets go lesson 5".

**Evidence**: `git show --stat e616f21`; `_Measure.tmdl` checked with `cat -A`; SKILL.md contents on 2026-10-18.

**Implications**: They can write a skill from a skeleton. Lesson 5 can ask for a script written from a skeleton the same way. Ask for the step 6 and 8 observations in Lesson 5's "From last time", because step 6 (the skill stopping on a pending file) is the *context-layer* version of what Lesson 5's hook enforces. Re-test "personal beats project skills" as a warm-up question; it was flagged after the Q1 confusion.
