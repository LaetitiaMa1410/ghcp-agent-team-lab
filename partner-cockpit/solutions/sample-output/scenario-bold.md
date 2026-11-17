# INTERNAL — Stadtwerke Lindenau: bold scenario

## Scope

| Label | Proposed scope | Source |
|---|---|---|
| Customer statement | Launch Q2 2028 after targeted construction completion at end-2027. The later memo corrects the meeting notes’ 2027 launch and qualifies their three-district scope. | V supersedes M |
| Hypothesis — Assumption | Model launch **1 April 2028**, the beginning of the corrected launch quarter; exact date is not agreed. Own-brand household service only; no business or energy-customer cross-sell counts included. | V; M; model convention |
| Sales assessment | Weststadt and Am Mühlbach: **Network Operations Service** on accepted utility fiber, conditional on a complete retail internet and support solution. Zentrum and Nordviertel: **Fiber Access Plus** at verified orderable addresses, including managed router and round-the-clock fault handling. | N; P; T |
| Sales assessment | Begin preparation/testing at **Level 1 Portal**, but require **Level 2 Bulk & API light before mass launch**. This accelerates the technical assessment’s staged path; the projected volume cannot wait for the usual upgrade timetable. | O; model below |
| Sales assessment | Keep Altstadt outside every modeled year until funding, build acceptance and orderability are verified. VDSL Interim Access is a qualified fallback, not extra modeled customers; copper speed, support and migration to utility fiber require confirmation. | N; C; V; P; T |

## 5-year customers

| Label | District | Data household base | Scenario serviceable base at launch | Source / basis |
|---|---|---:|---:|---|
| Hypothesis — Assumption | Weststadt | 6,200 | 6,200 | N: approved district build plan; assumes every household becomes an accepted, orderable connection, **not an observed build count** |
| Hypothesis — Assumption | Am Mühlbach | 4,300 | 4,300 | N: same assumption; funding approval alone does not establish completion |
| Hypothesis — Assumption | Zentrum | 7,400 | 6,900 | N: homes passed ceiling; assumes all passed homes become orderable, subject to address checks |
| Hypothesis — Assumption | Nordviertel | 4,900 | 3,100 | N: same homes-passed-to-orderable assumption |
| Fact | Altstadt — excluded | 5,100 | — | N; C; V: funding pending, no build start confirmed |
| Hypothesis — derived Assumption | Included total | 22,800 | **20,500** | N; arithmetic above; assumed own-network base 10,500 plus assumed Contoso base 10,000 |

**Fact — INTERNAL:** B defines cumulative take-up after launch and supplies the **ambitious** curve: **12%, 22%, 30%, 36%, 40%**. **Hypothesis — Assumption:** Interpret these as year-end active household customers, rather than additions; apply the same curve to both footprints. Source: B; active-customer interpretation is a model convention.

**Hypothesis — Assumption:** Formula: `C(y) = round_half_up((6,200 + 4,300 + 6,900 + 3,100) × ambitious[y])`; `net additions(y) = C(y) − C(previous year)`, with an assumed zero starting customer base. Calculate each footprint separately for the split below; all products happen to be integers, so rounding changes nothing. Sources: N; B; zero-base assumption reflects a new retail launch (M).

| Label | Service year / period | Take-up | Own fiber active | Contoso fiber active | Total year-end active | Net additions |
|---|---|---:|---:|---:|---:|---:|
| Hypothesis — derived Assumption | 1: Apr 2028–Mar 2029 | 12% | 1,260 | 1,200 | **2,460** | 2,460 |
| Hypothesis — derived Assumption | 2: Apr 2029–Mar 2030 | 22% | 2,310 | 2,200 | **4,510** | 2,050 |
| Hypothesis — derived Assumption | 3: Apr 2030–Mar 2031 | 30% | 3,150 | 3,000 | **6,150** | 1,640 |
| Hypothesis — derived Assumption | 4: Apr 2031–Mar 2032 | 36% | 3,780 | 3,600 | **7,380** | 1,230 |
| Hypothesis — derived Assumption | 5: Apr 2032–Mar 2033 | 40% | 4,200 | 4,000 | **8,200** | 820 |

**Hypothesis — Assumption:** Table sources are N and B plus the availability and timing assumptions above. These are full launch-anniversary service years, **not calendar years**: no partial-year haircut. All modeled premises must be ready at launch; delayed availability requires a later cohort and recalculation, not immediate application of the mature curve.

