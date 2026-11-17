---
published: true
type: workshop
title: "From Use Case to Agent Team"
short_title: "From Use Case to Agent Team"
description: A 60-minute hands-on lab. Take a real-world sales use case, run an architecture session with GitHub Copilot, design a team of specialized agents and build it — locally in VS Code.
level: intermediate
authors:
  - Laetitia Maar
contacts:
  - "@LaetitiaMa1410"
duration_minutes: 60
tags: GitHub, Copilot, Custom Agents, Agent Architecture, Context Engineering, Hands-on Lab
navigation_levels: 2
navigation_numbering: false
---

# From Use Case to Agent Team

<style>:root{--text-base-size:17px}html{font-size:var(--text-base-size)}.container{max-width:1200px!important}</style>

*Hands-on lab · 60 minutes · teams of 3–4*

You know the building blocks: prompting, context engineering, custom instructions, custom agents, skills.
Now you combine them on a **real-world use case** — and start like good architects do: **understand the problem before you build**.

| # | Task | Time | You end up with |
| --- | --- | --- | --- |
| 0 | Mission & setup | 5 min | The repo open in VS Code, roles assigned |
| 1 | Architecture session | 20 min | `architecture.md` — diagram, handoffs, agent cards |
| 2 | Build the agent team | 15 min | `AGENTS.md` + `.github/agents/*.agent.md` |
| 3 | Run, check & improve | 12 min | `out/sales-briefing.md` |
| 4 | Pitch | 8 min | Your top 3 meetings, presented in 60 seconds |

<div class="info" data-title="Everything stays local">

> You only need **VS Code**, **GitHub Copilot** and the lab repository. No deployments, API keys, internet research,
> issues or pull requests. All data is **fictional** and lives in the repo.

</div>

## The mission

**Sabine** is a Key Account Manager at **Contoso Wholesale**, a (fictional) carrier that sells network services to other
telecom companies: **IP transit, international voice, mobile & IoT wholesale and backbone capacity**.

Sales is shifting from **farming** (growing existing customers) to **hunting** (winning new ones). Conferences are the
best hunting grounds — but preparing for them is painful: participant lists come from **different sources in different formats**,
company names are **spelled differently**, finding out what a company needs takes **manual research**, and nobody knows **whom** to talk to, or **why now**.

In two weeks Sabine attends **WholesaleCon Europe 2026**. She has **6 meeting slots**.

<div class="important" data-title="Your mission">

> **Design and build a team of specialized GitHub Copilot agents that tells Sabine whom to meet, which product to pitch, and why.**

</div>

**Sabine wants a one-page sales briefing** with:

1. **6 recommended meetings** — person, role, company, product, *why now* (with evidence), one opening question.
2. **Booth visits** — exhibitors worth visiting without a booked meeting.
3. **Not a priority** — companies she can skip, and why.

**Sabine's rules:** new customers first (existing customers belong to their account team) · every recommendation is
**traceable** to the data · only **name, job title and company** of people (data protection) · **decision makers** preferred.

| Data in the repo | What it is |
| --- | --- |
| `data/conferences/wholesalecon-europe-2026/` | Registrations (CSV), exhibitors (JSON), badge scans (TXT) |
| `data/company-profiles/*.md` | One page per company — stands in for its website |
| `data/product-categories.json` | Contoso Wholesale's product categories |
| `data/crm-existing-customers.csv` | Extract from Contoso's CRM |

<div class="tip" data-title="Easter eggs 🥚">

