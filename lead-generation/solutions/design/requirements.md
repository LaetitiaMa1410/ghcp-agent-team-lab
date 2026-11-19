# Reference — Requirements (use case A)

> One possible result of steps 1b–1c (interview + requirements). Items marked 🗣 came from the interview with Sabine, not from `USE-CASE.md`.

## User stories and acceptance criteria

**US-1 · One clean participant list** — *As Sabine, I want all conference sources merged, so that I don't copy lists by hand.*
- [ ] Every row of all three sources is accounted for (merged, listed, or reported as unmatched).
- [ ] Each person appears **once**, with all sources listed. Names are shown as "First Last".
- [ ] Every company spelling is mapped to one company; uncertain matches are **marked as uncertain** 🗣.

**US-2 · Know the company** — *As Sabine, I want to know what each company does and needs, so that I can judge the fit.*
- [ ] For each matched company: segment, what it does, current need **with a quoted sentence** from its profile 🗣.
- [ ] Companies without a profile are reported as **unknown** — nothing invented.
- [ ] Existing customers (CRM) are flagged.

**US-3 · Lead score per product category** — *As Sabine, I want a fit rating per product category, so that I know what to pitch.*
- [ ] Rating is **High / Medium / Low / –** with a reason — **no numeric scores** 🗣.
- [ ] Every rating ≥ Medium quotes evidence; a signal word alone is never enough.
- [ ] Companies that don't buy wholesale get no rating above Low.

**US-4 · Six meetings** — *As Sabine, I want 6 recommended meetings, so that I use my 30-minute slots 🗣 well.*
- [ ] Exactly 6 meetings, **new customers only**.
- [ ] Per meeting: person, job title, company, product, *why now* with source file, one opening question.
- [ ] The most senior relevant person is chosen; a junior-only contact is marked **"door opener only"** 🗣.
- [ ] The 6 meetings cover **more than one product category** 🗣.

**US-5 · Booth visits, skip list and hand-over** — *As Sabine, I want to know where else to go and what to skip.*
- [ ] Booth visits for relevant exhibitors (booth number) for ~2 hours on the floor 🗣.
- [ ] "Not a priority" list with one reason each.
- [ ] Section **"Hand over to account team"** with existing customers and the account team 🗣.

## Non-functional requirements

| ID | Requirement |
| --- | --- |
| NFR-1 | **Data protection:** only name, job title and company in any file in `out/`. No e-mails, no phone numbers. |
| NFR-2 | **Traceability:** every claim names its source file. |
| NFR-3 | **Readable on a phone:** one page, one short block per meeting, no wide tables 🗣. |
| NFR-4 | **Reviewable:** intermediate results are files a human can check. |
| NFR-5 | **Repeatable:** works for another conference by replacing `data/conferences/<event>/`. |
| NFR-6 | No internet; `data/` is read-only; results only in `out/`. |

## Out of scope

Booking meetings, sending invitations or e-mails 🗣 · CRM updates · web research · a user interface.

## Open questions

- How should the tool decide between two equally good leads? → Sabine: prefer **variety** of product categories 🗣.
- What counts as "why now"? → an open tender, expansion, new market or network problem stated in the profile 🗣.
