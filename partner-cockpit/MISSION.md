# 🎯 Mission brief — Partner cockpit for Stadtwerke Lindenau

> All companies, people, places and data in this folder are **fictional**.

## The situation

**Jonas** is a Partner Sales Manager at **Contoso Wholesale**. Contoso sells fiber wholesale products to partners —
internet providers and municipal utilities — who sell internet service to households and businesses **under their own brand**.

Winning a new partner is not a quick deal. It takes several meetings with people who think very differently:
a technical lead, a managing director, a supervisory board with the mayor in the chair. Before every meeting Jonas has to
pull together facts, regional politics, technical feasibility, business scenarios and the right materials — from many sources.

## The lead

**Stadtwerke Lindenau**, the municipal utility of the town of Lindenau, wants to become a fiber internet provider.
Meeting 1 was on 28 October. **Meeting 2 is on 3 December** — one week before the supervisory board meets on 10 December.

## The mission

> **Design and build a team of specialized GitHub Copilot agents that prepares Jonas's partner cockpit for meeting 2.**

## What Jonas wants to receive

A **partner cockpit** (max. 2 pages) with:

1. **Situation in 5 bullets** — the partner, the region, the network, where we stand.
2. **Who decides** — people, roles, what each of them needs, and their concerns.
3. **Technical fit** — recommended products and onboarding level, with prerequisites and risks.
4. **Two scenarios** — a **bold** one and a **safe** one, with 5-year customer numbers, and a **recommendation**.
5. **Meeting 2 plan** — goal, the **next commitment step**, 5 questions, and which materials to bring.
6. **Open points** — what is still unclear and must be checked.

## Jonas's rules

- **Separate what you know from what you think.** Every statement is labelled: *fact*, *customer statement*, *sales assessment*, *hypothesis* or *open question*.
- **No invented numbers.** Every number comes from the data or is clearly marked as an assumption.
- **Internal stays internal.** Prices and internal material are marked `INTERNAL` — nothing goes to the customer without approval.
- **Politically neutral.** Describe positions in the council; never judge parties or politicians.
- **People:** only name and role — no e-mail addresses or phone numbers.
- **Focus beats completeness.** The cockpit must help win the *next* commitment, not describe everything.

## What you have

Everything is in [`data/`](data/). There is **no internet research** in this lab.

| File | What it is |
| --- | --- |
| `data/lead-file/lead-record.md` | CRM lead record with contacts and company facts |
| `data/lead-file/meeting-1-notes.md` | Jonas's raw notes from meeting 1 |
| `data/lead-file/voice-memo-transcript.txt` | Jonas's voice memo after the meeting |
| `data/region/lindenau-town-profile.md` | Town statistics and digital strategy |
| `data/region/council-minutes-2026-09.md` | Town council decision on fiber funding |
| `data/region/press-clippings.md` | Local press |
| `data/network/coverage-lindenau.csv` | Households, Contoso coverage and the utility's build plans per district |
| `data/contoso/product-catalog.md` | Contoso's fiber wholesale products and prices (internal) |
| `data/contoso/onboarding-guide.md` | The three onboarding levels for partners |
| `data/contoso/references.md` | Reference partners and lessons learned |
| `data/contoso/business-case-assumptions.json` | Take-up curves and cost assumptions from the consulting tool (internal) |
| `data/contoso/materials-catalog.csv` | Available sales materials and their release status |

The data is small, but realistic: it contradicts itself, mixes facts with gossip and hides a few traps. Finding them is part of the job.
