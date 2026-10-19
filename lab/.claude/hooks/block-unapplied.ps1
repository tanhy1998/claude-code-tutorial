# PreToolUse guard: block semantic-model edits while Power BI Desktop
# has pending Power Query changes (.pbi\unappliedChanges.json).
$ErrorActionPreference = "Stop"
$call = [Console]::In.ReadToEnd() | ConvertFrom-Json

$target = if ($call.tool_input.file_path) { $call.tool_input.file_path } else { $call.tool_input.command }
if ($target -notmatch '\.tmdl|\.SemanticModel[\\/]definition') { exit 0 }

$pending = Get-ChildItem "$env:CLAUDE_PROJECT_DIR\*.SemanticModel\.pbi\unappliedChanges.json" -ErrorAction SilentlyContinue
if (-not $pending) { exit 0 }

[Console]::Error.WriteLine("Blocked by hook: $($pending[0].FullName) exists. Ask the user to apply or discard the pending changes in Power BI Desktop first.")
exit 2