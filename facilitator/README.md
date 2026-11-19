# Facilitator notes

## Before the session

- [ ] Open the [lab](https://moaw.dev/workshop/gh:LaetitiaMa1410/ghcp-agent-team-lab/main/docs/) and check that it renders.
- [ ] Make sure participants can clone the repo **or** download it as ZIP.
- [ ] Check that custom agents in `.github/agents/` show up in the agent picker in the participants' VS Code, and that an agent with the `agent` tool can run them as **subagents** (org policies may restrict features).
- [ ] For bonus B2 (hook): check whether hooks are allowed by your organization's Copilot policy and whether participants have **Node.js**. If not, announce B2 as "read only".
- [ ] Check that the stakeholder agents (`sabine`, `jonas`) show up in the agent picker and answer in character.
- [ ] Optional: do one full run yourself with the reference agents (see below) so you know the expected result.

## Timing — 3 hours

| Time | What happens | Your cue |
| --- | --- | --- |
| 0:00–0:15 | Choose a use case, setup, roles | Tell both stories in 1 minute each. Teams pick a use case and roles within 3 min. Check they open the **use case folder**, not the repo root, and that `sabine` / `jonas` show up in the agent picker. |
| 0:15–0:45 | 1a–1c · Data, interview, requirements | Make sure teams **really interview** (one question at a time, follow-ups) instead of asking for "everything you know". At 0:45: **checkpoint 1** — every team has a signed-off `requirements.md`. |
| 0:45–1:05 | 1d–1e · Decompose, options, ADR | Push teams to **decide** and write down *why*. Ask: *"Which option did you reject, and why?"* |
| 1:05–1:15 | 1f · Detailed design | Check the traceability section: is any requirement uncovered? |
| 1:15–1:20 | 1g · Pre-mortem | Fresh chat! Teams tend to reuse the design chat — that's a biased reviewer. |
| 1:20–1:30 | 1h · Cross-team review | Pair teams (ideally **same** use case, so the reviewers know the data). Strict 5 + 5 min. At 1:30: **checkpoint 2**. |
| 1:30–1:40 | ☕ Break | Remind the driver to share `design/` and `architecture.md`. |
| 1:40–2:10 | Task 2 · Build the agent team | At 2:00: teams without agents should use **checkpoint 3**. |
| 2:10–2:40 | Task 3 · Run, check & improve | Make sure teams really **open the files** at each orchestrator checkpoint instead of typing `continue` blindly. Remind: fix the agent, not the output. Fast teams → bonus. |
| 2:40–3:00 | Task 4 · Pitch & debrief | 2 minutes per team. You (or volunteers) play Sabine and Jonas and vote. 5–8 min debrief. |

## Timing — 2-hour variant

| Time | What happens |
| --- | --- |
| 0:00–0:10 | Choose a use case, setup, roles |
| 0:10–0:55 | Architecture session **1a–1f** (8 / 7 / 7 / 5 / 8 / 10 min) — skip pre-mortem (1g) and cross-team review (1h) |
| 0:55–1:20 | Task 2 · Build (shorten 2d to a quick check, skip the dry run) |
| 1:20–1:45 | Task 3 · Run, check & improve |
| 1:45–2:00 | Task 4 · Pitch (1 minute per team) & short debrief |

With more than 6 teams, let only 3–4 teams pitch, and let the others post their top 3 / recommendation in the chat.

**Which use case for whom?** *Lead generation* is a clear pipeline with messy data — good for teams new to agents.
*Partner cockpit* has more agents, parallel work and judgement calls — good for experienced teams.

## The stakeholder agents

`.github/agents/sabine.agent.md` (A) and `jonas.agent.md` (B) play the user in step 1b. They have **no tools** and
`disable-model-invocation: true`, so the orchestrators can't call them. They answer only what is asked and know a few things that are **not** in `USE-CASE.md`:

| Hidden in the interview — A · Sabine | Hidden in the interview — B · Jonas |
| --- | --- |
| 30-minute slots, ~2 h for booth visits | Dr. Albers **joins meeting 2**; she thinks in cost risk |
| Reads the briefing **on her phone** | Wants a **letter of intent** or a joint workshop as next step |
| **Mix of product categories**, variety breaks ties | Reads on the train: max. 2 pages, **full sentences** |
| **High / Medium / Low**, no numeric scores | No pricing approval yet → **no prices** in meeting 2 |
| Junior-only contact → "door opener only" | Calculator export: **show only**, never hand out |
| Section **"Hand over to account team"** | 35,000 was a guess; the rumour must never come up; the memo is right |
| Uncertain company matches: **say so** | FiberNext's offer is unknown → question for Thomas |

Teams that find most of these in the interview have clearly better requirements. In the debrief, ask: *"What did you learn in the interview that wasn't in the brief?"*
If a stakeholder agent goes off-script, remind teams: it's a role-play — the data in `data/` always wins.

## Where the use cases come from

Both use cases are anonymized versions of real customer scenarios:

- **A** follows a real sales roadmap: (1) collect conference participants, (2) **company selection criteria and contacts** — the scope of this lab,
  (3) an internal sales UI, (4) full automation. The target process — company names → website → portfolio and customers → categorize → lead score per product category → merge with participants → briefing — is reflected in the reference pipeline. Booking appointments was an explicit non-goal.
- **B** follows a real "agent team" concept: a front-door agent that runs a fixed sales process, analyses **in parallel**, condenses **sequentially**,
  and leaves the final decision to the sales person. The original design used about a dozen role agents. The reference solution maps them to fewer agents:

| Original role (simplified) | Reference agent |
| --- | --- |
| Front door / process guide | `concierge` |
| Facts & figures, region & politics | `fact-analyst` |
| Technology & feasibility | `tech-advisor` |
| The partner's people and emotions | `partner-voice` |
| Optimistic vs. realistic scenario, valuation | `scenario-bold`, `scenario-safe` |
| Synthesis, materials, wording, tactics | `cockpit-writer` |
| Quality and compliance review | quality gate in `concierge` (bonus: `quality-check` skill) |
| Creative provocation, extended expert council | not in the lab — good debrief topic |

Use this in the debrief: *"Your team decided X agents — the original concept had about twelve. When is more better?"*

## Running the reference solution yourself

Inside the use case folder (e.g. a copy of it):

```bash
mkdir -p .github/agents && cp solutions/agents/*.agent.md .github/agents/ && cp solutions/AGENTS.reference.md AGENTS.md
copilot --agent lead-orchestrator --allow-all-tools -p "Prepare the result for Sabine."      # lead-generation/
copilot --agent concierge --allow-all-tools -p "Prepare the partner cockpit for meeting 2."   # partner-cockpit/
copilot --continue --allow-all-tools -p "continue"                                            # next checkpoint, repeat
```

The orchestrator stops after every step (A: 4 steps) or stage (B: 3 stages). A full run took about **3–4 minutes** (A) and **about 6 minutes** (B) of agent time in testing, plus the review time at the checkpoints.

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
| B1 · Skill | `/quality-check` returns a PASS/FAIL table with evidence; the orchestrator uses it as quality gate. | The skill must not change files; `name` must match the folder name. |
| B2 · Hook | The fake-event test prints `deny` for `data/…` and `{}` for `out/…`. | Hooks load only from the **Git root** (hence `git init` in the use case folder), in a **trusted** folder, at **session start**. In live tests the model usually refuses already because of `AGENTS.md` — that's the point to discuss: *instructions ask, hooks enforce.* |

Tested with Copilot CLI: the reference hook blocked an `apply_patch` into `data/`; the `concierge` used the `quality-check` skill as its quality gate (PASS).

## Debrief questions

- What did you learn in the **interview** that wasn't in the brief? Did it change your design?
- Which architecture **option did you reject**, and would you decide the same way now?
- Where did a **human decision** change the result?
- Which **instruction** did you add after an agent made a mistake?
- Why did teams with the same data get different results — is that a problem? How would you make it more reproducible?
- Bonus teams: which rule would you **enforce** with a hook instead of only asking for it in `AGENTS.md`?
- How did the **pipeline** (A) and the **perspectives** pattern (B) differ? When would you use which?
- What would you need for a real deployment: web research (with its own guardrails), CRM access (e.g. via MCP), data protection review, scale?

## Adapting the lab

- **2 hours:** see the 2-hour variant above.
- **Longer (3.5 h):** make the [bonus challenges](https://moaw.dev/workshop/gh:LaetitiaMa1410/ghcp-agent-team-lab/main/docs/?step=4) (skill, hook) part of the plan for everyone — about 20–30 minutes.
- **Architecture only (90 min):** run steps 1a–1h and stop at checkpoint 2 — a good format for architects and product owners.
- **Your own use case:** copy a use case folder and replace `USE-CASE.md`, `MISSION.md`, `data/` and the stakeholder agent — the lab steps stay the same.
