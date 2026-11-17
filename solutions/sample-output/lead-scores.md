# WholesaleCon Europe 2026 — lead scores

| Rating / convention | Meaning |
| --- | --- |
| High | Stated current need; target segment fits. |
| Medium | Plausible fit; no explicit purchasing need for this category. |
| Low / – | Weak fit / no evidenced fit. Missing evidence is not proof of no need. |
| Categories | Columns abbreviate the four categories in `data/product-categories.json`. |
| Unknown customer status | Not listed in `data/crm-existing-customers.csv`; not confirmed new. |

| Company | IP Transit | Voice | Mobile & IoT | Capacity | Best fit | Existing customer |
| --- | --- | --- | --- | --- | --- | --- |
| Nordwave Networks GmbH | High | – | – | High | IP Transit + Capacity | Unknown — not listed |
| Skyline Cloud Ltd | Medium | – | – | High | Capacity | Unknown — not listed |
| Andes Telecom S.A. | High | High | Medium | – | IP Transit + Voice | Unknown — not listed |
| Brightloop IoT AB | – | – | High | – | Mobile & IoT | Unknown — not listed |
| Pocket Mobile Ltd | – | – | High | – | Mobile & IoT | Unknown — not listed |
| Orbitel Communications FZ-LLC | – | High | – | High | Voice + Capacity; account team only | Yes — existing customer; exclude from hunting |
| Helix Data Centers B.V. | – | – | – | High | Capacity | Unknown — not listed |
| StreamNest Media Inc. | High | – | – | – | IP Transit | Unknown — not listed |
| Kestrel Bank AG | – | – | – | – | None evidenced | Unknown — not listed |
| Fjord Fiber AS | High | – | – | High | IP Transit + Capacity; account team only | Yes — existing customer; exclude from hunting |
| Vantage Subsea Systems | – | – | – | High | Capacity | Unknown — not listed |
| Arcadia Voice Hub Ltd | – | High | – | – | Voice | Unknown — not listed |
| Quartz Logistics GmbH (unmatched) | – | – | – | – | Unknown — no profile | Unknown — not listed |

## Reasons

| Company | Category / rating | Quoted evidence and interpretation | Source file |
| --- | --- | --- | --- |
| Nordwave Networks GmbH | IP Transit — High | ISP “buys upstream IP transit from two international carriers”; ongoing buying need, not evidence of a replacement tender. | `data/company-profiles/nordwave-networks.md` |
| Nordwave Networks GmbH | Capacity — High | “Publicly announced plans to double backbone capacity to Hamburg and Frankfurt in 2027.” | `data/company-profiles/nordwave-networks.md` |
| Skyline Cloud Ltd | IP Transit — Medium | “Public cloud and edge computing provider”; “Runs an open peering policy”. Target segment and peering fit; no new transit/peering purchase stated. | `data/company-profiles/skyline-cloud.md` |
| Skyline Cloud Ltd | Capacity — High | “Looking for diverse long-haul capacity and data center interconnects between its regions.” | `data/company-profiles/skyline-cloud.md` |
| Andes Telecom S.A. | IP Transit — High | Carrier “Seeks European partners for international voice interconnect and IP transit to reach European content.” | `data/company-profiles/andes-telecom.md` |
| Andes Telecom S.A. | Voice — High | “Seeks European partners for international voice interconnect”; explicit voice need, not generic interconnection. | `data/company-profiles/andes-telecom.md` |
| Andes Telecom S.A. | Mobile & IoT — Medium | “Incumbent fixed and mobile carrier”; “Active in GSMA roaming hubs.” Roaming fit plausible; no new European mobile requirement stated. | `data/company-profiles/andes-telecom.md` |
| Brightloop IoT AB | Mobile & IoT — High | “Needs multi-network IoT roaming coverage in Europe and permanent roaming agreements.” | `data/company-profiles/brightloop-iot.md` |
| Pocket Mobile Ltd | Mobile & IoT — High | “Mobile virtual network operator (MVNO)”; “currently tendering for a new European roaming partner.” | `data/company-profiles/pocket-mobile.md` |
| Orbitel Communications FZ-LLC | Voice — High | International carrier “Expanding voice termination routes into Europe”. Existing customer, not a hunting target. | `data/company-profiles/orbitel-communications.md`; `data/crm-existing-customers.csv` |
| Orbitel Communications FZ-LLC | Capacity — High | “buying additional subsea and terrestrial capacity to Frankfurt.” Existing customer despite additional product opportunity. | `data/company-profiles/orbitel-communications.md`; `data/crm-existing-customers.csv` |
| Helix Data Centers B.V. | Capacity — High | Colocation provider “looking for dark fiber and wavelength partners.” Data-center interconnection, not voice. | `data/company-profiles/helix-data-centers.md` |
| StreamNest Media Inc. | IP Transit — High | OTT provider “Needs additional IP transit and private network interconnects in Europe ahead of the launch.” Not evidence of voice or backbone-capacity procurement. | `data/company-profiles/streamnest-media.md` |
| Fjord Fiber AS | IP Transit — High | Wholesale fiber operator “Seeking partners … to offer IP transit to its customers.” Existing customer, not a hunting target. | `data/company-profiles/fjord-fiber.md`; `data/crm-existing-customers.csv` |
| Fjord Fiber AS | Capacity — High | “Seeking partners to extend its Nordic routes into Central Europe (Hamburg, Frankfurt)”. Existing customer despite additional product opportunity. | `data/company-profiles/fjord-fiber.md`; `data/crm-existing-customers.csv` |
| Vantage Subsea Systems | Capacity — High | Subsea operator “Looking for terrestrial backhaul partners from the Lisbon landing station into Frankfurt”. Backhaul demand, not merely capacity for sale. | `data/company-profiles/vantage-subsea.md` |
| Arcadia Voice Hub Ltd | Voice — High | “Wants to buy high-quality voice routes into European mobile networks and is evaluating a new primary voice interconnect partner.” Mobile termination is voice, not mobile access/IoT. | `data/company-profiles/arcadia-voice-hub.md` |

## Exclusions and uncertainty

| Item | Evidence / handling | Source file |
| --- | --- | --- |
| Existing accounts | Exact CRM account names “Orbitel Communications FZ-LLC” and “Fjord Fiber AS”; route both to account teams, irrespective of product fit. All other statuses remain unknown beyond this extract. | `data/crm-existing-customers.csv` |
| Kestrel Bank AG | “Buys corporate network services and managed security from a local system integrator. No carrier or wholesale activities.” No wholesale fit evidenced. | `data/company-profiles/kestrel-bank.md` |
| Quartz Logistics GmbH | “No matching profile H1”; supplied name retained, segment and needs unknown. All “–” are evidence gaps, not a confirmed disqualification. | `out/participants.md` — Unmatched companies |
| Nordwave shorthand | “Nordwave” (S1) match is “uncertain”; do not treat that badge-scan company association as confirmed. Company scores rely on the profile; P1 independently matches its H1 exactly. | `out/participants.md` — Merge log; `data/company-profiles/nordwave-networks.md` |
