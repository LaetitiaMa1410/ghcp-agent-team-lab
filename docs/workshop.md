---
published: true
type: workshop
title: "From Use Case to Agent Team"
short_title: "From Use Case to Agent Team"
description: A hands-on lab. Pick one of two real-world sales use cases, interview the stakeholder, run a full architecture session with GitHub Copilot, design a team of specialized agents and build it — locally in VS Code.
level: intermediate
authors:
  - Laetitia Maar
contacts:
  - "@LaetitiaMa1410"
duration_minutes: 180
tags: GitHub, Copilot, Custom Agents, Agent Architecture, Context Engineering, Hands-on Lab
navigation_levels: 2
navigation_numbering: false
---

# From Use Case to Agent Team

<style>:root{--text-base-size:17px}html{font-size:var(--text-base-size)}.container{max-width:1200px!important}</style>

*Hands-on lab · teams of 3–4*

You know the building blocks: prompting, context engineering, custom instructions, custom agents, skills.
Now you combine them on a **real-world use case** — and start like good architects do: **understand the problem before you build**.

| # | Task | You end up with |
| --- | --- | --- |
| 0 | Choose a use case & setup | The use case folder open in VS Code, roles assigned |
| 1 | Architecture session | `design/` (data inventory, interview notes, requirements, draw.io sketch) and `architecture.md` |
| 2 | Build the agent team | `AGENTS.md`, specialized agents + an orchestrator in `.github/agents/` |
| 3 | Run, check & improve | The final result in `out/`, accepted by your stakeholder |
| 4 | Pitch & debrief | Your design and result, presented to everyone |

Most of your effort goes into the **architecture session** — on purpose. You'll interview a stakeholder, write requirements,
compare architecture options, decide and sketch your design in draw.io — before you write a single agent.

<div class="info" data-title="Everything stays local">

> You only need **VS Code**, **GitHub Copilot** and the lab repository. No deployments, API keys, internet research,
> issues or pull requests. All companies, people and data are **fictional** and live in the repo.

</div>

## The company

**Contoso Wholesale** is a (fictional) carrier. It doesn't sell to consumers — it sells **network services to other companies**,
who use them to serve their own customers. Its sales teams spend a lot of time **collecting and combining information from many sources**
before they talk to a customer. That's exactly where a team of agents can help.

Your team picks **one** of two use cases. Both use the same lab steps — only the data and the result differ.

