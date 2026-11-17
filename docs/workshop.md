---
published: true
type: workshop
title: "From Use Case to Agent Team"
short_title: "From Use Case to Agent Team"
description: A 60-minute hands-on lab. Take a real-world sales use case, run an architecture session with GitHub Copilot, design a team of specialized agents and build it — locally in VS Code, with three paths for every experience level.
level: intermediate
authors:
  - Laetitia Maar
contacts:
  - "@LaetitiaMa1410"
duration_minutes: 60
tags: GitHub, Copilot, Custom Agents, Agent Architecture, Context Engineering, Hands-on Lab
navigation_levels: 3
navigation_numbering: false
---

# From Use Case to Agent Team

<style>:root{--text-base-size:17px}html{font-size:var(--text-base-size)}.container{max-width:1200px!important}</style>

*Hands-on lab · 60 minutes · teams of 3–4*

You have learned the building blocks: prompting, context engineering, custom instructions, custom agents, skills.
Now you put them together on a **real-world use case** — and you start the way good architects do: by
**understanding the problem before you build anything**.

In this lab your team will:

1. **Understand** a business use case with GitHub Copilot as your sparring partner.
2. **Design** an architecture: components, data sources and how a team of **specialized agents** works together.
3. **Build** that agent team as custom agents in VS Code.
4. **Run, check and improve** it — and pitch the result.

| # | Task | Time | You end up with |
| --- | --- | --- | --- |
| 0 | Mission & setup | 5 min | The repo open in VS Code, roles assigned |
| 1 | Architecture session | 20 min | `architecture.md` — diagram, handoffs, agent cards |
| 2 | Build the agent team | 15 min | `AGENTS.md` + `.github/agents/*.agent.md` |
| 3 | Run, check & improve | 12 min | `out/sales-briefing.md` |
| 4 | Pitch | 8 min | Your top 3 meetings, presented in 60 seconds |

<div class="info" data-title="Everything stays local">

> You only need **VS Code**, **GitHub Copilot** and this repository. No deployments, no API keys, no internet research,
> no GitHub issues or pull requests. All data is **fictional** and lives in the repo.

</div>

<div class="tip" data-title="Three paths, one mission">

