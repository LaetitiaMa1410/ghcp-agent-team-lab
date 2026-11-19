# 🤝 Use case B — Partner cockpit

> All companies, people, places and data in this folder are **fictional**.
> This is the business brief. The short deliverable spec is in [`MISSION.md`](MISSION.md).

## 1 · Business context

**Contoso Wholesale** is the wholesale unit of a European telecom group. One of its businesses is **fiber wholesale access**:
Contoso lets **partners** — regional internet providers and municipal utilities (*Stadtwerke*) — use its network,
and the partners sell internet service to households and businesses **under their own brand**. Contoso stays invisible to end customers.

Partners can also build **their own fiber network** and let Contoso **operate** it, or use Contoso's copper (VDSL) network
**until** fiber is built. How tightly a partner's IT connects to Contoso is defined by three **onboarding levels**
(from a manual portal to full API integration).

**Why this is hard to sell.** Winning a partner is not a single deal. It's a **series of meetings over months** with people who think
very differently — a technical lead, a managing director, a supervisory board chaired by the mayor, a town council with a majority and an opposition.
Every meeting has to move the partner **one commitment step** further (e.g. a workshop, a letter of intent, a board decision, a contract).

## 2 · People

| Person | Role | What they need |
| --- | --- | --- |
| **Jonas Weber** (user) | Partner Sales Manager, Contoso | A cockpit that tells him **where he stands** and **how to win the next step** |
| **Contoso experts** | Product management, network planning, partner consulting, marketing | Ask Jonas for clear questions — and are often too busy |
| **Pricing** | Approves prices and discounts for customers | Nothing internal leaves the house without approval |

On the partner side (see [`data/lead-file/lead-record.md`](data/lead-file/lead-record.md)): **Thomas Reuter** (Head of Telecommunications & Digital Infrastructure),
**Dr. Katrin Albers** (Managing Director), **Melanie Kraus** (Head of Customer Service), and the **supervisory board** chaired by the mayor.

## 3 · Today's process (as-is)

Contoso's partner sales process has ten phases:

| # | Phase | What happens |
| --- | --- | --- |
| 0 | Lead | A partner shows interest (e.g. web form) |
| 1 | Intake | Jonas creates the lead record |
| 2 | Preparation 1 | Research and preparation for the first meeting |
| 3 | **Meeting 1** | Get to know each other, understand plans |
| 4 | Documentation | Jonas writes notes and a voice memo |
| 5 | **Preparation 2** | Combine everything into a plan for meeting 2 |
| 6 | Expert review *(optional)* | Senior experts challenge the plan |
| 7 | Integration | Final version of the meeting plan |
| 8 | **Meeting 2** | Win the next commitment step |
| 9 | Handover | Hand the partner over to onboarding |

**Preparation (phases 2 and 5) is the bottleneck.** For each meeting Jonas:

- reads his own **raw notes** and **voice memos** — which contradict each other and mix facts with guesses and gossip;
- researches the **region**: town statistics, council decisions, local press, competitors;
- asks **network planning** what is technically possible per district;
- asks **partner consulting** for business scenarios from the consulting tool;
- checks with **product management** which products and onboarding level fit;
- thinks about the **people**: who decides, what each of them needs and fears;
- asks **marketing** which materials he may show or hand out.

**Pain points**

- **Takes about a day per meeting**, mostly searching and asking colleagues.
- **Perspectives get lost.** A single summary blends the technical, financial and political view into one "balanced" text — and the conflicts disappear.
- **Facts and opinions get mixed.** A guess from the notes ends up as a number in front of the customer.
- **Internal information leaks** (prices, lessons learned from other partners) because nobody checks the materials.
- **Scenarios are one-sided.** Either too optimistic or too careful — the customer never sees the choice.

## 4 · Target picture (to-be)

Before each meeting, Jonas gets a **partner cockpit**: a 360° view of the partner, the people, the technical fit and the region,
**two contrasting scenarios** with a recommendation, and a concrete plan for the next meeting. He reviews and decides — the cockpit recommends, it does not act.

## 5 · Scope of this lab

