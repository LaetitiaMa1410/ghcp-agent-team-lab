# Facilitator notes

## Before the session

- [ ] Open the [lab](https://moaw.dev/workshop/gh:LaetitiaMa1410/ghcp-agent-team-lab/main/docs/) and check that it renders.
- [ ] Make sure participants can clone the repo **or** download it as ZIP.
- [ ] Check that custom agents in `.github/agents/` show up in the agent picker in the participants' VS Code (org policies may restrict features).
- [ ] For bonus B3 (hook): check whether hooks are allowed by your organization's Copilot policy and whether participants have **Node.js**. If not, announce B3 as "read only".
- [ ] Optional: do one full run yourself with the reference agents (see below) so you know the expected result.

## Timing (60 min)

| Minute | What happens | Your cue |
| --- | --- | --- |
| 0–5 | Choose a use case, setup, roles | Tell both stories in 1 minute each. Teams pick a use case and roles within 2 min. Check they open the **use case folder**, not the repo root. |
| 5–25 | Task 1 — Architecture session | Walk around. Ask teams: *"Why this agent? What does it hand over?"* At minute 20: "5 minutes left — start the critic review." |
| 25–40 | Task 2 — Build the agent team | At minute 33: teams without agents should use checkpoint 2. |
| 40–52 | Task 3 — Run, check & improve | Encourage comparing results within the team. Remind: fix the agent, not the output. |
| 52–60 | Task 4 — Pitch | Strict 60 seconds per team. You (or volunteers) play Sabine and Jonas and vote. |

With more than 6 teams, let only 3–4 teams pitch, and let the others post their top 3 / recommendation in the chat.

**Which use case for whom?** *Lead generation* is a clear pipeline with messy data — good for teams new to agents.
*Partner cockpit* has more agents, parallel work and judgement calls — good for experienced teams. Both work in 60 minutes.

## Running the reference solution yourself

Inside the use case folder (e.g. a copy of it):

```bash
mkdir -p .github/agents && cp solutions/agents/*.agent.md .github/agents/ && cp solutions/AGENTS.reference.md AGENTS.md
copilot --agent lead-orchestrator -p "Run the full pipeline for WholesaleCon Europe 2026."               # lead-generation/
copilot --agent concierge -p "Prepare the partner cockpit for meeting 2 with Stadtwerke Lindenau."   # partner-cockpit/
```

A full orchestrated run took about **3–4 minutes** (lead generation) and **about 6 minutes** (partner cockpit) in testing.

## Easter eggs — answer key A · Lead generation 🥚

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

## Easter eggs — answer key B · Partner cockpit 🥚

| # | Trap | Where | Handled correctly when… |
| --- | --- | --- | --- |
| 1 | Launch date conflict | `meeting-1-notes.md` says "2027"; `voice-memo-transcript.txt` corrects: build ends end of 2027, **sales launch Q2 2028** | Q2 2028 is used and the contradiction is mentioned. |
| 2 | Household guess | Notes: "~35,000 households" (rep's guess) vs. **27,900** in the town profile | 27,900 is used; 35,000 not presented as a fact. |
| 3 | Similar town name | `press-clippings.md`: **Lindenberg** stops fiber plans | Ignored or explicitly marked as a different town. |
| 4 | Unfunded district | `coverage-lindenau.csv`: Altstadt (5,100) funding **pending** | Only Weststadt + Am Mühlbach (10,500 households) in the safe scenario; Altstadt at most as an option. |
| 5 | Contoso already there | Zentrum and Nordviertel have Contoso fiber | Fiber Access recommended there; VDSL interim for districts not built yet. |
| 6 | Rumour | Notes: the mayor might sell the network (unconfirmed) | Hypothesis with low confidence; **not** in the meeting plan. |
| 7 | Politics | Council minutes: opposition criticism | Positions and vote (27/9/2) reported neutrally. |
| 8 | No telecom IT | Only SAP IS-U; reference "utility H." paused at level 3 | Start at level 1 (portal), path to level 2. The bold scenario says how it closes the gap. |
| 9 | 24/7 gap | Call centre 8–18, no weekends; 24/7 fault handling mandatory | Fiber Access Plus or Network Operations Service recommended. |
| 10 | Internal material | Prices, discounts, business case, reference H. | Marked `INTERNAL`; only `external` / `showable_in_meeting` materials planned for the meeting. |
| 11 | Contact data | Lead record has e-mails and phone numbers | Only name and role in `out/`. |
| 12 | Competitor | FiberNext open-access offer, no details | No invented FiberNext terms; listed as an open question. |

A good cockpit typically recommends a **staged path**: start with Weststadt + Am Mühlbach on onboarding level 1 with Network Operations Service,
VDSL interim / Fiber Access in the other districts, Altstadt as an option after funding — and as the **next commitment step** a
letter of intent or a joint workshop whose result Thomas Reuter can present to the supervisory board on 10 December.

## Bonus challenges — what to expect

| Challenge | Typical result | Watch out |
| --- | --- | --- |
| B1 · Orchestrator | One prompt runs the whole team as subagents; ends with PASS/FAIL. 4–6 min per run, more credits. | Orchestrator must have `agent` but not `edit`. Teams with 6 agents (B) often forget to run analysts in parallel. |
| B2 · Skill | `/quality-check` returns a PASS/FAIL table with evidence; the orchestrator uses it as quality gate. | The skill must not change files; `name` must match the folder name. |
| B3 · Hook | The fake-event test prints `deny` for `data/…` and `{}` for `out/…`. | Hooks load only from the **Git root** (hence `git init` in the use case folder), in a **trusted** folder, at **session start**. In live tests the model usually refuses already because of `AGENTS.md` — that's the point to discuss: *instructions ask, hooks enforce.* |

Tested with Copilot CLI: the reference hook blocked an `apply_patch` into `data/`; the `concierge` used the `quality-check` skill as its quality gate (PASS).

## Debrief questions

- Where did a **human decision** change the result?
- Which **instruction** did you add after an agent made a mistake?
- Why did teams with the same data get different results — is that a problem? How would you make it more reproducible?
- Bonus teams: which rule would you **enforce** with a hook instead of only asking for it in `AGENTS.md`?
- How did the **pipeline** (A) and the **perspectives** pattern (B) differ? When would you use which?
- What would you need for a real deployment: web research (with its own guardrails), CRM access (e.g. via MCP), data protection review, scale?

## Adapting the lab

- **Shorter (45 min):** skip step 1d (critic review) and start Task 2 from the reference architecture.
- **Longer (90 min):** make the [bonus challenges](https://moaw.dev/workshop/gh:LaetitiaMa1410/ghcp-agent-team-lab/main/docs/?step=4) (orchestrator, skill, hook) part of the plan for everyone — about 25 minutes.
- **Your own use case:** copy a use case folder and replace `MISSION.md` and `data/` — the lab steps stay the same.