> On the [Choose your path](#choose-your-path) page you pick **Guided**, **Standard** or **Expert**.
> All paths solve the same mission in the same time, and all teams meet again for the [pitch](#task-4--pitch).

</div>

---

<style>:root{--text-base-size:17px}html{font-size:var(--text-base-size)}.container{max-width:1200px!important}</style>

## The mission

**Sabine** is a Key Account Manager at **Contoso Wholesale**, a (fictional) carrier that sells network services to other
telecom companies: **IP transit, international voice, mobile & IoT wholesale and backbone capacity**.

Sales is changing its focus from **farming** (growing existing customers) to **hunting** (winning new ones).
Conferences are the best hunting grounds — but preparing for them is painful:

- Participant lists arrive from **different sources in different formats**.
- The same company is spelled in **different ways**.
- Finding out what a company needs takes **manual web research**.
- Nobody knows **whom** to talk to, or **why now**.

In two weeks Sabine attends **WholesaleCon Europe 2026**. She has **6 meeting slots**.

<div class="important" data-title="Your mission">

> **Design and build a team of specialized GitHub Copilot agents that tells Sabine whom to meet, which product to pitch, and why.**

</div>

### What Sabine wants

A one-page **sales briefing** with:

1. **6 recommended meetings** — person, role, company, product, *why now* (with evidence from the data), one opening question.
2. **Booth visits** — exhibitors worth visiting without a booked meeting.
3. **Not a priority** — companies she can skip, and why.

### Sabine's rules

- She is hunting: **new customers first**. Existing customers belong to their account team.
- Every recommendation must be **traceable** to the data. No invented facts.
- Only **name, job title and company** of people — no other contact details (data protection).
- She prefers **decision makers** (Head of, Director, VP, C-level).

### What you get

| File | What it is |
| --- | --- |
| `data/conferences/wholesalecon-europe-2026/participants.csv` | Registration export |
| `data/conferences/wholesalecon-europe-2026/exhibitors.json` | Exhibitor list with booths and contacts |
| `data/conferences/wholesalecon-europe-2026/badge_scans.txt` | Badge scanner export from Contoso's booth |
| `data/company-profiles/*.md` | One page per company — stands in for its website |
| `data/product-categories.json` | Contoso Wholesale's product categories |
| `data/crm-existing-customers.csv` | Extract from Contoso's CRM |

<div class="tip" data-title="Easter eggs 🥚">

> The data is small but realistic: it hides **gaps, duplicates and traps**. Every trap your agent team handles correctly
> earns your team a point in the pitch. The full mission brief is also in [`MISSION.md`](https://github.com/LaetitiaMa1410/ghcp-agent-team-lab/blob/main/MISSION.md).

</div>

---

<style>:root{--text-base-size:17px}html{font-size:var(--text-base-size)}.container{max-width:1200px!important}</style>

## Setup

### Prerequisites

|  |  |
| --- | --- |
| Visual Studio Code | [Download](https://code.visualstudio.com/) |
| GitHub Copilot in VS Code | Signed in, Chat view available (`Ctrl+Alt+I` / `Cmd+Ctrl+I`) |
| The lab repository | [`LaetitiaMa1410/ghcp-agent-team-lab`](https://github.com/LaetitiaMa1410/ghcp-agent-team-lab) |

### Get the repository

Every team member gets their own local copy:

```bash
git clone https://github.com/LaetitiaMa1410/ghcp-agent-team-lab.git
cd ghcp-agent-team-lab
code .
```

No Git? On the [repository page](https://github.com/LaetitiaMa1410/ghcp-agent-team-lab) select **Code → Download ZIP**, unzip it and open the folder in VS Code.

Confirm **Workspace Trust** when VS Code asks. Your workspace looks like this:

```text
ghcp-agent-team-lab/
|-- MISSION.md        the use case — start here
|-- data/             all input data (read-only)
|-- out/              your agents write their results here
|-- solutions/        reference solution — no peeking before the checkpoints 🙈
`-- docs/             this lab
```

### Open Copilot Chat

1. Open the **Chat** view.
2. Keep the default session target (**Copilot**).
3. Check that you can switch between the built-in agents **Ask**, **Plan** and **Agent** in the agent picker.

### Team roles

| Role | Job |
| --- | --- |
| 🧑‍✈️ **Driver** | Shares the screen in task 1 and types the prompts. |
| 💼 **Sabine** | Product owner. Answers Copilot's questions about the business — *you* decide, not the AI. |
| 🔍 **Critic** | Challenges every answer: *"Is that really in the data?"* |

<div class="info" data-title="How teams work together">

> **Task 1** is a team session on the driver's screen. At the end the driver shares `architecture.md` with the team
> (e.g. paste into your team chat), and everyone saves it in their own copy. From **task 2** on, everyone works on
> their own machine — and you compare results as a team.

</div>

---

<style>:root{--text-base-size:17px}html{font-size:var(--text-base-size)}.container{max-width:1200px!important}</style>

## Choose your path

Pick the path that fits your team. You can switch to an easier path at any time — every task ends with a **checkpoint** that lets you catch up.

| | 🟢 Guided | 🔵 Standard | 🟣 Expert |
| --- | --- | --- | --- |
| **For you if…** | you want to learn the approach step by step | you know the building blocks and want to apply them | you've built custom agents before and want a challenge |
| **You get** | copy-paste prompts and explanations for every step | goals, expected results and hints | the mission and a set of constraints |
| **Extras** | — | — | orchestrator, skills, CLI, consistency tests |
| **Start** | [**→ Guided path**](#guided-1--architecture-session) | [**→ Standard path**](#standard-1--architecture-session) | [**→ Expert path**](#expert-path) |

<div class="tip" data-title="Mixed team?">

> Choose the path for the *least* experienced member. Experienced members can pick bonus items from the
> [Expert path](#expert-path) while the team waits for an agent to finish.

</div>

<div class="warning" data-title="Keep an eye on the clock">

> All paths end at minute 52 with the [pitch](#task-4--pitch). If you're behind, use the checkpoint and move on —
> a finished pipeline with the reference agents is better than a perfect architecture without a result.

</div>

---

<style>:root{--text-base-size:17px}html{font-size:var(--text-base-size)}.container{max-width:1200px!important}</style>

# Guided path

## Guided 1 · Architecture session

**⏱ 20 minutes · together on the driver's screen**

Before you write a single agent, you need to know **what problem you are solving**, **what data you have** and
**which pieces of work exist**. You'll use Copilot as an architecture sparring partner — it reads, explains and
proposes; **your team decides**.

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

💼 **Sabine** answers the questions. Use `MISSION.md` — and where it doesn't say anything, *decide*.

<div class="info" data-title="Why this step?">

> This is **context engineering** in action: you're building a shared understanding — for the team *and* for Copilot —
> before asking for a design. Agents that skip this step build the wrong thing very fast.

</div>

### 1b · Break it down into components (5 min)

In the same chat:

```text
Describe the process from the raw data to Sabine's briefing as a sequence of steps.
For each step: input, output, and whether it needs judgement (LLM) or could be a fixed rule.

Then propose a team of 3 to 5 specialized agents. Each agent has exactly ONE responsibility.
Explain why you split it this way, and what would go wrong with one big agent.
Don't write any files yet.
```

🔍 **Critic**, challenge the proposal as a team:

- Is there an agent that only passes data along? → merge it.
- Is there an agent that does two very different things? → split it.
- Which step **must** come first so that everything after it works?
- Where does **personal data** flow? Where do **existing customers** get filtered out?

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

Open `architecture.md` and read it as a team.

<div class="tip" data-title="Mermaid not rendered?">

> If your Markdown preview doesn't render Mermaid, don't worry — agents read the text, not the picture.
> Pasting the diagram into [mermaid.live](https://mermaid.live) works too, if you are allowed to use it.

</div>

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

Pick the 2–3 findings that matter most, go back to your **Agent** chat and let it update `architecture.md`.
Then the driver shares `architecture.md` with the team.

<div class="info" data-title="✅ Checkpoint 1">

> **You should have:** `architecture.md` with a diagram, handoff contracts, agent cards and shared guardrails.
>
> Now compare with the [reference architecture](#reference-solution). Different is fine — can you explain *why* yours is different?
>
> **Behind schedule?** Copy the reference and continue:
>
> ```bash
> cp solutions/architecture.md architecture.md                     # macOS / Linux
> Copy-Item solutions/architecture.md architecture.md               # Windows PowerShell
> ```

</div>

---

<style>:root{--text-base-size:17px}html{font-size:var(--text-base-size)}.container{max-width:1200px!important}</style>

## Guided 2 · Build the agent team

**⏱ 15 minutes · everyone on their own machine**

Your architecture is the spec. Now it becomes **configuration**: shared rules go into `AGENTS.md`,
role-specific instructions go into one `.agent.md` file per agent.

### 2a · Shared guardrails in `AGENTS.md` (3 min)

**Agent**, new chat:

```text
#file:architecture.md
Create AGENTS.md in the repository root. It contains ONLY the shared guardrails and conventions
that apply to every agent — nothing role-specific. Max. 15 lines, concrete and checkable.
```

Check that it covers at least: **no internet**, **`data/` is read-only**, **write only to `out/`**,
**no e-mail addresses in outputs**, **every claim backed by a quote and source file**, **say "unknown" instead of guessing**.
Add what's missing yourself — it's 30 seconds of typing.

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

Open the agent picker in Chat — your agents should now be listed. Not there? Check **Chat: Open Customizations → Agents**
for errors in the frontmatter.

### 2c · Own one agent (8 min)

Split the agents among the team: **each person owns one agent** and reviews it with this checklist:

| ✔ | Check |
| --- | --- |
| ☐ | **One** responsibility — nothing that belongs to another agent |
| ☐ | Inputs and outputs are **exact paths** |
| ☐ | The output structure is exactly what the **next agent** expects |
| ☐ | It says what to do when data is **missing or ambiguous** |
| ☐ | **Least privilege** tools — does it really need `edit`? |
| ☐ | It knows when it is **done** |

Improve your agent — by hand or with Copilot (*"Make the output section of #file:.github/agents/lead-scorer.agent.md
match the handoff contract in #file:architecture.md"*). Share your improvements with the team so that everyone has the same agents.

<div class="info" data-title="Why split agents this way?">

> Each agent gets a **small, focused context**: only its instructions and its input files. That's context engineering
> on the team level — and it means you can test, fix and re-run one agent without touching the others.

</div>

<div class="info" data-title="✅ Checkpoint 2">

> **You should have:** `AGENTS.md` and one `.agent.md` file per agent, all visible in the agent picker.
>
> **Behind schedule?** Copy the reference agents:
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

---

<style>:root{--text-base-size:17px}html{font-size:var(--text-base-size)}.container{max-width:1200px!important}</style>

## Guided 3 · Run, check & improve

**⏱ 12 minutes · everyone on their own machine**

### 3a · Run the pipeline (5 min)

Run your agents **in the order of your architecture**. For each agent:

1. Open a **new chat** and select the agent in the agent picker.
2. Send: `Run your step for WholesaleCon Europe 2026.`
3. **Open the output file in `out/` and look at it** before you start the next agent.

<div class="info" data-title="Why look at every handoff?">

> This is your **human checkpoint**. An error in step 1 silently poisons steps 2 to 4. Catching it early is cheap;
> catching it in Sabine's briefing is expensive.

</div>

### 3b · Easter egg hunt 🥚 (4 min)

### Quality checklist

Check `out/sales-briefing.md` and the handoff files. Every "yes, handled correctly" is a point for your team:

| ✔ | Question |
| --- | --- |
| ☐ | Is every **person** listed only once, even if they appear in several sources? |
| ☐ | Did every **spelling** of a company end up at the right company? Are uncertain matches marked? |
| ☐ | What happened to companies **without a profile**? |
| ☐ | Are there **existing customers** among the 6 meetings? |
| ☐ | Is any company recommended that **doesn't buy wholesale** at all? |
| ☐ | Is any rating based on a **word taken out of context**? |
| ☐ | Are there **e-mail addresses** anywhere in `out/`? (Search for `@` in the `out/` folder) |
| ☐ | Can every **"why now"** be found in `data/`? |
| ☐ | Does every meeting have a **decision maker** where one exists? |

Compare your briefing with your teammates' — **same agents, same data — same result?**

### 3c · Fix the agent, not the output (3 min)

Found a problem? **Don't edit `out/`** — fix the cause. Use the *miss → diagnosis → fix* loop:

```text
#file:out/sales-briefing.md
The briefing has this problem: <describe it>.
Look at the agent files in .github/agents/ and AGENTS.md.
Which agent caused it, and which instruction is missing or unclear?
Propose a minimal change to that agent file. Don't change any file in out/.
```

Apply the change, then re-run **that agent and every agent after it**. Did the problem disappear?

<div class="info" data-title="✅ Checkpoint 3">

> **You should have:** `out/sales-briefing.md` and at least one improvement to an agent.
> See an example result in [`solutions/sample-output/`](https://github.com/LaetitiaMa1410/ghcp-agent-team-lab/tree/main/solutions/sample-output).
>
> **Next:** prepare your [pitch](#task-4--pitch).

</div>

---

<style>:root{--text-base-size:17px}html{font-size:var(--text-base-size)}.container{max-width:1200px!important}</style>

# Standard path

## Standard 1 · Architecture session

**⏱ 20 minutes · together on the driver's screen**

**Goal:** understand the use case with Copilot, decompose it into specialized agents and document the architecture
— before any agent exists.

**Deliverable:** `architecture.md` in the repo root with:

1. the use case in one sentence,
2. a diagram (Mermaid) of data sources, agents and handoff files in `out/`,
3. handoff contracts (file, producer, consumers, structure),
4. agent cards (responsibility, reads, writes, tools, done when),
5. shared guardrails.

**Suggested flow:** understand (Ask) → decompose (Ask) → write (Agent) → critique in a **fresh** chat (Ask) → improve.

<details>
<summary>💡 Hint: understanding the use case</summary>

Give Copilot a role and a structure for the answer, attach `MISSION.md`, point it to `data/`, and ask it to come
back with clarifying questions **one at a time**. Let 💼 Sabine answer them. Tell it to ignore `solutions/`.

</details>

<details>
<summary>💡 Hint: finding the right agents</summary>

Describe the process as steps first. For each step ask: *what goes in, what comes out, does it need judgement or is it a rule?*
Good agents have **one** responsibility and a clear **output file**. Ask Copilot what would go wrong with a single agent.

</details>

<details>
<summary>💡 Hint: the design review</summary>

A reviewer in a fresh chat isn't biased by the conversation that produced the design. Ask for the **top risks**
(data quality, invented facts, personal data, existing customers) and for missing handoffs — max. 8 bullets.

</details>

**Done when:**

- [ ] Every data source appears in the diagram and is read by at least one agent.
- [ ] Every agent writes exactly one file; every file has a consumer (or is the final briefing).
- [ ] You can explain in one sentence why each agent exists.
- [ ] The design has been challenged at least once and you changed something.

<div class="info" data-title="✅ Checkpoint 1">

> Compare with the [reference architecture](#reference-solution). **Behind schedule?**
> `cp solutions/architecture.md architecture.md` (PowerShell: `Copy-Item solutions/architecture.md architecture.md`).

</div>

---

<style>:root{--text-base-size:17px}html{font-size:var(--text-base-size)}.container{max-width:1200px!important}</style>

## Standard 2 · Build the agent team

**⏱ 15 minutes · everyone on their own machine**

**Goal:** turn the architecture into configuration Copilot can run.

**Deliverables:**

- `AGENTS.md` — only rules shared by **all** agents.
- `.github/agents/<name>.agent.md` — one per agent card, with `name`, `description` and `tools` in the frontmatter.

<details>
<summary>💡 Hint: what goes where</summary>

| Put it in… | when it… |
| --- | --- |
| `AGENTS.md` | applies to every agent (no internet, `data/` read-only, no e-mails, quote sources) |
| `.agent.md` | applies to one role (inputs, steps, output format, what *not* to do) |

You can generate all agent files with **one** prompt from `architecture.md` — then review them one by one.

</details>

<details>
<summary>💡 Hint: a good agent file</summary>

Exact input paths · numbered steps · exact output file and structure (matching the handoff contract) ·
what to do with missing or ambiguous data · what *not* to do because another agent does it · least-privilege `tools`.

</details>

**Done when:**

- [ ] All agents appear in the agent picker.
- [ ] Each team member has reviewed one agent against the handoff contract.
- [ ] No guardrail is duplicated in the agent files.

<div class="info" data-title="✅ Checkpoint 2">

> **Behind schedule?** Copy the reference agents — see the commands in [Guided 2](#guided-2--build-the-agent-team).

</div>

---

<style>:root{--text-base-size:17px}html{font-size:var(--text-base-size)}.container{max-width:1200px!important}</style>

## Standard 3 · Run, check & improve

**⏱ 12 minutes · everyone on their own machine**

**Goal:** produce Sabine's briefing, find what's wrong and fix it at the source.

1. Run the agents in order — **new chat per agent**, check each handoff file before you continue.
2. Go through the [quality checklist](#quality-checklist) — every trap handled correctly is a point 🥚.
3. Compare results within your team. Same agents, same data — same briefing?
4. Fix at least one problem **in an agent file** (never in `out/`), then re-run that agent and everything after it.

<details>
<summary>💡 Hint: diagnosing a problem</summary>

Ask Copilot which agent produced the wrong information and which instruction is missing or unclear — and to propose
a **minimal** change. Small, targeted instruction fixes beat long rule lists.

</details>

**Done when:**

- [ ] `out/sales-briefing.md` exists and follows Sabine's rules.
- [ ] You fixed at least one problem by changing an agent's instructions.

**Next:** prepare your [pitch](#task-4--pitch).

---

<style>:root{--text-base-size:17px}html{font-size:var(--text-base-size)}.container{max-width:1200px!important}</style>

# Expert path

**⏱ 47 minutes until the pitch · your plan, your pace**

You know the building blocks. Same mission, fewer rails, more constraints.

### Must-haves

| # | Requirement |
| --- | --- |
| 1 | An `architecture.md` with diagram, handoff contracts, agent cards — **and a "rejected alternatives" section** explaining at least two designs you didn't choose. |
| 2 | Use Copilot as a **sparring partner** for the design — and have the design reviewed in a **fresh context** before you build. |
| 3 | Shared rules in `AGENTS.md`, roles in `.github/agents/`. **Least privilege**: justify every tool an agent gets. |
| 4 | A briefing that passes the [quality checklist](#quality-checklist). |

### Challenges — pick at least two

| | Challenge | Building blocks |
| --- | --- | --- |
| **E1** | **Orchestrator.** One `lead-orchestrator` agent runs the whole pipeline from a single prompt by calling your agents as **subagents** (`tools: ['agent', 'read', 'search']`), then reports `PASS`/`FAIL`. | Custom agents, subagents |
| **E2** | **Quality gate as a skill.** Package the quality checklist as an agent skill in `.github/skills/briefing-quality-gate/SKILL.md` and use it after every run. | Agent skills |
| **E3** | **Rules vs. LLM.** Some steps don't need judgement. Let one agent use a small Python script (standard library only) for parsing or normalization. When are rules better than an LLM — and when not? | Tools, `execute` |
| **E4** | **Headless run.** Run your orchestrator from the GitHub Copilot CLI: `copilot --agent lead-orchestrator -p "Run the full pipeline for WholesaleCon Europe 2026."` | Copilot CLI |
| **E5** | **Consistency test.** Run the pipeline twice and compare the briefings. What is stable, what isn't? Change instructions to make the result more reproducible. | Context engineering |
| **E6** | **Handoffs for humans.** Add `handoffs` so each agent offers a button for the next step (Local harness only). | Custom agents |

<div class="tip" data-title="Expert etiquette">

> Done early? Help a Guided team with their design review — explaining *why* is the best test of your own architecture.

</div>

<div class="info" data-title="✅ Checkpoint">

> The [reference solution](#reference-solution) includes an orchestrator (`solutions/agents/lead-orchestrator.agent.md`)
> that was tested end to end with the Copilot CLI.

</div>

---

<style>:root{--text-base-size:17px}html{font-size:var(--text-base-size)}.container{max-width:1200px!important}</style>

# Task 4 · Pitch

**⏱ 8 minutes · all teams together**

Each team gets **60 seconds**:

1. 🗺️ **Your architecture** — show your diagram. Which agents, and why?
2. 🤝 **Your top 3 meetings for Sabine** — who, what product, why now.
3. 🔧 **One fix** — what did your agent team get wrong, and which instruction fixed it?

Then **Sabine votes**: whose briefing would she actually take to the conference? 🥚 Easter egg points break a tie.

### Discussion

- Why did teams with the **same data** end up with **different** recommendations?
- Which decision was made by a **human** (Sabine, the critic) and changed the result?
- What would it take to run this **for real**: real websites, a real CRM, hundreds of companies?

---

<style>:root{--text-base-size:17px}html{font-size:var(--text-base-size)}.container{max-width:1200px!important}</style>

# Reference solution

This is **one** good solution — not the only one. Compare the **reasoning**, not the names.

![Reference architecture](assets/reference-architecture.png)

| Agent | Responsibility | Writes |
| --- | --- | --- |
| `source-collector` | Merges the 3 conference sources, matches company spellings to profiles, de-duplicates people | `out/participants.md` |
| `company-analyst` | Segment, current needs (with quotes) and existing-customer status per company | `out/company-insights.md` |
| `lead-scorer` | High / Medium / Low fit per company and product category, with quoted reasons | `out/lead-scores.md` |
| `briefing-writer` | Picks one decision maker per company and writes Sabine's briefing | `out/sales-briefing.md` |
| `lead-orchestrator` *(expert)* | Runs the four agents as subagents and checks the result | – |

### Key design decisions

- **Matching comes first.** Every later step depends on knowing that two spellings are the same company.
- **Existing customers are flagged before scoring**, so they can't take Sabine's 6 slots.
- **Scoring is separate from writing.** Ratings can be checked before they turn into persuasive text.
- **Files in `out/` are the handoffs.** Every intermediate result is visible and reviewable — no hidden state.
- **Shared guardrails in `AGENTS.md`**, role-specific rules in each agent. No duplication.
- **Least privilege:** worker agents can `read`, `search`, `edit` — no terminal, no web. The orchestrator can only delegate and read.

### Files

| File | |
| --- | --- |
| [`solutions/architecture.md`](https://github.com/LaetitiaMa1410/ghcp-agent-team-lab/blob/main/solutions/architecture.md) | Full architecture with contracts, agent cards and rejected alternatives |
| [`solutions/AGENTS.reference.md`](https://github.com/LaetitiaMa1410/ghcp-agent-team-lab/blob/main/solutions/AGENTS.reference.md) | Shared guardrails (copy to `AGENTS.md` to use it) |
| [`solutions/agents/`](https://github.com/LaetitiaMa1410/ghcp-agent-team-lab/tree/main/solutions/agents) | All agent files |
| [`solutions/sample-output/`](https://github.com/LaetitiaMa1410/ghcp-agent-team-lab/tree/main/solutions/sample-output) | Output of one end-to-end run — yours will differ |

---

<style>:root{--text-base-size:17px}html{font-size:var(--text-base-size)}.container{max-width:1200px!important}</style>

# Wrap-up

### What you practiced

| Lab step | Building block |
| --- | --- |
| Understand the use case with Copilot | Prompting, context engineering |
| Decompose into specialized agents | Agent architecture, divide and conquer |
| Handoff contracts and agent cards | Spec before code |
| Design review in a fresh chat | Context hygiene, AI-assisted review |
| `AGENTS.md` + `.agent.md` | Custom instructions, custom agents, least privilege |
| Check every handoff | Human in the loop |
| Fix the agent, not the output | The *miss → diagnosis → fix* loop |
| Orchestrator, skills, CLI *(expert)* | Subagents, agent skills, Copilot CLI |

### Take it home

1. **Understand before you build.** A 15-minute architecture session with Copilot saves hours of re-prompting.
2. **Small agents, clear contracts.** One responsibility, one output file, explicit structure.
3. **Make the handoffs visible.** If you can't review it, you can't trust it.
4. **Fix causes, not symptoms.** Every agent mistake is a missing or unclear instruction.

<div class="tip" data-title="Do this next week">

> Take one recurring, multi-step task from your own work. Run step 1 of this lab on it: let Copilot explain it back to you,
> break it into steps and propose agents. Time-box it to 20 minutes. The clarity is the win.

</div>
