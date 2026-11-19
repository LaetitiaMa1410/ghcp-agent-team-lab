# 🎯 Use case A — Conference lead generation

> All companies, people and data in this repository are **fictional**.
> This is the business brief. The short deliverable spec is in [`MISSION.md`](MISSION.md).

## 1 · Business context

**Contoso Wholesale** is the wholesale unit of a European telecom group. It does not sell to consumers. It sells network
services to **other telecom and digital companies**, which use them to serve their own customers:

| Product category | What the customer buys | Typical buyers |
| --- | --- | --- |
| IP Transit & Peering | Global internet connectivity | ISPs, content and cloud providers, carriers |
| International Voice | Voice termination and interconnect into European networks | Carriers, voice hubs |
| Mobile & IoT Wholesale | Roaming, MVNO access, IoT connectivity | MVNOs, IoT companies, carriers |
| Backbone Capacity & DCI | Wavelengths, Ethernet, dark fiber between hubs and data centers | Carriers, cloud/data center operators, subsea, ISPs |

**The shift: from farming to hunting.** For years, the sales team grew revenue mainly with existing customers (*farming*).
That market is saturated. Management has set a new goal: win **new customers** (*hunting*). Account managers now have
targets for new logos — but their tools and habits are still built for farming.

**Conferences are the best hunting ground.** At an industry conference, hundreds of potential customers are in one place for two days.
But the time with them is short, and the preparation decides whether a conference is a success.

## 2 · People

| Person | Role | What they need | Their worry |
| --- | --- | --- | --- |
| **Sabine** (user) | Key Account Manager, new-customer target | A short list of the **right people** and a **reason to talk** | "I waste my few meeting slots on the wrong people." |
| **Martin Keller** (sponsor) | Head of Wholesale Sales | More new-customer pipeline per conference, less preparation time | "Every KAM prepares differently — results depend on luck." |
| **Account teams** | Own existing customers | Get to know when *their* customers are at a conference | "Hunters must not talk to my customers behind my back." |
| **Data protection officer** | Approves the use of personal data | Only the data needed for the purpose, no copies | "Participant lists are personal data." |

## 3 · Today's process (as-is)

About two weeks before a conference, the account manager:

1. **Collects lists** — the registration export from the organizer (CSV), the exhibitor list (JSON from the event app),
   badge scans from Contoso's own booth (text export of the scanner) and sometimes lists from colleagues.
2. **Copies everything into a spreadsheet.** The same company appears in different spellings, the same person in several lists,
   names in different orders (*"Last, First"*).
3. **Researches each company** on its website: What does it do? Who are its customers? Does it have its own network?
4. **Guesses the fit** with Contoso's products — mostly from memory and keywords.
5. **Checks the CRM** — sometimes. Sometimes not, and then a hunter calls an existing customer.
6. **Picks people** to contact and writes meeting requests.

**Pain points**

- **It takes too long.** Steps 1–5 take about **1.5–2 days** per conference. Sales says: *"Identifying targets takes far too long without automation."*
- **Quality depends on the person.** No shared criteria for a "good lead". Keyword matching produces false positives.
- **Data quality is poor.** Duplicates, spelling variants, missing profiles, junior people instead of decision makers.
- **No traceability.** Nobody can say *why* a company was picked.
- **Personal data is copied** into private spreadsheets.

## 4 · Target picture (to-be)

A repeatable process that turns raw conference data into a **qualified lead list** and a **briefing**:

```text
participant sources ──► company names & people ──► company profile (portfolio, customers, network)
       ──► categorize company ──► lead score per product category ──► company list
       ──► merge with participants ──► briefing for sales
```

Sales stays in charge: the result is a **recommendation** that a human checks and acts on.

## 5 · Roadmap and scope of this lab

| Stage | What | Status |
| --- | --- | --- |
| 1 | Collect conference participants into one list | Done manually today |
| **2** | **Company selection criteria + contacts from company names** | **← this lab** |
| 3 | Show results in an internal sales tool | Later. In this lab a Markdown file stands in for it. |
| 4 | Fully automated runs for every conference | Later |

**In scope:** stage 2 for one conference, **WholesaleCon Europe 2026**, with the data in [`data/`](data/).

**Out of scope (non-goals):** booking appointments or sending meeting requests · writing e-mails to contacts ·
web research (the files in `data/company-profiles/` stand in for websites) · changing the CRM · a user interface.

## 6 · The concrete case

In two weeks Sabine attends **WholesaleCon Europe 2026**. She has **6 meeting slots** and some time for booth visits.
She wants a one-page **sales briefing** (see [`MISSION.md`](MISSION.md) for the exact structure and her rules).

## 7 · Success criteria

| Goal | How we measure it in this lab |
| --- | --- |
| **Much less preparation time** | The agent team produces a briefing Sabine can check in **about 15 minutes**. |
| **Better leads** | The 6 meetings are new customers with a stated or clearly inferred need, and decision makers where available. |
| **Traceable** | Every *why now* points to a file in `data/`. A reviewer can check it. |
| **Safe** | No personal data beyond name, job title and company in any output. |
| **Repeatable** | The same agents work for the next conference with new files in `data/conferences/`. |

## 8 · Data sources

| Source | Format | Owner | Content | Known issues |
| --- | --- | --- | --- | --- |
| `data/conferences/wholesalecon-europe-2026/participants.csv` | CSV | Event organizer | Registrations | Contains e-mail addresses |
| `data/conferences/wholesalecon-europe-2026/exhibitors.json` | JSON | Event app | Exhibitors, booths, contacts | Not every exhibitor lists contacts |
| `data/conferences/wholesalecon-europe-2026/badge_scans.txt` | Semicolon text, German headers | Contoso booth scanner | People who visited Contoso's booth | Short company names, *"Last, First"* |
| `data/company-profiles/*.md` | Markdown | Stand-in for company websites | Portfolio, customers, network | Not every company has a profile |
| `data/product-categories.json` | JSON | Contoso product management | Products, target segments, signal words | Signal words are hints, not rules |
| `data/crm-existing-customers.csv` | CSV | Contoso CRM | Existing customers and account teams | Extract, not the full CRM |

## 9 · Constraints

- **Data protection:** the participant data may only be used to prepare this conference. Outputs contain name, job title and company — nothing else.
- **No internet**, no external tools. Only the files in `data/`.
- **`data/` is read-only.** Results go to `out/`.
- **Human sign-off:** Sabine decides whom she meets. The briefing recommends; it does not act.

## 10 · Glossary

| Term | Meaning |
| --- | --- |
| **Hunting / farming** | Winning new customers / growing existing ones |
| **Lead** | A company (and person) that might buy, not yet qualified |
| **Lead score** | How well a company fits a product category — here *High / Medium / Low* with evidence |
| **Decision maker** | Head of, Director, VP or C-level in a relevant function |
| **Why now** | A concrete, current reason to talk (e.g. an open tender, an expansion) |
| **MVNO** | Mobile virtual network operator — sells mobile service without its own radio network |
| **Carrier / wholesale** | A company selling network services to other network operators |

## 💬 Questions?

Ask **Sabine** herself: select the **`sabine`** agent in the Chat and interview her (architecture session, step 1b).
