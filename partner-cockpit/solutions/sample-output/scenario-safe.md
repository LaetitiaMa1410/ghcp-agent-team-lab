# INTERNAL — Stadtwerke Lindenau: safe scenario

## Scope

| Label | Entry scope and boundary | Sources |
|---|---|---|
| Sales assessment | Start under the utility’s brand with **Level 1 — Portal**, staged orders in **Weststadt and Am Mühlbach only**, using Network Operations Service after network acceptance. This is a proposal, not an approved service contract; network operation alone does not establish a retail internet service. | [N], [P], [O], [M] |
| Fact | Approved build funding covers districts containing **6,200 + 4,300 = 10,500 households**. These are district households, not built connections or confirmed orderable premises; the coverage file is undated. | [N], [C] |
| Customer statement | Corrected sales target is **Q2 2028**, following construction targeted for end-2027. The later memo supersedes the initial meeting note’s 2027 launch. Neither date guarantees readiness. | [V], versus [M] |
| Sales assessment | Exclude Altstadt while funding remains conditional; exclude Contoso-footprint expansion and interim copper from this entry to avoid additional delivery/support paths. These remain later opportunities, not lost demand. | [C], [V], [N], [P] |
| Fact | Altstadt contains **5,100 households**, with funding pending and a decision expected **Q2 2027**. Zentrum/Nordviertel total **10,000 Contoso homes passed**, not confirmed orderable homes or customers. | [N], [C] |

## 5-year customers

| Label | Model definition | Sources |
|---|---|---|
| Fact | INTERNAL tool curves describe **cumulative year-end customers**, as a share of homes passed after launch; conservative curve: **6%, 11%, 15%, 18%, 20%**. | [B] |
| Hypothesis | **Assumption with basis:** conditional planning base **H = 10,500** throughout, assuming all households in the funded districts become accepted, orderable own-network premises before launch. Basis: district totals and funded plans, **not** verified connections. This is an illustrative envelope, not a confirmed available base or committed forecast; replace H with the verified eligible count before approval. | [N], [C], [V] |
| Hypothesis | **Assumption with basis:** use **1 April 2028** as the exact launch date within the customer’s Q2 target. Model full service years, April–March, so **no partial-year proration**. Exact launch day is unconfirmed; shift periods if it changes. | [V] |
| Hypothesis | **Assumption with basis:** apply the conservative curve to verified H as a fixed cohort: **Cᵧ = floor(H × rᵧ + 0.5)**, rounding to nearest whole customer, half up. Cᵧ is service-year-end active customers, not annual additions. Net additions **ΔCᵧ = Cᵧ − Cᵧ₋₁**, with **C₀ = 0** for a new service. Basis: cumulative tool definition; no separate churn/replacement estimate is supplied. | [B], [L] |

| Label | Service year / period (Assumption) | H (Assumption) | Conservative rate | Year-end active Cᵧ (Assumption) | Net additions ΔCᵧ (Assumption) |
|---|---|---:|---:|---:|---:|
| Hypothesis — INTERNAL model [B], [N], [V] | 1: Apr 2028–Mar 2029 | 10,500 | 6% | 630 | 630 |
| Hypothesis — INTERNAL model [B], [N], [V] | 2: Apr 2029–Mar 2030 | 10,500 | 11% | 1,155 | 525 |
| Hypothesis — INTERNAL model [B], [N], [V] | 3: Apr 2030–Mar 2031 | 10,500 | 15% | 1,575 | 420 |
| Hypothesis — INTERNAL model [B], [N], [V] | 4: Apr 2031–Mar 2032 | 10,500 | 18% | 1,890 | 315 |
| Hypothesis — INTERNAL model [B], [N], [V] | 5: Apr 2032–Mar 2033 | 10,500 | 20% | 2,100 | 210 |

## Assumptions

