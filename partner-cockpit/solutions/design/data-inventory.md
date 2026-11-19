# Reference — Data inventory (use case B)

> One possible result of step 1a. Yours may be structured differently.

| Source | Format | Owner | Content | Reliability | Confidential? | Issues found |
| --- | --- | --- | --- | --- | --- | --- |
| `lead-record.md` | Markdown | CRM | Lead, 3 contacts, company facts, board date 10 Dec | High (system of record) | Contact data | **E-mails and phone numbers** must not reach the output |
| `meeting-1-notes.md` | Markdown | Jonas | Raw notes from meeting 1 | Low–medium (unreviewed) | Internal | Launch "2027" (**corrected** in memo); "~35,000 households" is a **guess**; mayor might sell the network = **rumour** |
| `voice-memo-transcript.txt` | Text | Jonas | Corrections after meeting 1 | Medium (newer than notes) | Internal | Launch **Q2 2028**; call centre 8–18, no weekends; Altstadt maybe later |
| `lindenau-town-profile.md` | Markdown | Statistics office | 58,400 inhabitants, **27,900 households**, strategy "Lindenau 2030" | High | Public | Mentions **Lindenberg** (different town) |
| `council-minutes-2026-09.md` | Markdown | Town council | EUR 9.5 m for Weststadt + Am Mühlbach, vote 27/9/2, Altstadt pending | High | Public | Political statements — report neutrally |
| `press-clippings.md` | Markdown | Local press | Council yes, Birkenfeld success, **Lindenberg** stops, FiberNext | Medium | Public | Lindenberg article is about **another town** |
| `coverage-lindenau.csv` | CSV | Network planning | 5 districts: households, Contoso FTTH, VDSL, build plans, funding | High | Internal | Altstadt funding **pending**; Zentrum + Nordviertel already Contoso fiber |
| `product-catalog.md` | Markdown | Product management | 4 products, prices, discounts | High | **INTERNAL** | Prices must not reach customer materials |
| `onboarding-guide.md` | Markdown | Partner management | 3 levels, prerequisites, **24/7 fault handling mandatory** | High | Showable | — |
| `references.md` | Markdown | Partner management | Birkenfeld (public), Ostalb, utility H. (paused at level 3) | High | Partly **internal** | Utility H. is internal |
| `business-case-assumptions.json` | JSON | Consulting tool | Take-up curves, ARPU, costs | Medium (assumptions) | **INTERNAL** | Numbers are assumptions, not facts |
| `materials-catalog.csv` | CSV | Marketing | 8 materials with release status | High | — | Price list and utility H. are `internal`; contract draft needs approval |

## What this means for the design

- **Newer beats older:** the voice memo corrects the notes — someone must resolve contradictions explicitly.
- **Labels are essential:** facts, customer statements, guesses and rumours sit side by side in the same files.
- **Different expertise per source group:** region/politics, network/technology, people, business numbers, materials.
- **Confidentiality** is per source — the final step must check what may be shown to the customer.
- **Numbers only from data:** households from the statistics office, take-up from the consulting tool.