👉 **[Choose your use case](https://moaw.dev/workshop/gh:LaetitiaMa1410/ghcp-agent-team-lab/main/docs/?step=1)**

---

<style>:root{--text-base-size:17px}html{font-size:var(--text-base-size)}.container{max-width:1200px!important}</style>

# Choose your use case

Both use cases come from the same company and are built the same way: a sales person with too much information and too little time,
a set of messy files in `data/`, and a stakeholder you can interview. They differ in **what kind of problem** your agents have to solve —
and therefore in **what kind of agent team** you will design.

Read both descriptions as a team, pick one, then go to [setup](https://moaw.dev/workshop/gh:LaetitiaMa1410/ghcp-agent-team-lab/main/docs/?step=2).

| | 🎯 **A · Lead generation** | 🤝 **B · Partner cockpit** |
| --- | --- | --- |
| **Your user** | Sabine, Key Account Manager | Jonas, Partner Sales Manager |
| **Her / his question** | *Whom should I meet at the conference — and why?* | *How do I win the next commitment from this partner?* |
| **Sales situation** | Many potential customers, one short event | One partner, a long sales cycle with many meetings |
| **Input** | 3 participant lists in 3 formats, 12 company profiles, product categories, CRM extract | Lead record, meeting notes, voice memo, town & council data, press, network coverage, products, business case assumptions |
| **Output** | One-page sales briefing: 6 meetings, booth visits, skip list | Two-page partner cockpit for meeting 2 |
| **Main challenge** | **Messy data** — duplicates, spellings, gaps, the wrong people | **Messy truth** — contradictions, politics, facts vs. opinions, internal vs. external |
| **Typical agent pattern** | **Pipeline** — clean → analyze → score → write | **Perspectives** — parallel analysts, two opposing scenarios, one synthesis |
| **Feels like** | Data engineering with judgement | Consulting with judgement |
| **Folder** | `lead-generation/` | `partner-cockpit/` |

## 🎯 A · Lead generation — *"Whom should I meet at the conference, and why?"*

### The business

**Contoso Wholesale** is the wholesale unit of a European telecom group. It does **not** sell to consumers — it sells network services
to **other telecom and digital companies**, which use them to serve their own customers:

| Product category | What the customer buys | Typical buyers |
| --- | --- | --- |
| **IP Transit & Peering** | Global internet connectivity | ISPs, content and cloud providers, carriers |
| **International Voice** | Voice termination and interconnect into European networks | Carriers, voice hubs |
| **Mobile & IoT Wholesale** | Roaming, MVNO access, IoT connectivity | MVNOs, IoT companies, carriers |
| **Backbone Capacity & DCI** | Wavelengths, Ethernet, dark fiber between hubs and data centers | Carriers, cloud / data center operators, subsea, ISPs |

For years the sales team grew mainly with existing customers (**farming**). That market is saturated, so management has set a new goal:
win **new customers** (**hunting**). Account managers now have **new-logo targets** — but their tools and habits are still built for farming.
**Industry conferences are the best hunting ground:** hundreds of potential customers in one place for two days. The preparation decides whether the trip pays off.

### Who you build it for

| Person | Role | What they need | Their worry |
| --- | --- | --- | --- |
| **Sabine** — your user | Key Account Manager with a new-customer target | A short list of the **right people** and a **reason to talk** | *"I waste my few meeting slots on the wrong people."* |
| **Martin Keller** | Head of Wholesale Sales, sponsor | More new-customer pipeline per conference, less preparation time | *"Every account manager prepares differently — results depend on luck."* |
| **Account teams** | Own the existing customers | To know when *their* customers are at a conference | *"Hunters must not talk to my customers behind my back."* |
| **Data protection officer** | Approves use of personal data | Only the data needed for the purpose, no private copies | *"Participant lists are personal data."* |

### The problem today

About two weeks before a conference, the account manager collects the **registration export** (CSV), the **exhibitor list** (JSON from the event app)
and the **badge scans** from Contoso's own booth (a text export with German headers), copies everything into a spreadsheet, researches each company
on its website, **guesses** the product fit from keywords, checks the CRM — sometimes — and picks people to contact.

- ⏳ It takes **1.5–2 days** per conference.
- 🎲 There are **no shared criteria** for a good lead; keyword matching produces false positives.
- 🧩 The data is **poor**: the same company in different spellings, the same person in several lists, *"Last, First"* names, missing profiles, juniors instead of decision makers.
- ❓ **Nobody can say why** a company was picked.
- 🔓 Personal data ends up in **private spreadsheets**.

### Your case

**Sabine** attends **WholesaleCon Europe 2026**. She has **6 meeting slots** plus some time for booth visits.
Your agent team turns the raw conference files into the briefing she takes with her.

<div class="important" data-title="Mission A">

> **Design and build a team of specialized GitHub Copilot agents that tells Sabine whom to meet, which product to pitch, and why.**

</div>

### What Sabine wants to receive — a one-page sales briefing

1. **6 recommended meetings** — person, job title, company, **product to pitch**, **why now** with evidence from the data, and **one opening question**.
2. **Booth visits** — exhibitors worth a visit without a booked meeting.
3. **Not a priority** — companies she can skip, and why.

### Sabine's rules

- 🎯 **Hunting first.** New customers only; existing customers go to their account team.
- 🔍 **Traceable.** Every recommendation points to a file in `data/`. No invented facts.
- 🔒 **Data protection.** Only **name, job title and company** of people — no e-mail, no phone.
- 👔 **Decision makers** (Head of, Director, VP, C-level) over other roles.
- 🙋 **Recommend, don't act.** Sabine decides whom she meets.

### What you'll work with

| File | What it is | Watch out for |
| --- | --- | --- |
| `participants.csv` | Registration export from the organizer | Contains e-mail addresses |
| `exhibitors.json` | Exhibitors with booths and contacts | Not every exhibitor lists contacts |
| `badge_scans.txt` | Scanner export from Contoso's booth | Short company names, German headers, *"Last, First"* |
| `company-profiles/*.md` | One page per company — stands in for its website | Not every company has one |
| `product-categories.json` | Contoso's products, target segments, signal words | Signal words are hints, not rules |
| `crm-existing-customers.csv` | Extract from Contoso's CRM | Tells you who is *not* a new customer |

### What makes it interesting for agents

The work is a **chain of steps** where each step depends on the one before: merge the lists → understand each company →
match it to products → pick people → write the briefing. One mistake early (a missed duplicate, an existing customer not filtered)
travels all the way into Sabine's briefing. You'll decide **where to cut the chain into agents**, what each agent hands over,
and where a **human checkpoint** catches errors before they spread.

<div class="tip" data-title="Pick A if…">

> …your team likes **structured data**, clear rules and a step-by-step flow — and you want to see how a **pipeline** of agents
> turns messy input into a clean, traceable result.

</div>

## 🤝 B · Partner cockpit — *"How do I win the next commitment from this partner?"*

### The business

The same **Contoso Wholesale** also sells **fiber wholesale access**. Contoso lets **partners** — regional internet providers and
municipal utilities (*Stadtwerke*) — use its fiber network. The partners sell internet service to households and businesses **under their own brand**;
Contoso stays invisible to end customers. Partners can also build **their own fiber** and let Contoso **operate** it, or use Contoso's
copper (VDSL) network **until** fiber is built. How tightly the partner's IT connects to Contoso is defined by three **onboarding levels** —
from a manual portal to full API integration.

**Winning a partner is not a single deal.** It's a **series of meetings over months** with people who think very differently —
a technical lead, a managing director, a supervisory board chaired by the mayor, a town council with a majority and an opposition.
Every meeting has to move the partner **one commitment step** further: a workshop, a letter of intent, a board decision, a contract.

### Who you build it for

| Person | Role | What they need |
| --- | --- | --- |
| **Jonas Weber** — your user | Partner Sales Manager, Contoso | A cockpit that tells him **where he stands** and **how to win the next step** |
| **Contoso experts** | Product management, network planning, partner consulting, marketing | Clear questions from Jonas — they are often too busy |
| **Pricing** | Approves prices and discounts | Nothing internal leaves the house without approval |

On the partner side: **Thomas Reuter** (Head of Telecommunications & Digital Infrastructure), **Dr. Katrin Albers** (Managing Director),
**Melanie Kraus** (Head of Customer Service) and the **supervisory board**, chaired by the mayor.

### The problem today

Contoso's partner sales process has ten phases — from the first lead to the handover into onboarding.
**The preparation before each meeting is the bottleneck.** Jonas reads his own raw notes and voice memos, researches the region
(town statistics, council decisions, local press, competitors), asks network planning what is possible per district, asks partner consulting
for business scenarios, checks with product management which products fit, thinks about who decides and what each person fears —
and asks marketing which materials he may show.

- ⏳ It takes **about a day per meeting**, mostly searching and asking colleagues.
- 🫥 **Perspectives get lost.** One "balanced" summary blends the technical, financial and political view — and the conflicts disappear.
- 🔀 **Facts and opinions get mixed.** A guess from the notes ends up as a number in front of the customer.
- 🔓 **Internal information leaks** — prices, lessons learned from other partners — because nobody checks the materials.
- ⚖️ **Scenarios are one-sided** — either too optimistic or too careful; the customer never sees a real choice.

### Your case

**Stadtwerke Lindenau**, the utility of a town with about **58,000 inhabitants**, wants to become a fiber internet provider under its own brand.
**Meeting 1** was on **28 October 2026**. **Meeting 2** is on **3 December 2026** — one week before the **supervisory board** meets on **10 December**.
Your agent team prepares Jonas for meeting 2.

<div class="important" data-title="Mission B">

> **Design and build a team of specialized GitHub Copilot agents that prepares Jonas's partner cockpit for meeting 2.**

</div>

### What Jonas wants to receive — a partner cockpit of max. 2 pages

1. **Situation in 5 bullets** — the partner, the region, the network, where we stand.
2. **Who decides** — people, roles, what each of them needs, and their concerns.
3. **Technical fit** — recommended products and onboarding level, with prerequisites and risks.
4. **Two scenarios** — a **bold** and a **safe** one, with **5-year customer numbers**, and a **recommendation**.
5. **Meeting 2 plan** — goal, the **next commitment step**, 5 questions, and which materials to bring.
6. **Open points** — what is still unclear and must be checked.

### Jonas's rules

- 🏷️ **Separate what you know from what you think.** Every statement is labelled *fact*, *customer statement*, *sales assessment*, *hypothesis* or *open question*.
- 🔢 **No invented numbers.** Every number comes from the data or is marked as an assumption.
- 🔒 **Internal stays internal.** Prices and internal material are marked `INTERNAL` — nothing goes to the customer without approval.
- 🏛️ **Politically neutral.** Describe positions in the council; never judge parties or politicians.
- 👤 **People:** name and role only.
- 🎯 **Focus beats completeness.** The cockpit must help win the *next* commitment, not describe everything.

### What you'll work with

| Area | Files | Watch out for |
| --- | --- | --- |
| **Lead file** | CRM lead record, Jonas's raw notes from meeting 1, voice memo transcript | Notes and memo don't always agree; facts mixed with gossip |
| **Region** | Town profile, council minutes, press clippings | Public — but politics and press need careful, neutral handling |
| **Network** | Coverage per district: households, Contoso coverage, the utility's build plans | Internal planning data |
| **Contoso** | Product catalog, onboarding guide, reference partners, business case assumptions, materials catalog | Several files are **INTERNAL**; materials have a release status |

### What makes it interesting for agents

The work is **not a chain** — it's **several expert views on the same partner**: technical, people, region, business.
Each view needs its own sources and its own expertise, and they **contradict each other**. A single agent tends to average everything into
a bland summary. You'll decide **which perspectives deserve their own agent**, how to keep **two opposing scenarios** genuinely different,
and who **synthesizes** — and checks that nothing internal or invented slips into the cockpit.

<div class="tip" data-title="Pick B if…">

> …your team likes **ambiguity**, people and politics — and you want to see how **parallel perspectives** and a synthesis step
> beat a single "do-it-all" agent.

</div>

<div class="tip" data-title="Easter eggs 🥚">

> Both data sets are small but realistic: they hide **gaps, contradictions and traps**. Every trap your agent team handles correctly
> earns a point in the pitch.

</div>

---

<style>:root{--text-base-size:17px}html{font-size:var(--text-base-size)}.container{max-width:1200px!important}</style>

# Setup

You need **VS Code** with **GitHub Copilot** (signed in, Chat view: `Ctrl+Alt+I` / `Cmd+Ctrl+I`). Every team member gets their own copy
and opens **only the folder of your use case** — that's your workspace for the whole lab:

```bash
git clone https://github.com/LaetitiaMa1410/ghcp-agent-team-lab.git
cd ghcp-agent-team-lab
code lead-generation     # use case A
code partner-cockpit     # use case B
```

No Git? On the [repository page](https://github.com/LaetitiaMa1410/ghcp-agent-team-lab) select **Code → Download ZIP**, unzip, and open the use case folder in VS Code (**File → Open Folder…**).
Confirm **Workspace Trust**, open the Chat view and check that you can switch between **Ask**, **Plan** and **Agent** in the agent picker.

For the architecture sketch (step 1f), install the **Draw.io Integration** extension — it edits `.drawio` files locally in VS Code:

```bash
code --install-extension hediet.vscode-drawio
```

```text
lead-generation/   or   partner-cockpit/
|-- USE-CASE.md       the business brief — start here
|-- MISSION.md        the deliverable spec: what the user wants and their rules
|-- data/             all input data (read-only)
|-- design/           you create it: data inventory, interview notes, requirements, draw.io sketch
|-- out/              your agents write their results here
|-- .github/agents/   sabine / jonas: the stakeholder you will interview
`-- solutions/        reference solution — no peeking before the checkpoints 🙈
```

<div class="warning" data-title="Open the use case folder, not the repository root">

> All prompts and paths in this lab (`USE-CASE.md`, `data/`, `design/`, `.github/agents/`) are relative to the use case folder.
> VS Code only finds your custom agents in the `.github/agents/` folder of the opened workspace.

</div>

## Team roles

| Role | Job |
| --- | --- |
| 🧑‍✈️ **Driver** | Shares the screen in task 1 and types the prompts. |
| 💼 **Interviewer** | Leads the stakeholder interview, owns the requirements and makes the business decisions — *you* decide, not the AI. |
| 🔍 **Critic** | Challenges every answer: *"Is that really in the data? Can we check that?"* |
| 📝 **Scribe** *(4th person)* | Notes decisions and open questions. |

Task 1 runs on the driver's screen; at the end the driver shares `design/` and `architecture.md` (e.g. via team chat) and everyone saves them in their copy.
From task 2 on, everyone works on their own machine and you compare results as a team.

---

# Hands-on

## 1 · Architecture session

**Together on the driver's screen**

Good agent teams aren't designed in a prompt — they're designed like any other software: **understand the problem, talk to the user,
write down what "good" means, compare options, decide — and sketch it**. Copilot is your sparring partner in every step;
**your team decides**. Everything you produce goes into a `design/` folder — it becomes the spec for your agents.

**Every artifact is reviewed by the team before you move on.** Your agents are built from these files: a mistake you don't catch here
ends up in every agent. Fix what's wrong directly in the file or tell Copilot exactly what to change — don't just regenerate and hope.

| Step | What you do | Result |
| --- | --- | --- |
| 1a | Understand the use case & the data | `design/data-inventory.md` |
| 1b | Interview the stakeholder | `design/interview-notes.md` |
| 1c | Requirements & acceptance criteria | `design/requirements.md` |
| 1d | Decompose, compare options & decide: one agent or a team? | decision in the chat |
| 1e | Detailed design | `architecture.md` — the spec for your agents |
| 1f | Architecture sketch | `design/architecture.drawio` — the picture for people |

### 1a · Understand the use case & the data

🎯 **Why:** Agents are only as good as their understanding of the data. Before you design anything, find out what the data really contains — and the traps a naive solution would fall into: duplicates, gaps, contradictions, personal and internal data.

Select the **Agent** agent and send:

```text
#file:USE-CASE.md #file:MISSION.md
You are a solution architect. Help our team understand this use case before we design anything.
Read every file in data/. Ignore the solutions/ and .github/agents/ folders.

1. Summarize in max. 6 bullets: business goal, user, today's pain, what is in scope and out of scope.
2. Create design/data-inventory.md with a table:
   source | format | owner | content and key fields | personal data? | confidential? | quality issues
   Be specific about quality issues: quote the row or sentence.
3. Below the table: the 3-5 things in the data that would trick a naive solution, and what that means for the design.
```

<div class="important" data-title="👀 Review design/data-inventory.md before you move on">

> The data inventory is the basis for your requirements and later for your agents. The 🔍 **Critic** leads:
>
> - Open **two** data files yourself. Are the issues Copilot found really there? Did it miss one? Did it *invent* one?
> - Is **every** file in `data/` in the table — with personal and confidential data marked correctly?
> - Do the 3–5 "tricky things" match what you saw in the files?

</div>

### 1b · Interview the stakeholder

🎯 **Why:** Documents never tell you everything. Only the user knows how they will really use the result, what makes it useless and which rules are unwritten. Without these answers your agents optimize for the wrong thing.

`USE-CASE.md` doesn't answer everything — just like in real life. **Sabine** (A) and **Jonas** (B) are waiting for your questions.

**Prepare.** In your 1a chat, send:

```text
We will interview the user now. Which 8 questions should we ask that USE-CASE.md and MISSION.md
don't answer yet? Cover: how they will use the result (when, where, on which device), what makes a result
good or useless, rules and no-gos, how to handle unknown or conflicting data, and what is out of scope.
```

Pick the 5–6 best questions as a team.

**Interview.** Open a **new chat**, select the **`sabine`** (A) or **`jonas`** (B) agent and interview them.
💼 The **interviewer** asks — one question at a time. Follow up with *"Why?"* and *"Can you give me an example?"*

Finish the interview in the stakeholder chat with:

```text
Thanks! Please summarize what you told us as a bullet list.
```

Copy the summary, go back to your **1a chat** (Agent) and send:

```text
Create design/interview-notes.md with the following interview summary. Keep the wording, add a title and today's date:
<paste the summary here>
```

<div class="important" data-title="👀 Review design/interview-notes.md before you move on">

> The interview notes are your only source for what the user said. The 💼 **Interviewer** leads:
>
> - Compare with the stakeholder chat: is **everything** in the notes — nothing added, nothing lost?
> - Mark what **adds to** or **contradicts** `USE-CASE.md` and `MISSION.md`.
> - Still unclear? Add it as an **open question** instead of guessing.

</div>

<div class="warning" data-title="Don't peek">

> Don't open `.github/agents/sabine.agent.md` or `jonas.agent.md` — a real stakeholder doesn't come with a file either.
> The stakeholder only knows the business: ask about **needs**, not about agents.

</div>

### 1c · Requirements & acceptance criteria

🎯 **Why:** Requirements turn what you learned into **checkable criteria**. They are the yardstick for everything that follows: the architecture must cover them, every agent gets the ones it serves, and in task 3 you check the result against them.

**Agent**, new chat:

```text
#file:USE-CASE.md #file:MISSION.md #file:design/data-inventory.md #file:design/interview-notes.md
Create design/requirements.md:
1. 4-6 user stories ("As <user>, I want ..., so that ..."), each with 2-4 acceptance criteria
   that a reviewer can check against the final result with a clear yes or no.
2. Non-functional requirements as a table with IDs (data protection, traceability, readability,
   confidentiality, repeatability, ...).
3. Out of scope.
4. Open questions that neither the brief nor the interview answered.
Mark everything that came from the interview with 🗣. Don't add requirements that no source supports.
```

<div class="important" data-title="👀 Review design/requirements.md before you move on">

> Your agents and the final quality gate check against these criteria. The 🔍 **Critic** leads:
>
> - Is every acceptance criterion **checkable** with yes or no? *"Good briefing"* is not. *"Exactly 6 meetings, only new customers"* is.
> - Does every requirement have a **source**? Is every 🗣 item really from the interview — nothing invented?
> - Is anything from `design/interview-notes.md` or `design/data-inventory.md` **missing**?

</div>

**Sign-off:** go back to the stakeholder chat and paste the user stories and acceptance criteria:
*"If our result meets all of these, would you use it? What's missing or wrong?"* — then update `requirements.md`.

<div class="info" data-title="✅ Checkpoint 1 · Problem understood">

> **You should have:** `design/data-inventory.md`, `design/interview-notes.md` and a `design/requirements.md` your stakeholder signed off.

</div>

### 1d · Decompose, compare options & decide

🎯 **Why:** There is never just one way to build it. Copilot sketches different architectures — **your team picks one**, because you have to defend and maintain the design.

**Ask**, new chat:

```text
#file:design/requirements.md #file:design/data-inventory.md
Describe the work from the raw data to the final result as a sequence of steps.
For each step: input, output, which step it depends on, whether it needs judgement (LLM) or could be a fixed rule,
and which user story it serves. Show which steps could run in parallel.

Then assess: one agent or a team of agents? Fill this table for our case:
criterion | one agent fits when ... | a team fits when ... | our case
Criteria: kind of task, input complexity, rules, perspectives that must be kept apart,
need to review intermediate results, repeatability.
```

| A team is worth it when… | One agent is enough when… |
| --- | --- |
| the work splits into **separable roles** | the task is recurring with **one clear output** |
| the input is **complex**, from many sources | the context is **small and retrievable** |
| **several perspectives** must be kept apart, not averaged | **one view** is enough |
| **intermediate results** need a human check | checking the end result is enough |
| a **synthesis** of different views is needed | there are **few conflicts** in the data |

🔍 **Critic:** Which step **must** come first? Where could the AI **invent** something? Where does **personal or internal data** flow?

- 🎯 **A:** Where are **company spellings** matched? Where are **existing customers** filtered out — before or after scoring?
- 🤝 **B:** Which **perspectives** does Jonas need? Would **two opposing scenario agents** beat one "balanced" one? Who separates **facts from rumours**?

Same chat:

```text
Propose 3 clearly different architectures for this use case — for example one agent (with skills),
a pipeline of specialized agents, or parallel perspectives with a synthesis.
For each: the agents and their single responsibility, how they hand over work, pros, cons,
and the main risks (invented facts, personal or internal data, contradicting sources).
Recommend one, but don't write any files.
```

**Decide as a team** — each person names their favourite and one reason, then the interviewer decides.
Tell Copilot what you changed, e.g. *"Option 2, but merge agents 3 and 4"* or *"Split the scenario agent into a bold and a safe one."*

### 1e · Detailed design

🎯 **Why:** Your decision becomes a **spec**. In task 2 Copilot builds your agents from `architecture.md` — every responsibility, handoff file or checkpoint that is missing here will be missing in your agents.

Switch to **Agent** in the **same chat** (so Copilot remembers your decision) and send:

```text
#file:design/requirements.md
Create architecture.md in the workspace root for the option we decided on. About 1-2 pages:

1. The use case in one sentence.
2. Our decision: one agent or a team, which option we chose, which one we rejected and why (max. 5 bullets).
3. A Mermaid flowchart (left to right) with all data sources, the agents, the handoff files in out/,
   and an orchestrator that runs the agents.
4. A handoff contract table: file | producer | consumer(s) | content and structure (sections or columns).
5. Agent cards as a table: agent | responsibility | reads | writes | tools | done when | user stories.
   Tools follow least privilege: only 'read', 'search', 'edit'.
6. The orchestrator: in which order (or in parallel) it runs the agents as subagents, where it pauses
   (human checkpoints) and what the human checks at each. It only delegates and reads — tools 'agent', 'read', 'search'.
7. Shared guardrails that apply to every agent.
8. Traceability: every user story and non-functional requirement -> the agent(s) or guardrail that covers it.
   Flag any requirement that nothing covers.
```

<div class="important" data-title="👀 Review architecture.md before you move on">

> This is the **spec for your agents** — in task 2 Copilot builds them from it, line by line. Read it as a team:
>
> - Does it describe the option **you** decided on in 1d — not Copilot's favourite?
> - **Agent cards:** one responsibility each, exact paths for reads and writes, least-privilege tools?
> - **Handoff contracts:** does every file contain what the next agent needs?
> - **Orchestrator:** is it clear what the human checks at each checkpoint?
> - **Traceability:** fix every requirement flagged as uncovered.

</div>

### 1f · Architecture sketch in draw.io

🎯 **Why:** `architecture.md` is for the agents. For **people** — your team, your stakeholder, the pitch — you need a sketch you can
**move, colour and annotate**. Drawing it together also reveals gaps: a missing handoff, an unguarded data flow.
Let Copilot draw the first version, then make it yours.

**Agent**, same chat:

```text
#file:architecture.md
Create design/architecture.drawio: an editable draw.io diagram of this architecture.
- Valid, uncompressed draw.io XML: <mxfile><diagram name="Architecture"><mxGraphModel><root>,
  with the cells id="0" and id="1" parent="0"; every other cell has parent="1". No compressed content.
- Layout left to right: data sources | agents with their handoff files | final result for the user.
  The orchestrator spans the top. Show a human checkpoint after every step or stage.
  Group agents that run in parallel in a dashed container.
- Shapes and colours: data sources = cylinders (light blue; light red if personal or internal),
  agents = blue rounded rectangles with white text (name + one-line responsibility),
  handoff files = yellow note shapes, final result = green note shape, orchestrator = purple,
  human checkpoints = orange hexagons, the user = a stick figure.
- Edges: solid arrows for data flow, dashed purple arrows from the orchestrator labelled "step N" or "stage N",
  red edges with a 🔒 label where personal or internal data flows.
- A short legend at the bottom. No overlapping shapes, at least 40 px between shapes, grid size 10.
```

**Open** `design/architecture.drawio` in VS Code — the **Draw.io Integration** extension opens it as an editable diagram.
Then **review and refine it as a team** before you move on — the driver edits, everyone else directs:

- ✏️ **Layout:** move shapes until the flow reads left to right without crossing lines.
- 🧩 **Complete:** is every agent card from `architecture.md` in the sketch — and nothing more? Every handoff file, every checkpoint?
- 🔒 **Risks:** mark where personal or internal data flows and where it must stop. Mark where a wrong fact could enter.
- 🗣 **Stakeholder view:** would Sabine or Jonas understand the sketch without you? Add a title and one sentence that says what the team delivers.

🔍 **Critic:** compare sketch and `architecture.md` side by side. Did you change the **design** while drawing (an agent merged, a step moved)?
Then update the spec too:

```text
#file:design/architecture.drawio #file:architecture.md
We changed the design in the draw.io sketch. List the differences to architecture.md and update architecture.md to match.
```

<div class="tip" data-title="Diagram won't open?">

> If VS Code shows *"not a valid diagram"*, ask Copilot: *"design/architecture.drawio does not open in draw.io. Fix the XML."*
> No extension? Open the file in the [draw.io desktop app](https://www.drawio.com/) or on [app.diagrams.net](https://app.diagrams.net/) (*File → Open from → Device*) — the file stays on your machine.

</div>

Then the driver shares the `design/` folder and `architecture.md` with the team (e.g. via team chat) and everyone saves them in their copy.

<div class="info" data-title="✅ Checkpoint 2 · Design ready">

> **You should have:** `design/` with data inventory, interview notes, requirements and **`architecture.drawio`**, and an `architecture.md` with
> the decision, Mermaid diagram, handoff contracts, agent cards, the orchestrator flow with checkpoints, shared guardrails and traceability.
> Compare with the [reference architecture](https://moaw.dev/workshop/gh:LaetitiaMa1410/ghcp-agent-team-lab/main/docs/?step=5#reference-solutions) — can you explain *why* yours is different?

</div>

## 2 · Build the agent team

**Everyone on their own machine**

Your architecture is the spec. Now it becomes **configuration**: shared rules go into `AGENTS.md`, role-specific
instructions into one `.agent.md` file per agent. Each agent gets a **small, focused context** — so you can test, fix and re-run one without touching the others.
An **orchestrator** agent then runs the team for you — and stops after every step so you stay in control.

### 2a · Shared guardrails in `AGENTS.md`

🎯 **Why:** Some rules apply to **every** agent — data protection, sources, where to write. Every agent loads `AGENTS.md`, so you write these rules once, and a fix here fixes all agents.

**Agent**, new chat:

```text
#file:architecture.md #file:design/requirements.md
Create AGENTS.md in the workspace root. It contains ONLY the shared guardrails and conventions
that apply to every agent — nothing role-specific. Include the non-functional requirements.
Max. 15 lines, concrete and checkable.
```

<div class="important" data-title="👀 Review AGENTS.md before you move on">

> Every agent loads this file — a gap here is a gap in all of them. Check that it covers:
>
> - **no internet** · **`data/` is read-only** · **write only to `out/`** · **no e-mail addresses or phone numbers in outputs**
> - **every claim backed by a source file** · **say "unknown" instead of guessing**
> - 🤝 **B** also: **statement labels** · **no invented numbers** · **internal stays internal** · **politically neutral**
> - every **non-functional requirement** from `design/requirements.md` — and **nothing role-specific**
>
> Add what's missing yourself.

</div>

### 2b · Generate the specialized agents

🎯 **Why:** Each agent card from `architecture.md` becomes a real agent with **one responsibility** and a **small, focused context**. That makes its output predictable — and when something goes wrong, you can fix and re-run just that agent.

Same chat:

```text
For every agent card in #file:architecture.md except the orchestrator, create .github/agents/<agent-name>.agent.md.

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
- the acceptance criteria from design/requirements.md that its output must meet

Don't repeat the guardrails from AGENTS.md.
```

Your agents should now appear in the agent picker. Not there? Check **Chat: Open Customizations → Agents** for frontmatter errors.

👀 **Quick review:** one file per agent card in `architecture.md`, with the same names and output files? The detailed review of every agent follows in **2d**.

### 2c · Generate the orchestrator

🎯 **Why:** Someone has to run the team in the right order. The orchestrator calls your agents as **subagents** — each runs with its own, fresh context — and **pauses after every step**.
That pause is your **human checkpoint**: an error in step 1 would otherwise silently poison everything after it.

Same chat:

```text
#file:architecture.md
Create .github/agents/orchestrator.agent.md — a coordinator that runs our agents as subagents.

Frontmatter:
- name: orchestrator
- description: one sentence
- tools: ['agent', 'read', 'search']   (it delegates and reads, but never writes files itself)

Body:
- the steps from architecture.md: which agent(s) to call, the instruction to pass ("Run your step."),
  and the file(s) each must produce in out/. Agents that don't depend on each other run in parallel in one step.
- MOST IMPORTANT RULE, at the top: run exactly ONE step per turn, then end the turn, even if I ask
  for the full result. At the end of each turn: check that the files exist and are not empty, name 2-3
  things I should check in them, and end with "Reply continue for the next step, or describe a problem."
- on a problem: never fix files in out/ — name the agent that caused it and the missing instruction.
  When I reply "re-run", run that agent again and continue step by step from there.
- after the last step: a quality gate against the acceptance criteria in design/requirements.md and AGENTS.md —
  PASS or FAIL per criterion, with findings and which agent to fix.
```

👀 **Quick review:** open `orchestrator.agent.md` — is the *one step per turn* rule at the top? Are the steps in the order of `architecture.md`,
with the right output files? The detailed review follows in **2d**.

💬 **Think about it:** Why does the orchestrator have no `edit` tool?

### 2d · Own one agent

🎯 **Why:** Copilot generated the agents — now every agent needs an owner. Reviewing one agent in depth catches the gaps **between** agents (who does what, which file is expected) before they show up in the result.

**Each person owns one agent** (someone takes the orchestrator) and reviews it:

| ✔ | Check |
| --- | --- |
| ☐ | **One** responsibility — nothing that belongs to another agent |
| ☐ | Inputs and outputs are **exact paths**; the output is exactly what the **next agent** expects |
| ☐ | It says what to do when data is **missing or ambiguous** |
| ☐ | **Least privilege** tools — does it really need `edit`? |
| ☐ | It knows when it is **done** — and the **acceptance criteria** it serves |

Improve it by hand or with Copilot (*"Make the output section of #file:.github/agents/&lt;your-agent&gt;.agent.md
match the handoff contract in #file:architecture.md"*) and share your changes so everyone has the same agents.

Then do a **dry run on paper**: one person reads the orchestrator aloud, the others say what *their* agent reads and writes at each step.
Does every file an agent reads exist by then?

<div class="info" data-title="✅ Checkpoint 3">

> **You should have:** `AGENTS.md`, one `.agent.md` per agent plus the orchestrator, all visible in the agent picker.

</div>

## 3 · Run, check & improve

**Everyone on their own machine**

### 3a · Run the team

🎯 **Why:** Now you see whether your design works on the real data. Running step by step lets you catch an error **where it happens** — not three agents later.

New chat, select your **orchestrator** in the agent picker and send *"Prepare the result for Sabine."* (A) or *"Prepare the partner cockpit for meeting 2."* (B).
Watch the subagents appear in the chat.

At every **checkpoint** the orchestrator stops: **open the file(s) in `out/`** and look at what it points you to.
All good? Reply `continue`. Something wrong? Describe it — then fix the agent (3c).

🤝 Split the work: one person drives the orchestrator, the others review the handoff files at each checkpoint.

### 3b · Check against your requirements 🥚

🎯 **Why:** The result must meet the criteria your stakeholder signed off in 1c — not just look good. The checklist points you to the traps hidden in the data.

First go through the **acceptance criteria** in `design/requirements.md` — met or not?
Then check the final result and the handoff files with the checklist. Every "yes, handled correctly" is a point.

<details>
<summary>🎯 A · Lead generation — check <code>out/sales-briefing.md</code></summary>

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

</details>

<details>
<summary>🤝 B · Partner cockpit — check <code>out/partner-cockpit.md</code></summary>

| ✔ | Question |
| --- | --- |
| ☐ | Which **launch date** is used — and is it the newest one? |
| ☐ | How many **households** does Lindenau have — from the data, or from someone's guess? |
| ☐ | Did news about a town with a **similar name** sneak in? |
| ☐ | Is every **district** counted correctly — funded, not yet funded, already covered by Contoso? |
| ☐ | Did a **rumour** make it into the meeting plan? |
| ☐ | Is the **council debate** described neutrally? |
| ☐ | Does the recommended **onboarding level** fit the partner's IT and the reference stories? Does the bold scenario ignore that? |
| ☐ | Is the partner's **service gap** spotted and answered with a product? |
| ☐ | Are **prices and internal materials** marked internal, and are only releasable materials planned for the meeting? |
| ☐ | Are there **e-mail addresses or phone numbers** anywhere in `out/`? Did anyone **invent** a competitor's offer? |

</details>

Compare with your teammates — **same agents, same data — same result?**

**Stakeholder acceptance:** open your `sabine` / `jonas` chat from step 1b, paste the final result and ask:
*"Would you take this into your meeting? What would you change?"*

### 3c · Fix the agent, not the output

🎯 **Why:** The output is generated — the next run generates it again. Only a fix in the **agent** makes the improvement repeatable.

Found a problem? **Don't edit `out/`** — fix the cause:

```text
#file:out/<final-result>.md
The result has this problem: <describe it>.
Look at the agent files in .github/agents/ and AGENTS.md.
Which agent caused it, and which instruction is missing or unclear?
Propose a minimal change to that agent file. Don't change any file in out/.
```

Apply the change, then reply `re-run` in your orchestrator chat — it runs **that agent and every step after it** again, with checkpoints. Did the problem disappear?

<div class="info" data-title="✅ Checkpoint 4">

> **You should have:** the final result in `out/`, your stakeholder's feedback and at least one improved agent.
> Example results: [A · `sample-output/`](https://github.com/LaetitiaMa1410/ghcp-agent-team-lab/tree/main/lead-generation/solutions/sample-output) ·
> [B · `sample-output/`](https://github.com/LaetitiaMa1410/ghcp-agent-team-lab/tree/main/partner-cockpit/solutions/sample-output).
> **Next:** [pitch](https://moaw.dev/workshop/gh:LaetitiaMa1410/ghcp-agent-team-lab/main/docs/?step=5) — or, if you have time left, take on a [🚀 bonus challenge](https://moaw.dev/workshop/gh:LaetitiaMa1410/ghcp-agent-team-lab/main/docs/?step=4).

</div>

---

<style>:root{--text-base-size:17px}html{font-size:var(--text-base-size)}.container{max-width:1200px!important}</style>

# 🚀 Bonus challenges

**For teams that finished checkpoint 4 early.** Pick any challenge, in any order — each one extends the agent team you already have.
When the pitch starts, stop and pitch what you have.

| | Challenge | You learn |
| --- | --- | --- |
| 🧰 | **B1 · Skill** — turn the quality checklist into a reusable skill | When to use a skill instead of instructions or an agent |
| 🪝 | **B2 · Hook** — make `data/` *really* read-only | Instructions ask, hooks enforce |

## B1 · Skill

Your quality checklist from task 3b is useful again and again — for every run, and for every reviewer.
That's what **skills** are for: a folder with instructions (and optionally scripts or templates) that Copilot loads **only when needed**.

| Put it in… | when it is… |
| --- | --- |
| `AGENTS.md` | a rule that **always** applies to every agent |
| `.github/agents/*.agent.md` | a **role** with its own tools and responsibility |
| `.github/skills/*/SKILL.md` | a **reusable capability** that any agent (or you) can use **on demand** |

**Agent**, new chat — paste your checklist from task 3b at the end:

```text
Create a project skill in .github/skills/quality-check/SKILL.md.

Frontmatter:
- name: quality-check
- description: what it checks and when to use it (one sentence)

Body:
- read design/requirements.md, MISSION.md, AGENTS.md and all files in out/; verify claims against data/; never change any file
- one check per checklist item below, each with a clear "pass when" condition
- output: a table  # | check | PASS/FAIL | evidence , then an overall PASS or FAIL,
  and for every FAIL the agent in .github/agents/ that caused it and the missing instruction

Checklist:
<paste the checklist for your use case>
```

**Test it:** new chat, **Agent**, type `/quality-check` and send. Not there? Check **Chat: Open Customizations → Skills**.
Then add one line to your orchestrator's quality gate: *"Use the quality-check skill."*

## B2 · Hook

`AGENTS.md` says *"`data/` is read-only"*. But that's a **request** to the model — it usually follows it, but nothing *enforces* it.
A **hook** is a command that runs at a fixed point in the agent's workflow — for example **before every tool call** — and can **deny** it.
Deterministic, outside the model.

<div class="warning" data-title="Stretch challenge — check the prerequisites first">

> - **Node.js** installed (`node --version`) — the hook script is JavaScript.
> - Hooks are a **preview** feature and may be **disabled by your organization**. Use the **Copilot** session target (not *Local*) if your VS Code offers the choice.
> - Copilot loads hooks from `.github/hooks/` at the **root of the Git repository**. You opened a subfolder, so run `git init` once in your use case folder.
> - The folder must be **trusted** (Workspace Trust).

</div>

**Agent**, new chat:

```text
Create a Copilot hook that makes data/ read-only:

1. .github/hooks/protect-data.json
   { "version": 1, "hooks": { "preToolUse": [ { "type": "command",
     "command": "node .github/hooks/protect-data.cjs", "timeoutSec": 10 } ] } }

2. .github/hooks/protect-data.cjs
   - read the event JSON from stdin; fields: cwd, toolName, toolArgs (object or JSON string)
   - if the tool changes files (edit, create, apply_patch, ...) and a target path is inside data/,
     print {"permissionDecision":"deny","permissionDecisionReason":"data/ is read-only. Write to out/ instead."}
   - otherwise print {}
```

**Test it** — send a fake "edit a file in `data/`" event to your hook script, exactly as Copilot would:

```bash
echo '{"cwd":".","toolName":"edit","toolArgs":{"path":"data/test.md"}}' | node .github/hooks/protect-data.cjs
```

```powershell
'{"cwd":".","toolName":"edit","toolArgs":{"path":"data/test.md"}}' | node .github/hooks/protect-data.cjs
```

Expected: `{"permissionDecision":"deny",...}`. Change the path to `out/test.md` → expected: `{}`.

Now try it live: **new chat** (hooks load when a session starts), **Agent**: *"Try to create data/hook-test.md with the line TEST and tell me exactly what happened."*
Copilot refuses because of `AGENTS.md`? Great — your **instructions** work. The hook is the **safety net** for the day they don't.

💬 **Think about it:** Which of your other rules should be **enforced** by a hook instead of just being **asked for** in `AGENTS.md`?

<div class="info" data-title="✅ Reference solutions">

> Skill and hook: `solutions/bonus/`. To install them:
>
> ```bash
> # macOS / Linux
> mkdir -p .github/skills .github/hooks && cp -R solutions/bonus/skills/quality-check .github/skills/ && cp solutions/bonus/hooks/* .github/hooks/
> ```
>
> ```powershell
> # Windows PowerShell
> New-Item -ItemType Directory -Force .github/skills, .github/hooks | Out-Null; Copy-Item -Recurse solutions/bonus/skills/quality-check .github/skills/; Copy-Item solutions/bonus/hooks/* .github/hooks/
> ```
>
> **Next:** [pitch](https://moaw.dev/workshop/gh:LaetitiaMa1410/ghcp-agent-team-lab/main/docs/?step=5).

</div>

---

<style>:root{--text-base-size:17px}html{font-size:var(--text-base-size)}.container{max-width:1200px!important}</style>

# Pitch & wrap-up

## 4 · Pitch

**All teams together**

Each team presents briefly:

1. 🗺️ **Your architecture** — show your **draw.io sketch**: which agents, and the **one design decision** you'd defend?
2. 🎯 **A:** your top 3 meetings for Sabine — who, what product, why now.<br/>🤝 **B:** your recommendation for Stadtwerke Lindenau and the next commitment step for meeting 2.
3. 🔧 **One fix** — what did your agent team get wrong, and which instruction fixed it?
4. 🗣 **Your stakeholder** — what did Sabine or Jonas tell you that changed your design?

Then **Sabine and Jonas vote**: whose result would they take into their meeting? 🥚 Easter egg points break a tie.

**Discussion:** Why did teams with the **same data** get **different** results? Which **human** decision changed the result?
How did the **pipeline** (A) and the **perspectives** pattern (B) differ? What would it take to run this **for real**?

## Reference solutions

**One** good solution per use case — not the only one. Compare the **reasoning**, not the names.

### 🎯 A · Lead generation — a pipeline

![Reference architecture lead generation](assets/lead-generation-architecture.png)

| Agent | Responsibility | Writes |
| --- | --- | --- |
| `source-collector` | Merges the 3 conference sources, matches company spellings to profiles, de-duplicates people | `out/participants.md` |
| `company-analyst` | Segment, current needs (with quotes) and existing-customer status per company | `out/company-insights.md` |
| `lead-scorer` | High / Medium / Low fit per company and product category, with quoted reasons | `out/lead-scores.md` |
| `briefing-writer` | Picks one decision maker per company and writes Sabine's briefing | `out/sales-briefing.md` |
| `lead-orchestrator` | Runs the four agents as subagents, one step at a time with a checkpoint after each, then a quality gate | – |

**Why:** matching comes first · existing customers are flagged before scoring · scoring is separate from writing.
Files: [`lead-generation/solutions/`](https://github.com/LaetitiaMa1410/ghcp-agent-team-lab/tree/main/lead-generation/solutions)

### 🤝 B · Partner cockpit — perspectives

![Reference architecture partner cockpit](assets/partner-cockpit-architecture.png)

| Agent | Responsibility | Writes |
| --- | --- | --- |
| `fact-analyst` | Partner, region, network per district, evidence ledger with labels, contradictions | `out/fact-sheet.md` |
| `tech-advisor` | Readiness, product fit per district type, onboarding level, risks | `out/tech-assessment.md` |
| `partner-voice` | Decision map, concerns, commitment ladder, tone | `out/partner-perspective.md` |
| `scenario-bold` | Ambitious but plausible scenario with 5-year numbers | `out/scenario-bold.md` |
| `scenario-safe` | Smallest viable entry with stop points | `out/scenario-safe.md` |
| `cockpit-writer` | Recommendation, meeting 2 plan, materials, open points | `out/partner-cockpit.md` |
| `concierge` | Runs the three stages as subagents with a checkpoint after each, then a quality gate | – |

**Why:** three analysts in parallel, each with one perspective · two deliberately one-sided scenarios create productive tension · one writer resolves it.
Files: [`partner-cockpit/solutions/`](https://github.com/LaetitiaMa1410/ghcp-agent-team-lab/tree/main/partner-cockpit/solutions)

**In both:** files in `out/` are the handoffs — every intermediate result is visible · shared rules live in `AGENTS.md` ·
**least privilege** — workers can `read`, `search`, `edit`; the orchestrator can only delegate and read.

## Take it home

| What you did | Building block |
| --- | --- |
| Data inventory with Copilot | Prompting, context engineering |
| Stakeholder interview, requirements with acceptance criteria | Requirements engineering, spec before code |
| One agent or a team? Options and a team decision | Agent architecture |
| Handoff contracts, agent cards, traceability | Detailed design |
| Architecture sketch generated as draw.io, refined by the team | Diagrams as code, communicating a design |
| `AGENTS.md` + `.agent.md` | Custom instructions, custom agents, least privilege |
| Orchestrator with a checkpoint after every step | Subagents, delegation, human in the loop |
| Fix the agent, not the output | *Miss → diagnosis → fix* |
| 🚀 Bonus: skill, hook | Reusable skills, deterministic guardrails |

1. **Understand before you build.** An hour of architecture with Copilot saves days of re-prompting.
2. **Talk to the user.** The most important requirements weren't in the brief.
3. **Small agents, clear contracts.** One responsibility, one output file, explicit structure.
4. **Make the handoffs visible.** If you can't review it, you can't trust it.
5. **Fix causes, not symptoms.** Every agent mistake is a missing or unclear instruction.

<div class="tip" data-title="Do this next week">

> Take one recurring, multi-step task from your work and run steps 1a–1f of this lab on it — with your team, before you build anything. The clarity is the win.

</div>
