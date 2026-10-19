## PBIP rules
<!-- Source: learn.microsoft.com/power-bi/developer/projects/projects-overview
     and .../projects-external-editing. Stripped before Claude reads this file. -->
- Semantic model = TMDL in `Contoso.SemanticModel/definition/`. Report = PBIR JSON in `Contoso.Report/definition/`.
- NEVER edit these (external edits unsupported): `definition.pbir`, `report.json at the report folder root (PBIR-Legacy)`,
  `mobileState.json`, `semanticModelDiagramLayout.json`, `diagramLayout.json`.
- NEVER read or edit anything under `.pbi/` (`cache.abf`, `localSettings.json`): local cache, gitignored.
- Save every file as UTF-8 without BOM. Keep CRLF line endings.
- Before editing: ask me to Save in Power BI Desktop. After editing: tell me to click "Apply external changes".
- If `.pbi/unappliedChanges.json` exists, stop and ask me to apply pending changes first.

