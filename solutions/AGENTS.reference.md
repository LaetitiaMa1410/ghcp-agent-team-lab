# Lead generation agent team

Agents in this workspace prepare conference sales briefings for Contoso Wholesale (fictional).
The use case and the rules from sales are in `MISSION.md`.

## Guardrails (apply to every agent)

- **No internet.** Never fetch websites or call APIs. The only sources of truth are the files in `data/`.
- **`data/` is read-only.** Write only to files in `out/`. Each agent writes exactly the file it is responsible for.
- **No invented facts.** Every statement about a company must be backed by a short quote and the source file. If the data doesn't say it, write "unknown".
- **Data minimization.** Never copy e-mail addresses or other contact details into `out/`. Allowed: name, job title, company.
- **Show uncertainty.** If a match or rating is uncertain, say so and explain why instead of guessing.

## Conventions

- Handoff files are Markdown with tables, so humans can review them.
- Use the canonical company name from the H1 heading of its profile in `data/company-profiles/`.
- Keep outputs short. Sabine reads the briefing on her phone.
