# INTERNAL — Stadtwerke Lindenau technical assessment

## Readiness

| Area | Rating and evidence |
| --- | --- |
| Network | **Sales assessment — gap:** Own fiber is not yet demonstrated operational; planned coverage is not service availability. **Customer statement:** Construction finishes end-2027; sales target is Q2 2028, correcting the earlier 2027 launch note. Altstadt funding remains pending. **Fact:** Contoso fiber coverage exists in Zentrum and Nordviertel, not across every address. Sources: `data/lead-file/voice-memo-transcript.txt` (later correction), `data/lead-file/meeting-1-notes.md`, `data/network/coverage-lindenau.csv`. |
| IT: billing and ordering | **Sales assessment — gap:** Energy billing is not telecom billing; no telecom ordering/billing system is recorded. **Customer statement:** No telecom billing expertise. Sources: `data/lead-file/lead-record.md`, `data/lead-file/meeting-1-notes.md`. |
| Customer service | **Sales assessment — gap:** An existing team is a starting point, not proof of internet-support readiness. **Customer statement:** Energy call center works office hours only, without weekends. **Open question:** Who will train staff and own internet support? Sources: `data/lead-file/voice-memo-transcript.txt`, `data/contoso/onboarding-guide.md`. |
| Round-the-clock fault handling | **Sales assessment — gap:** Current service hours do not meet mandatory 24/7 fault handling (all day, every day). **Open question:** Confirm responsibility and escalation outside office hours for each product. Sources: `data/lead-file/voice-memo-transcript.txt`, `data/contoso/onboarding-guide.md`. |

## Product fit

| District type | Recommendation and constraint |
| --- | --- |
| Partner's own fiber: Weststadt, Am Mühlbach; Altstadt conditional | **Sales assessment:** Choose **Network Operations Service**, which runs the partner's network, because local monitoring, fault repair and field work need an operator; activate only after construction acceptance and an agreed support handoff. **Fact:** The coverage file lists approved funding and construction starts in March/April 2027 for Weststadt/Am Mühlbach, but pending funding and no start date for Altstadt. **Open question:** Confirm retail internet delivery, ordering compatibility and customer-facing overnight support; network operation alone does not establish these. Sources: `data/network/coverage-lindenau.csv`, `data/contoso/product-catalog.md`, `data/contoso/onboarding-guide.md`. |
| Contoso fiber: covered addresses in Zentrum/Nordviertel | **Sales assessment:** Choose **Fiber Access Plus**, which includes a managed router and round-the-clock fault handling, to address the current support gap; check each address can actually be ordered before promising service. **Fact:** Coverage totals do not mean every household is covered. Sources: `data/contoso/product-catalog.md`, `data/network/coverage-lindenau.csv`. |
| Addresses without fiber yet | **Sales assessment:** Choose **VDSL Interim Access**, internet over copper with later no-cost fiber migration, subject to address qualification and acceptable speed; this includes uncovered addresses in otherwise partly covered districts. **Open question:** Confirm migration eligibility/timing, especially to partner-owned fiber, and contract round-the-clock support: the catalog does not include that support with this product. Sources: `data/contoso/product-catalog.md`, `data/network/coverage-lindenau.csv`, `data/contoso/onboarding-guide.md`. |

## Onboarding path

| Stage | Recommendation, prerequisites and timing |
| --- | --- |
| Start | **Sales assessment:** Start at **Level 1 — Portal**, manually entering orders and fault reports, rather than building complex software connections. **Fact:** Prerequisites are telecom registration, a customer-service team, simple billing, round-the-clock fault handling, and signed wholesale/data-processing agreements; typical first order is **3 months**, not a guaranteed launch date. **Open question:** Verify registration, contracts, billing selection and product-specific support before setting a date. Source: `data/contoso/onboarding-guide.md`; gap evidence: `data/lead-file/lead-record.md`, `data/lead-file/voice-memo-transcript.txt`. |
| Next level | **Sales assessment:** Move to **Level 2 — Bulk & API light** when manual work warrants it: spreadsheet batch orders plus an automatic status connection. **Fact:** This requires Level 1 prerequisites and an IT person able to run simple connections; the guide gives **6 months** typical first-order time for this level, not an incremental upgrade duration. Most utilities move after **12–18 months**; Level 1 suits roughly **60 orders/month**. **Open question:** Validate workload, staffing and upgrade schedule; do not assume that pattern is a commitment. Source: `data/contoso/onboarding-guide.md`. |
| Launch boundary | **Sales assessment:** Plan against the corrected **Q2 2028** customer target; earlier selling on existing Contoso infrastructure is an option to validate, not an agreed launch. Do not equate onboarding completion with accepted construction or a live customer connection. **Fact:** The guide warns that fully integrated starts without telecom IT risk delays; internal references also document an overloaded integration project. Sources: `data/lead-file/voice-memo-transcript.txt`, `data/contoso/onboarding-guide.md`, `data/contoso/references.md` (INTERNAL). |

## Risks

| Priority risk | Reduction |
| --- | --- |
| **Sales assessment — Billing/order failures or integration delay.** | **Sales assessment:** Use the portal first; appoint a billing owner and test ordering, activation, invoicing and cancellation before release. Sources: `data/lead-file/lead-record.md`, `data/contoso/onboarding-guide.md`. |
| **Sales assessment — Overnight incidents fall between providers.** | **Sales assessment:** Use Plus on Contoso fiber; explicitly agree support coverage for copper and own-network services, with named operational roles and tested escalation. Sources: `data/lead-file/voice-memo-transcript.txt`, `data/contoso/product-catalog.md`, `data/contoso/onboarding-guide.md`. |
| **Sales assessment — Construction, funding or address availability delays launch.** | **Sales assessment:** Keep Altstadt conditional; verify funding, address eligibility and network acceptance before commitments, and qualify interim copper speed rather than promising fiber performance. Sources: `data/network/coverage-lindenau.csv`, `data/lead-file/voice-memo-transcript.txt`, `data/contoso/product-catalog.md`. |
