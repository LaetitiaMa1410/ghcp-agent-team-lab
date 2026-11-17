---
name: quality-check
description: Checks the sales briefing and all handoff files in out/ against Sabine's rules and the known data traps. Use after the pipeline has run, or as the orchestrator's quality gate.
---

# Quality check — sales briefing

Review the results; **never change any file**. Read `MISSION.md`, `AGENTS.md`, `out/sales-briefing.md` and the handoff files in `out/`.
Look things up in `data/` to verify claims.

## Checks

| # | Check | Pass when |
| --- | --- | --- |
| 1 | Duplicates | Every person appears once, even if listed in several sources |
| 2 | Company matching | All spellings of a company map to one company; uncertain matches are marked |
| 3 | Missing profiles | Companies without a profile are reported as unknown, not dropped or invented |
| 4 | Existing customers | None of the 6 meetings is with a company from `data/crm-existing-customers.csv` |
| 5 | Wholesale fit | No company is recommended that doesn't buy wholesale services |
| 6 | Evidence | Every rating and "why now" is backed by a quote that is really in `data/`, used in context |
| 7 | Personal data | No e-mail addresses anywhere in `out/` (search for `@`) |
| 8 | Decision makers | Each meeting is with the most senior relevant contact available |
| 9 | Format | Exactly 6 meetings, booth visits and a not-a-priority list |

## Output

A table `# | Check | PASS/FAIL | Evidence`, then an overall **PASS** (all checks pass) or **FAIL**.
For every FAIL, name the agent in `.github/agents/` that caused it and the instruction that is missing.