| Label | Interpretation / constraint | Sources |
|---|---|---|
| Sales assessment | Select conservative rather than base/ambitious take-up because billing, support and actual availability remain unresolved. Do not substitute reference-partner results for this curve. | [B], [L], [V], [R] |
| Hypothesis | **Assumption with basis:** no expansion, Altstadt, copper or Contoso-footprint customers enter H during the model. Basis: smallest funded-district entry; a smaller verified H reduces every projection using the same formula. No district-to-connection conversion is established by the sources. | [N], [C] |
| Hypothesis | **Assumption with basis:** evenly spread first-service-year net additions imply **630 ÷ 12 = 52.5/month**, below the guide’s **approximately 60 orders/month** portal suitability. The even spread is only a capacity check, not a demand forecast; gross orders, failed orders, replacements and fault tickets add work. No churn allowance is quantified. | [B], [O]; conditional model above |
| Fact | Portal first order typically takes **3 months**, not a delivery guarantee. Most utilities move to Level 2 after **12–18 months**; Level 2 needs interface-capable IT staff and has a typical **6-month** first-order timeline, not a stated upgrade duration. | [O] |
| Sales assessment | INTERNAL references support starting simply: a portal/operations-service example succeeded, whereas an inexperienced utility’s fully integrated project overloaded its team. These are lessons, not Lindenau performance guarantees. No price, margin or profitability claim is made here. | [R], [B], [P] |

## Prerequisites

| Label | Before launch / accountable role to agree | Sources |
|---|---|---|
| Sales assessment | Utility infrastructure lead and Contoso delivery: confirm funded scope, completed build acceptance, address-level orderability and retail internet delivery on the own network; replace the assumed household base with eligible premises. Confirm portal compatibility and activation handoffs. | [N], [C], [P], [O] |
| Sales assessment | Utility programme owner: complete regulator registration, wholesale framework and data-processing agreements; obtain authorized approval of scope and responsibilities. Funding approval is not supplier selection. | [O], [C], [M] |
| Sales assessment | Utility billing owner: select a telecom-capable simple billing solution and test order → activation → invoice → cancellation, including failures. Existing energy SAP IS-U and absent telecom expertise do not close this gap. | [L], [M], [O] |
| Sales assessment | Utility customer-service lead and Contoso operations: contract and test **24/7** fault handling, customer-facing after-hours intake and escalation. Network monitoring/field service is not proof of an overnight retail hotline. The current office-hours, no-weekend team is insufficient on its own. | [P], [O], [V] |
| Sales assessment | Joint onboarding owners: train portal staff, validate workload with staged releases, assign backup cover and a capacity-review owner; keep manual launch scope bounded. | [O], [R], [V] |

## Stop points

| Label | Warning sign → action | Sources |
|---|---|---|
| Sales assessment | Build acceptance, eligible-address list or retail delivery unproven → do not promise activation; reduce H and recalculate or defer launch. Altstadt funding remains unresolved → keep it outside this scenario. | [N], [C], [V], [P] |
| Sales assessment | Registration/contracts missing, billing test fails or after-hours support unowned → hold launch until corrected and retested; portal readiness alone is not launch readiness. | [O], [L], [M], [V] |
| Sales assessment | Orders approach/exceed **approximately 60/month**, backlog grows or support quality falls → throttle sales, review actual staffing and start Level 2 planning before increasing intake. Even the conditional first-year average leaves little headroom for peaks; do not assume immediate upgrade capacity. | [O]; model above |
| Sales assessment | Scope expansion or full integration requested before operating basics work → retain the portal entry and require a separately approved capacity/delivery plan. | [O], [R] |

## Questions

| Label | Risk-reducing question for meeting 2 | Sources |
|---|---|---|
| Open question | Can the utility confirm the corrected Q2 2028 target and funded-district-only entry, name the owner/date for a verified orderable-premises list, and agree to recalculate rather than treat 10,500 district households as connections? | [V], [N], [C] |
| Open question | Who owns and funds telecom billing, trained portal staffing and the complete 24/7 customer fault path, and will the decision-makers require tested readiness and capacity gates before authorizing launch? | [L], [M], [V], [O], [P] |

**Fact — Source key (local files; internal inputs and this model remain INTERNAL):**

| Key | File |
|---|---|
| Fact — [B], INTERNAL model inputs | `data/contoso/business-case-assumptions.json` |
| Fact — [O], onboarding | `data/contoso/onboarding-guide.md` |
| Fact — [R], INTERNAL references | `data/contoso/references.md` |
| Fact — [P], INTERNAL products/conditions | `data/contoso/product-catalog.md` |
| Fact — [N], undated coverage/plans | `data/network/coverage-lindenau.csv` |
| Fact — [C], funding decision | `data/region/council-minutes-2026-09.md` |
| Fact — [L], INTERNAL lead record | `data/lead-file/lead-record.md` |
| Fact — [M], INTERNAL initial notes | `data/lead-file/meeting-1-notes.md` |
| Fact — [V], INTERNAL later correction | `data/lead-file/voice-memo-transcript.txt` |
