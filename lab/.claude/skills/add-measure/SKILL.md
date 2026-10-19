---
name: add-measure
description: Adds one DAX measure to the _Measure table of the Contoso semantic model (TMDL), checking for pending Desktop changes, duplicates and missing columns. Use when I ask to add, create or write a measure or KPI.
argument-hint: "[measure name and what it calculates]"

shell: powershell
allowed-tools:
  - PowerShell(New-Guid)
---

## Model state (filled in before you read this)
- Desktop has unapplied changes:
!`Test-Path Contoso.SemanticModel/.pbi/unappliedChanges.json`
- Existing measures and display folders:
!`Select-String -Path Contoso.SemanticModel/definition/tables/_Measure.tmdl -Pattern "^\tmeasure |displayFolder"`
- lineageTag for the new measure: !`New-Guid`

## Request
$ARGUMENTS

## Steps
1. If unapplied changes is True, stop. Ask me to apply them in Desktop first.
2. If the request doesn't say what to calculate, ask. Don't guess business logic.
3. If a measure above already calculates this, show it and ask before adding another.
4. Check every table and column you reference exists in
   Contoso.SemanticModel/definition/tables/*.tmdl. If one doesn't, stop and tell me.
5. Pick the formatString from format-strings.md in this skill's folder.
6. Add the measure after the last measure in _Measure.tmdl, before `partition`,
   using the lineageTag above.
7. Show me the new TMDL block, then remind me to click "Apply external changes".