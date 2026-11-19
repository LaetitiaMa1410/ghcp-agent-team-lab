# 🎯 Mission brief — WholesaleCon Europe 2026

> All companies, people and data in this repository are **fictional**.
>
> This is the short **deliverable spec**. For the full business context — people, today's process, scope, success criteria, data and glossary — read [`USE-CASE.md`](USE-CASE.md) first.

## The situation

**Sabine** is a Key Account Manager at **Contoso Wholesale**, a carrier that sells network services to
other telecom companies: IP transit, international voice, mobile & IoT wholesale and backbone capacity.

Contoso Wholesale's sales team is changing its focus from **farming** (growing existing customers) to
**hunting** (winning new customers). Conferences are the best hunting grounds, but preparing for them is painful:

- Participant lists arrive from **different sources in different formats**.
- The same company is spelled in **different ways**.
- Finding out what a company does and whether it needs Contoso's products takes **manual web research**.
- Nobody knows **whom** to talk to at a company, or **why now**.

## The mission

In two weeks Sabine attends **WholesaleCon Europe 2026**. She has **6 meeting slots**.

> **Design and build a team of specialized GitHub Copilot agents that tells Sabine
> whom to meet, which product to pitch, and why.**

## What Sabine wants to receive

A one-page **sales briefing** with:

1. **6 recommended meetings**: person, role, company, product to pitch, the reason ("why now")
   with evidence from the data, and one good opening question.
2. **Booth visits**: exhibitors worth visiting without a booked meeting.
3. **Not a priority**: companies she can skip, and why.

## Sabine's rules

- She is hunting: **new customers** first. Existing customers go to their account team.
- Every recommendation must be **traceable** to the data. No invented facts.
- Contact details beyond **name, job title and company** do not belong in the briefing (data protection).
- She prefers **decision makers** (Head of, Director, VP, C-level) over other roles.

## What you have

Everything is in [`data/`](data/). There is **no internet research** in this lab: the files in
`data/company-profiles/` stand in for company websites.

| File | What it is |
| --- | --- |
| `data/conferences/wholesalecon-europe-2026/participants.csv` | Registration export |
| `data/conferences/wholesalecon-europe-2026/exhibitors.json` | Exhibitor list with booths and contacts |
| `data/conferences/wholesalecon-europe-2026/badge_scans.txt` | Badge scanner export from Contoso's booth |
| `data/company-profiles/*.md` | One page per company (stand-in for its website) |
| `data/product-categories.json` | Contoso Wholesale's product categories |
| `data/crm-existing-customers.csv` | Extract from Contoso's CRM |

The data is small, but realistic: it has gaps, duplicates and inconsistencies. Finding them is part of the job.
