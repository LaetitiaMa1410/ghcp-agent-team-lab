# ADR-001 — Agent topology for the partner cockpit

> Reference result of steps 1d–1e. Status: **accepted**.

## Context

Jonas needs a 2-page cockpit from 12 sources that contradict each other and mix facts, guesses and politics
(see `design/data-inventory.md`, `design/requirements.md`). He explicitly wants conflicts between views to **stay visible** and a **bold and a safe** option.

## Single agent or team?

| Criterion | Single agent fits when… | Team fits when… | Here |
| --- | --- | --- | --- |
| Kind of task | recurring, one clear output | several distinct pieces of work | Team: analysis, scenarios, synthesis |
| Input | small, one source | complex, many sources | Team: 12 sources, many owners |
| Rules | stable, few | many, partly conflicting | Team: labels, confidentiality, neutrality |
| Perspectives | one view is enough | several views must be kept | **Team**: facts, technology, people, bold vs. safe |
| Review | output checked at the end | intermediate results need checking | Team: each perspective must be checkable |
| Repeatability | one-off | repeatable process | Team: every partner meeting |

**Result:** a team — mainly because **perspectives must be preserved** and **synthesis is a separate job**.

## Options

| | Option | Pros | Cons |
| --- | --- | --- | --- |
| 1 | **One agent** | Fast to build | Blends all views into one "balanced" text; facts and opinions mix; reasoning invisible |
| 2 | **Sequential pipeline** (facts → tech → people → scenario → cockpit) | Simple to follow | Analyses don't depend on each other — slow; one "balanced" scenario agent averages out |
| 3 | **Perspectives:** 3 parallel analysts → 2 opposing scenario agents → 1 writer, run by a concierge with checkpoints | Views stay sharp; parallel = faster; productive tension between bold and safe; human checks each stage | 7 agents; contracts between stages must be agreed |
| 4 | **Full expert council** (12+ role agents incl. critics and a quality board) | Very rich; mirrors a real expert panel | Too many handoffs for this case and timebox; hard to review |

## Decision

**Option 3**: stage 1 `fact-analyst` ∥ `tech-advisor` ∥ `partner-voice` → stage 2 `scenario-bold` ∥ `scenario-safe` → stage 3 `cockpit-writer`,
run by a `concierge` that stops after every stage for a human checkpoint and ends with a quality gate. The concierge has no `edit` tool.

## Consequences

- ✅ Requirements map to agents (US-1 → fact-analyst, US-2 → partner-voice, US-3 → tech-advisor, US-4 → scenario agents + writer, US-5/6 → cockpit-writer).
- ✅ Labels are enforced once in `AGENTS.md` and used by every agent.
- ⚠️ Two scenario agents may use different district sets — the writer must make that visible, not hide it.
- ⚠️ Materials selection lives in the writer; if it grows, split it into its own agent.
- 🔁 Revisit when an optional expert review (phase 6) is added — e.g. a critic agent between stages 2 and 3.