> The data is small but realistic: it hides **gaps, duplicates and traps**. Every trap your agent team handles correctly
> earns a point in the pitch. Full brief: [`MISSION.md`](https://github.com/LaetitiaMa1410/ghcp-agent-team-lab/blob/main/MISSION.md).

</div>

---

<style>:root{--text-base-size:17px}html{font-size:var(--text-base-size)}.container{max-width:1200px!important}</style>

# Setup

You need **VS Code** with **GitHub Copilot** (signed in, Chat view: `Ctrl+Alt+I` / `Cmd+Ctrl+I`). Every team member gets their own copy:

```bash
git clone https://github.com/LaetitiaMa1410/ghcp-agent-team-lab.git
cd ghcp-agent-team-lab
code .
```

No Git? On the [repository page](https://github.com/LaetitiaMa1410/ghcp-agent-team-lab) select **Code → Download ZIP** and open the folder in VS Code.
Confirm **Workspace Trust**, open the Chat view and check that you can switch between **Ask**, **Plan** and **Agent** in the agent picker.

```text
ghcp-agent-team-lab/
|-- MISSION.md        the use case — start here
|-- data/             all input data (read-only)
|-- out/              your agents write their results here
`-- solutions/        reference solution — no peeking before the checkpoints 🙈
```

## Team roles

| Role | Job |
| --- | --- |
| 🧑‍✈️ **Driver** | Shares the screen in task 1 and types the prompts. |
| 💼 **Sabine** | Product owner. Answers Copilot's questions about the business — *you* decide, not the AI. |
| 🔍 **Critic** | Challenges every answer: *"Is that really in the data?"* |

Task 1 runs on the driver's screen; at the end the driver shares `architecture.md` (e.g. via team chat) and everyone saves it in their copy.
From task 2 on, everyone works on their own machine and you compare results as a team.

<div class="warning" data-title="Keep an eye on the clock">

> Every task ends with a **checkpoint**. Behind schedule? Use it and move on — a finished pipeline beats a perfect architecture without a result.

</div>

---

<style>:root{--text-base-size:17px}html{font-size:var(--text-base-size)}.container{max-width:1200px!important}</style>

# Hands-on

## 1 · Architecture session

**⏱ 20 minutes · together on the driver's screen**

Before you write a single agent, you need to know **what problem you solve**, **what data you have** and
**which pieces of work exist**. Copilot is your architecture sparring partner — it reads, explains and proposes; **your team decides**.

### 1a · Understand the use case (5 min)

Select the **Ask** agent and send:

```text
#file:MISSION.md
You are a solution architect. Help our team understand this use case before we design anything.
Read the files in data/ (ignore the solutions/ folder).

Answer in max. 12 bullets:
- the business goal and the user
- each data source: format, content, and data quality issues you notice
- the expected output
- what makes this use case hard

Then ask us the 3 most important clarifying questions, one at a time, and wait for our answer.
```

💼 **Sabine** answers the questions using `MISSION.md` — and where it says nothing, *decides*.
This is **context engineering**: you build a shared understanding for the team *and* for Copilot before asking for a design.

### 1b · Break it down into components (5 min)

In the same chat:

```text
Describe the process from the raw data to Sabine's briefing as a sequence of steps.
For each step: input, output, and whether it needs judgement (LLM) or could be a fixed rule.

Then propose a team of 3 to 5 specialized agents. Each agent has exactly ONE responsibility.
Explain why you split it this way, and what would go wrong with one big agent.
Don't write any files yet.
```

🔍 **Critic**, challenge the proposal: Does an agent only pass data along (→ merge)? Does one do two different things (→ split)?
Which step **must** come first? Where does **personal data** flow, and where are **existing customers** filtered out?
Tell Copilot what you decided, e.g. *"Merge agents 3 and 4. Add the CRM check to the company step."*

### 1c · Write the architecture overview (5 min)

Switch to the **Agent** agent and send:

```text
Create architecture.md in the repository root. Use the agents we agreed on. Keep it to about one page:

1. The use case in one sentence.
2. A Mermaid flowchart (left to right) with all data sources, the agents, and the handoff files in out/.
3. A handoff contract table: file | producer | consumer(s) | content and structure.
4. Agent cards as a table: agent | responsibility | reads | writes | tools | done when.
   Tools follow least privilege: only 'read', 'search', 'edit'.
5. Shared guardrails that apply to every agent.
```

Read `architecture.md` as a team. (No Mermaid preview? No problem — agents read the text, not the picture.)

### 1d · Let a critic review the design (5 min)

Open a **new chat** (fresh context = unbiased reviewer), select **Ask** and send:

```text
#file:architecture.md #file:MISSION.md
Act as a critical senior architect reviewing this design. Find:
- the 3 biggest risks (think: wrong merges, invented facts, personal data in the output, existing customers)
- missing or unclear handoffs between agents
- agents that are too big or unnecessary
Max. 8 bullets, most important first.
```

Pick the 2–3 findings that matter most and let your **Agent** chat update `architecture.md`. Then the driver shares it with the team.

<div class="info" data-title="✅ Checkpoint 1">

> **You should have:** `architecture.md` with diagram, handoff contracts, agent cards and shared guardrails.
> Compare with the [reference architecture](https://moaw.dev/workshop/gh:LaetitiaMa1410/ghcp-agent-team-lab/main/docs/?step=3) — can you explain *why* yours is different?
>
> **Behind schedule?** `cp solutions/architecture.md architecture.md` (PowerShell: `Copy-Item solutions/architecture.md architecture.md`)

</div>

## 2 · Build the agent team

**⏱ 15 minutes · everyone on their own machine**

Your architecture is the spec. Now it becomes **configuration**: shared rules go into `AGENTS.md`, role-specific
instructions into one `.agent.md` file per agent. Each agent gets a **small, focused context** — so you can test, fix and re-run one without touching the others.

### 2a · Shared guardrails in `AGENTS.md` (3 min)

**Agent**, new chat:

```text
#file:architecture.md
Create AGENTS.md in the repository root. It contains ONLY the shared guardrails and conventions
that apply to every agent — nothing role-specific. Max. 15 lines, concrete and checkable.
```

Make sure it covers: **no internet**, **`data/` is read-only**, **write only to `out/`**, **no e-mail addresses in outputs**,
**every claim backed by a quote and source file**, **say "unknown" instead of guessing**. Add what's missing yourself.

### 2b · Generate the agents (4 min)

Same chat:

```text
For every agent card in #file:architecture.md create .github/agents/<agent-name>.agent.md.

Frontmatter:
- name
- description: what the agent does and when to use it (one sentence)
- tools: only what it needs, from 'read', 'search', 'edit'

Body:
- the role in one sentence
- inputs: exact file paths
- steps
- output: the exact file in out/ and its structure, matching the handoff contract
- rules, including what it must NOT do because another agent does it

Don't repeat the guardrails from AGENTS.md.
```

Your agents should now appear in the agent picker. Not there? Check **Chat: Open Customizations → Agents** for frontmatter errors.

### 2c · Own one agent (8 min)

**Each person owns one agent** and reviews it:

| ✔ | Check |
| --- | --- |
| ☐ | **One** responsibility — nothing that belongs to another agent |
| ☐ | Inputs and outputs are **exact paths**; the output is exactly what the **next agent** expects |
| ☐ | It says what to do when data is **missing or ambiguous** |
| ☐ | **Least privilege** tools — does it really need `edit`? |
| ☐ | It knows when it is **done** |

Improve it by hand or with Copilot (*"Make the output section of #file:.github/agents/lead-scorer.agent.md
match the handoff contract in #file:architecture.md"*) and share your changes so everyone has the same agents.

<div class="info" data-title="✅ Checkpoint 2">

> **You should have:** `AGENTS.md` and one `.agent.md` per agent, all visible in the agent picker. **Behind schedule?** Copy the reference agents:
>
> ```bash
> # macOS / Linux
> mkdir -p .github/agents && cp solutions/agents/*.agent.md .github/agents/ && cp solutions/AGENTS.reference.md AGENTS.md
> ```
>
> ```powershell
> # Windows PowerShell
> New-Item -ItemType Directory -Force .github/agents | Out-Null; Copy-Item solutions/agents/*.agent.md .github/agents/; Copy-Item solutions/AGENTS.reference.md AGENTS.md
> ```

</div>

## 3 · Run, check & improve

**⏱ 12 minutes · everyone on their own machine**

### 3a · Run the pipeline (5 min)

Run your agents **in the order of your architecture**. For each agent: open a **new chat**, select the agent, send
`Run your step for WholesaleCon Europe 2026.` and **look at its output file in `out/`** before you start the next one.
That's your **human checkpoint** — an error in step 1 silently poisons everything after it.

### 3b · Quality checklist 🥚 (4 min)

Check `out/sales-briefing.md` and the handoff files. Every "yes, handled correctly" is a point:

| ✔ | Question |
| --- | --- |
| ☐ | Is every **person** listed only once, even if they appear in several sources? |
| ☐ | Did every **spelling** of a company end up at the right company? Are uncertain matches marked? |
| ☐ | What happened to companies **without a profile**? |
| ☐ | Are there **existing customers** among the 6 meetings? |
| ☐ | Is any company recommended that **doesn't buy wholesale** at all? |
| ☐ | Is any rating based on a **word taken out of context**? |
| ☐ | Are there **e-mail addresses** anywhere in `out/`? (Search for `@`) |
| ☐ | Can every **"why now"** be found in `data/`? |
| ☐ | Does every meeting have a **decision maker** where one exists? |

Compare with your teammates — **same agents, same data — same result?**

### 3c · Fix the agent, not the output (3 min)

Found a problem? **Don't edit `out/`** — fix the cause:

```text
#file:out/sales-briefing.md
The briefing has this problem: <describe it>.
Look at the agent files in .github/agents/ and AGENTS.md.
Which agent caused it, and which instruction is missing or unclear?
Propose a minimal change to that agent file. Don't change any file in out/.
```

Apply the change and re-run **that agent and every agent after it**. Did the problem disappear?

<div class="info" data-title="✅ Checkpoint 3">

> **You should have:** `out/sales-briefing.md` and at least one improved agent.
> Example result: [`solutions/sample-output/`](https://github.com/LaetitiaMa1410/ghcp-agent-team-lab/tree/main/solutions/sample-output).
> **Next:** [pitch](https://moaw.dev/workshop/gh:LaetitiaMa1410/ghcp-agent-team-lab/main/docs/?step=3).

</div>

---

<style>:root{--text-base-size:17px}html{font-size:var(--text-base-size)}.container{max-width:1200px!important}</style>

# Pitch & wrap-up

## 4 · Pitch

**⏱ 8 minutes · all teams together**

Each team gets **60 seconds**:

1. 🗺️ **Your architecture** — which agents, and why?
2. 🤝 **Your top 3 meetings for Sabine** — who, what product, why now.
3. 🔧 **One fix** — what did your agent team get wrong, and which instruction fixed it?

Then **Sabine votes**: whose briefing would she take to the conference? 🥚 Easter egg points break a tie.

**Discussion:** Why did teams with the **same data** get **different** results? Which **human** decision changed the result?
What would it take to run this **for real** — real websites, a real CRM, hundreds of companies?

## Reference solution

**One** good solution — not the only one. Compare the **reasoning**, not the names.

![Reference architecture](assets/reference-architecture.png)

| Agent | Responsibility | Writes |
| --- | --- | --- |
| `source-collector` | Merges the 3 conference sources, matches company spellings to profiles, de-duplicates people | `out/participants.md` |
| `company-analyst` | Segment, current needs (with quotes) and existing-customer status per company | `out/company-insights.md` |
| `lead-scorer` | High / Medium / Low fit per company and product category, with quoted reasons | `out/lead-scores.md` |
| `briefing-writer` | Picks one decision maker per company and writes Sabine's briefing | `out/sales-briefing.md` |
| `lead-orchestrator` *(bonus)* | Runs the four agents as subagents and checks the result | – |

**Key design decisions**

- **Matching comes first** — every later step depends on knowing that two spellings are the same company.
- **Existing customers are flagged before scoring**, so they can't take Sabine's 6 slots.
- **Scoring is separate from writing** — ratings can be checked before they become persuasive text.
- **Files in `out/` are the handoffs** — every intermediate result is visible and reviewable.
- **Least privilege** — workers can `read`, `search`, `edit`; the orchestrator can only delegate and read.

Files: [`architecture.md`](https://github.com/LaetitiaMa1410/ghcp-agent-team-lab/blob/main/solutions/architecture.md) (incl. contracts and rejected alternatives) ·
[`AGENTS.reference.md`](https://github.com/LaetitiaMa1410/ghcp-agent-team-lab/blob/main/solutions/AGENTS.reference.md) ·
[`agents/`](https://github.com/LaetitiaMa1410/ghcp-agent-team-lab/tree/main/solutions/agents) ·
[`sample-output/`](https://github.com/LaetitiaMa1410/ghcp-agent-team-lab/tree/main/solutions/sample-output)

## Take it home

| What you did | Building block |
| --- | --- |
| Understand the use case with Copilot | Prompting, context engineering |
| Decompose into agents, handoff contracts, agent cards | Agent architecture, spec before code |
| Design review in a fresh chat | Context hygiene, AI-assisted review |
| `AGENTS.md` + `.agent.md` | Custom instructions, custom agents, least privilege |
| Check every handoff, fix the agent not the output | Human in the loop, *miss → diagnosis → fix* |

1. **Understand before you build.** 15 minutes of architecture with Copilot saves hours of re-prompting.
2. **Small agents, clear contracts.** One responsibility, one output file, explicit structure.
3. **Make the handoffs visible.** If you can't review it, you can't trust it.
4. **Fix causes, not symptoms.** Every agent mistake is a missing or unclear instruction.

<div class="tip" data-title="Do this next week">

> Take one recurring, multi-step task from your work and run step 1 of this lab on it — 20 minutes, time-boxed. The clarity is the win.

</div>