## Assumptions

| Label | Assumption and basis | Source |
|---|---|---|
| Sales assessment | Ambitious is a stretch, not a forecast: INTERNAL Birkenfeld achieved 18% after two years versus this model’s 22%; Ostalb’s 35% after three years depended on experienced telecom IT and is not directly transferable. | R; B |
| Hypothesis — Assumption | No churn, failed installations or repeat orders in the capacity floor; all net additions require an activation order. This simplifying new-launch model understates gross workload if customers leave or orders fail. | Model convention; O provides capacity limits, not churn |
| Hypothesis — Assumption | Spread additions evenly over each full service year for capacity screening only. First-year demand is `2,460 ÷ 12 = 205 orders/month`; subsequent averages decline. This is not a forecast of seasonal peaks. | Derived from B/N model; even distribution assumed |

## Conditions

| Label | Required closure before scaling | Source |
|---|---|---|
| Sales assessment | Obtain address-level orderability and construction acceptance evidence; fund and contract retail connectivity on the utility network. Network Operations Service operates infrastructure, not automatically a complete retail offer. Reconfirm corrected launch with the partner. | N; P; V; T |
| Sales assessment | Portal is for controlled testing, not mass intake: modeled 205 monthly activations exceed its approximately 60-order monthly suitability. Level 2 supports approximately 400 orders/month; appoint an interface-capable IT owner, prove batch/status flows and peak capacity, and gate campaign volumes. Its typical six-month first-order lead time is not a guaranteed upgrade duration. | O; derived model |
| Sales assessment | Appoint a telecom billing owner, select simple billing, train service staff and pass order–activation–invoice–cancellation tests. Complete telecom registration, wholesale and data-processing agreements before release. | L; M; O |
| Sales assessment | Contract and test round-the-clock fault ownership: Plus covers Contoso fiber; utility-fiber retail support and any interim copper need explicit coverage and escalation. Existing office-hours energy service is insufficient. | V; P; O; T |

## Risks

| Label | Risk / response | Source |
|---|---|---|
| Sales assessment | Full planned-household conversion and passed-home orderability may fail. Reduce the eligible base or phase cohorts; keep Altstadt conditional rather than plugging a shortfall with unfunded premises. | N; C; V |
| Sales assessment | Billing, batch integration or launch peaks could overwhelm the team. Prove a capped pilot before campaigns; defer scale if tests fail. Avoid fully integrated onboarding as a shortcut. INTERNAL reference H. documents an overloaded integration project. | L; O; R |
| Sales assessment | Adoption can undershoot the ambitious curve; do not turn modeled customers into minimum-line commitments or imply profitability. INTERNAL product pricing units differ from consulting-tool cost assumptions, and the tool’s Basic cost is not the selected Plus product. Reconcile economics separately. | B; P; R |

## Pitch ideas

| Label | Meeting 2 idea and next commitment | Source |
|---|---|---|
| Sales assessment | **“Local brand, broader reach.”** Show municipal-network operation alongside verified Contoso coverage, with an explicit Altstadt funding gate. Use the public Fiber Access sheet and public Birkenfeld story; request permission to develop a board-ready scope and address-validation plan, not supplier selection. | M; C; P; R; A |
| Sales assessment | **“Prove the customer journey before scaling.”** Walk through an order, invoice and after-hours fault; use the showable onboarding one-pager. Ask for billing, IT and support owners plus managing-director review of a readiness plan before the board. Keep this model and internal reference lessons INTERNAL; no unapproved internal pricing handout. | M; V; L; O; A |

**Fact — Source key:** N = `data/network/coverage-lindenau.csv` (undated); C = `data/region/council-minutes-2026-09.md`; O = `data/contoso/onboarding-guide.md`; A = `data/contoso/materials-catalog.csv`.

**Fact — INTERNAL source key:** B = `data/contoso/business-case-assumptions.json`; P = `data/contoso/product-catalog.md`; R = `data/contoso/references.md`; L = `data/lead-file/lead-record.md`; M = `data/lead-file/meeting-1-notes.md`; V = `data/lead-file/voice-memo-transcript.txt` (later same-day correction). T = `out/tech-assessment.md`, used as readiness synthesis, not a replacement for original evidence.