**In scope:** phase **5 (preparation 2)** for **Stadtwerke Lindenau**, using the data in [`data/`](data/). Result: the partner cockpit for meeting 2.

**Out of scope:** the optional expert review (phase 6) · writing the contract or an offer · price approval ·
sending anything to the customer · web research · CRM updates.

## 6 · The concrete case

**Stadtwerke Lindenau**, the utility of a town with ~58,000 inhabitants, wants to become a fiber internet provider under its own brand.
Meeting 1 was on **28 October 2026**. **Meeting 2 is on 3 December 2026** — one week before the **supervisory board** meets on **10 December**.
See [`MISSION.md`](MISSION.md) for the exact cockpit structure and Jonas's rules.

## 7 · Success criteria

| Goal | How we measure it in this lab |
| --- | --- |
| **Faster preparation** | Jonas can read and check the cockpit in **about 10 minutes**. |
| **Perspectives kept** | Technical, people, regional and business views are visible — including where they conflict. |
| **Facts separated from opinions** | Every statement carries a label (*fact, customer statement, assessment, hypothesis, open question*). |
| **Real choice** | A **bold** and a **safe** scenario with 5-year numbers from the data, and a clear recommendation. |
| **Next step** | The cockpit names **one concrete commitment step** for meeting 2. |
| **Safe** | No internal prices or internal material planned for the customer; no contact details; politically neutral. |

## 8 · Data sources

| Source | Format | Owner | Content | Confidential? |
| --- | --- | --- | --- | --- |
| `data/lead-file/lead-record.md` | Markdown | CRM | Lead, contacts, company facts | Contains contact data |
| `data/lead-file/meeting-1-notes.md` | Markdown | Jonas | Raw notes from meeting 1 | Internal |
| `data/lead-file/voice-memo-transcript.txt` | Text | Jonas | Voice memo after meeting 1 | Internal |
| `data/region/lindenau-town-profile.md` | Markdown | Town statistics office | Inhabitants, households, digital strategy | Public |
| `data/region/council-minutes-2026-09.md` | Markdown | Town council | Funding decision, positions | Public |
| `data/region/press-clippings.md` | Markdown | Local press | News about fiber in the region | Public |
| `data/network/coverage-lindenau.csv` | CSV | Network planning | Households, Contoso coverage, the utility's build plans per district | Internal |
| `data/contoso/product-catalog.md` | Markdown | Product management | Products and prices | **INTERNAL** |
| `data/contoso/onboarding-guide.md` | Markdown | Partner management | Onboarding levels and prerequisites | Showable |
| `data/contoso/references.md` | Markdown | Partner management | Reference partners and lessons learned | Partly internal |
| `data/contoso/business-case-assumptions.json` | JSON | Partner consulting tool | Take-up curves, costs | **INTERNAL** |
| `data/contoso/materials-catalog.csv` | CSV | Marketing | Sales materials and release status | — |

## 9 · Constraints

- **No internet**, no external tools. Only the files in `data/`. **`data/` is read-only**; results go to `out/`.
- **Internal stays internal.** Prices, discounts, business case numbers and internal references are marked `INTERNAL`.
- **Politically neutral.** Report positions; never judge parties or politicians.
- **People:** name and role only.
- **Human sign-off:** Jonas decides what he says and shows in meeting 2.

## 10 · Glossary

| Term | Meaning |
| --- | --- |
| **Stadtwerke** | Municipal utility (energy, water, often owned by the town) |
| **Homes passed** | Households that *could* be connected to a fiber network |
| **Take-up** | Share of homes passed that actually become customers |
| **Bitstream / Layer-2 access** | The partner uses Contoso's line and sells the service under its own brand |
| **Onboarding level** | How tightly the partner's IT connects to Contoso (1 portal · 2 bulk & API light · 3 fully integrated) |
| **OSS/BSS** | Telecom IT for operations, ordering and billing |
| **Commitment step** | The next concrete, agreed step with the partner (workshop, letter of intent, board decision, contract) |
| **Supervisory board** | Oversees the utility; here chaired by the mayor |

## 💬 Questions?

Ask **Jonas** himself: select the **`jonas`** agent in the Chat and interview him (architecture session, step 1b).
