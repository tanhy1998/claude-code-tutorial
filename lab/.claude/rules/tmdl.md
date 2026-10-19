---
paths:
  - "**/*.tmdl"
---

# TMDL (semantic model) rules
- All measures live in the `_Measure` table, each with a `displayFolder`
  (General, Sales, Product). Flag any measure that has none.
- Measure names are business-friendly, with units where they apply:
  `Gross Profit (%)`, `Total Sales`. Never `_Sales` or `sales_num`.
- Every measure has a `formatString`.
- Indent with tabs. Multi-line DAX sits one level deeper than the measure's properties.
- Wrap names in single quotes if they contain a space, `.`, `=`, `:` or `'`.
