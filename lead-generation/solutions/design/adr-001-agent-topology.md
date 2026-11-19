# ADR-001 — Agent topology for conference lead generation

> Reference result of steps 1d–1e. Status: **accepted**.

## Context

Sabine needs a one-page briefing from 6 messy data sources (see `design/data-inventory.md`, `design/requirements.md`).
The work has clear steps that depend on each other: you can't score a company before you know which spellings belong to it,
and you can't pick 6 meetings before existing customers are filtered out.

## Single agent or team?

| Criterion | Single agent fits when… | Team fits when… | Here |
| --- | --- | --- | --- |
| Kind of task | recurring, one clear output | several distinct pieces of work | Team: matching, analysis, scoring and writing are different jobs |
| Input | small, one source | complex, many sources | Team: 6 sources, 3 formats |
| Rules | stable, few | many, partly conflicting | Mixed: rules are stable, but apply to different steps |
| Perspectives | one view is enough | several views must be kept | Single: one sales view |
| Review | output checked at the end | intermediate results need checking | Team: an error in matching poisons everything after it |
| Repeatability | one-off | repeatable process | Team: every conference again |

**Result:** a team — mainly because of **error isolation** and **reviewable handoffs**, not because of multiple perspectives.

## Options

| | Option | Pros | Cons |
| --- | --- | --- | --- |
| 1 | **One agent** with good instructions | Fastest to build; one prompt | Context grows with every file; errors invisible; can't re-run one step |
| 2 | **One agent + skills** (matching skill, scoring skill) | Reusable procedures, still simple | Still one context; no reviewable intermediate files |
| 3 | **Pipeline of 4 specialized agents + orchestrator with checkpoints** | One job per agent; files in `out/` as contracts; human checks each step; fix and re-run one agent | More files to maintain; handoff formats must be agreed |
| 4 | **Parallel scorers per product category** | Each scorer is an expert | 4× reading the same data; conflicting ratings must be merged; overkill for 12 companies |

## Decision

**Option 3**: `source-collector` → `company-analyst` → `lead-scorer` → `briefing-writer`, run by a `lead-orchestrator`
that stops after every step for a human checkpoint. The orchestrator has no `edit` tool.

## Consequences

- ✅ Each requirement maps to one agent (US-1 → source-collector, US-2 → company-analyst, US-3 → lead-scorer, US-4/5 → briefing-writer).
- ✅ Personal data is minimized early and checked again at the end.
- ⚠️ Handoff formats are now contracts — changing one means updating the consumer.
- ⚠️ A run takes several turns because of the checkpoints. That's intended.
- 🔁 Revisit when web research is added (own agent with its own guardrails) or when the participant lists grow to hundreds (split contact prioritization from writing).
