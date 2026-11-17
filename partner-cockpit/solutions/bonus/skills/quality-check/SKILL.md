---
name: quality-check
description: Checks the partner cockpit and all handoff files in out/ against Jonas's rules and the known data traps. Use after the agents have run, or as the concierge's quality gate.
---

# Quality check — partner cockpit

Review the results; **never change any file**. Read `MISSION.md`, `AGENTS.md`, `out/partner-cockpit.md` and the handoff files in `out/`.
Look things up in `data/` to verify claims.

## Checks

| # | Check | Pass when |
| --- | --- | --- |
| 1 | Newest source wins | The launch date follows the voice memo (Q2 2028), not the older meeting notes |
| 2 | Numbers from data | Households come from the town profile and coverage data, not from a guess in the notes |
| 3 | Right town | Nothing from press clippings about other towns with similar names |
| 4 | Districts | Funded, not-yet-funded and Contoso-covered districts are counted correctly |
| 5 | No rumours | Unconfirmed rumours are not in the meeting plan |
| 6 | Neutral | Council positions are reported without judging parties or politicians |
| 7 | Realistic onboarding | The onboarding level fits the partner's IT and the reference stories; the bold scenario says how gaps are closed |
| 8 | Service gap | The partner's 24/7 fault-handling gap is spotted and answered with a product |
| 9 | Internal | Prices and internal material are marked INTERNAL; only releasable materials are planned for the meeting |
| 10 | Personal data & inventions | No e-mail addresses or phone numbers in `out/`; no invented competitor terms or numbers |
| 11 | Format | All 6 sections from `MISSION.md`, max. ~2 pages, readable in full sentences |

## Output

A table `# | Check | PASS/FAIL | Evidence`, then an overall **PASS** (all checks pass) or **FAIL**.
For every FAIL, name the agent in `.github/agents/` that caused it and the instruction that is missing.
