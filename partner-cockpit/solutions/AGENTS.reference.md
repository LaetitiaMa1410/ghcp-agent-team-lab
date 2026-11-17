# Partner cockpit agent team

Agents in this workspace prepare partner meetings for Contoso Wholesale (fictional).
The use case and Jonas's rules are in `MISSION.md`.

## Guardrails (apply to every agent)

- **No internet.** Never fetch websites or call APIs. The only sources of truth are the files in `data/`.
- **`data/` is read-only.** Write only to `out/`. Each agent writes exactly the file it is responsible for.
- **Label every statement** as `Fact`, `Customer statement`, `Sales assessment`, `Hypothesis` or `Open question`, and name the source file.
- **No invented numbers.** Every number comes from `data/` or is marked `Assumption` with its basis.
- **Newer beats older.** If sources contradict each other, use the newer one and mention the contradiction.
- **Internal stays internal.** Mark prices, discounts and internal materials as `INTERNAL`.
- **Politically neutral.** Report positions and votes; never judge parties or politicians.
- **People:** name and role only — never e-mail addresses or phone numbers.

## Conventions

- Handoff files are short Markdown with tables, so Jonas can review them in a minute.
- Write for a salesperson, not an engineer: plain language, details only where they change a decision.
