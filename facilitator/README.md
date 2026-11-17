# Facilitator notes

## Before the session

- [ ] Open the [lab](https://moaw.dev/workshop/gh:LaetitiaMa1410/ghcp-agent-team-lab/main/docs/) and check that it renders.
- [ ] Make sure participants can clone the repo **or** download it as ZIP.
- [ ] Check that custom agents in `.github/agents/` show up in the agent picker in the participants' VS Code (org policies may restrict features).
- [ ] Optional: do one full run yourself with the reference agents (see below) so you know the expected result.

## Timing (60 min)

| Minute | What happens | Your cue |
| --- | --- | --- |
| 0–5 | Mission & setup, teams pick roles and path | Tell the story of Sabine — make it vivid. Push teams to pick a path within 1 min. |
| 5–25 | Task 1 — Architecture session | Walk around. Ask teams: *"Why this agent? What does it hand over?"* At minute 20: "5 minutes left — start the critic review." |
| 25–40 | Task 2 — Build the agent team | At minute 33: teams without agents should use checkpoint 2. |
| 40–52 | Task 3 — Run, check & improve | Encourage comparing results within the team. Remind: fix the agent, not the output. |
| 52–60 | Task 4 — Pitch | Strict 60 seconds per team. You (or a volunteer) play Sabine and vote. |

With more than 6 teams, let only 3–4 teams pitch, and let the others post their top 3 in the chat.

## Running the reference solution yourself

```bash
mkdir -p .github/agents && cp solutions/agents/*.agent.md .github/agents/ && cp solutions/AGENTS.reference.md AGENTS.md
copilot --agent lead-orchestrator -p "Run the full pipeline for WholesaleCon Europe 2026."
```

A full orchestrated run took about **3–4 minutes** in testing. Running the four agents one by one in VS Code takes about the same.

## Easter eggs — answer key 🥚

| # | Trap | Where | Handled correctly when… |
| --- | --- | --- | --- |
| 1 | Company spelling variants | "Nordwave" / "NordWave Networks" / "Nordwave Networks GmbH", "PocketMobile" vs. "Pocket Mobile Ltd", "Skyline Cloud" vs. "Skyline Cloud Ltd." | All variants map to one company. "Nordwave" (badge scan) is ideally marked as *uncertain*. |
| 2 | Duplicate person | Nadia Petrova in `exhibitors.json` **and** `badge_scans.txt` | Listed once, with both sources. |
| 3 | "Last, First" names | `badge_scans.txt` | Names shown as "First Last". |
| 4 | Company without profile | Quartz Logistics GmbH | Reported as unknown — not dropped silently, not invented. |
| 5 | Existing customers | Orbitel Communications, Fjord Fiber (`crm-existing-customers.csv`) | Not among the 6 meetings; handed to their account team. |
| 6 | Not a wholesale buyer | Kestrel Bank AG | Not recommended. |
| 7 | Keyword out of context | StreamNest: "private network interconnects" contains the voice signal "interconnect" | StreamNest is **not** rated high for Voice. |
| 8 | Personal data | `participants.csv` contains e-mail addresses | No e-mail addresses anywhere in `out/`. |
| 9 | Junior contacts | Hannah Vogel (Working Student), Tobias Kranz (Engineer) vs. Lena Hartmann (Head of Wholesale Purchasing) | The decision maker is picked. |
| 10 | Exhibitor without contacts | Helix Data Centers has a booth (D21) but no contact in `exhibitors.json` — Jan de Vries comes from the registrations | Booth and contact are combined, or Helix appears under booth visits. |

A good briefing typically recommends **Pocket Mobile, Arcadia Voice Hub, StreamNest, Nordwave, Brightloop IoT, Andes Telecom**,
with Helix, Vantage Subsea and Skyline Cloud as booth visits. Other choices are fine if they are justified with evidence.

## Debrief questions

- Where did a **human decision** change the result?
- Which **instruction** did you add after an agent made a mistake?
- Why did teams with the same data get different results — is that a problem? How would you make it more reproducible?
- What would you need for a real deployment: web research (with its own guardrails), CRM access (e.g. via MCP), data protection review, scale?

## Adapting the lab

- **Shorter (45 min):** skip step 1d (critic review) and start Task 2 from the reference architecture.
- **Longer (90 min):** let all teams do at least one Expert challenge, e.g. the orchestrator (E1) or the quality-gate skill (E2).
- **Your own use case:** replace `MISSION.md` and `data/` — the lab structure stays the same.
