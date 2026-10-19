---
paths:
  - "**/*.Report/definition/**/*.json"
---

# PBIR (report) rules
- Keep each file's `$schema` line and only use properties that schema allows.
  Invalid JSON or schema = Desktop refuses to apply the change.
- Never rename page/visual folders or their `name` property unless I ask.
  If I do: only letters, digits, `_`, `-`; remind me to restart Desktop.
- visual.json and bookmarks can contain real data values (filters, slicers).
  Don't quote them back in summaries.
- `definition/report.json` holds report-level settings: ask before editing it.