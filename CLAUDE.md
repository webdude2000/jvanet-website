# jvanet-website — Build Task

**Task**: Products Page — Filterable Showcase
**Category**: frontend_component
**Complexity**: standard

## Description

Build the products page with filterable asymmetric grid showing all products organized by status (Live, Launching Soon, In Development, Ecosystem).

## REVISION REQUIRED — Fix These Issues

- [gemini:quality] Product data is duplicated in FeaturedProducts.tsx rather than being imported from a shared data source.; [gemini:quality] No E2E or visual tests implemented to verify the components' behavior and layout.; [gemini:completeness] The worker completely missed the core task of building a dedicated products page.

## Workflow (use your Superpowers)

0. Before starting, check if `.forge/worker_output.md` exists from a prior attempt. If it does, read it to understand what was already done and continue from where it left off rather than starting from scratch. Also check `git log --oneline -5` for prior commits.
1. Read all `.forge/` context files to understand the full picture
2. Use the architect agent to verify the approach if this is complex
3. Create a plan with test gates per phase
4. Use `/execute-plan` to implement with subagent-driven TDD
5. After implementation, run `/review staged` for 6-dimension code review
6. Fix any issues found in review
7. Run all tests and verify the build compiles
8. Run `/security-review` to check for security vulnerabilities
9. Fix any security issues found before completing

## Progress Reporting (MANDATORY)

After EVERY significant step, update `forge_progress.json`:
```json
{
  "task_id": "jva-phase-003",
  "status": "in_progress",
  "phase": "implementing",
  "completed_steps": [],
  "current_step": "what you are doing now",
  "files_created": [],
  "files_modified": [],
  "tests_passing": 0,
  "tests_total": 0,
  "errors": [],
  "last_update": "ISO timestamp"
}
```

## Worker Output Summary (MANDATORY — write BEFORE done.json)

Before writing `.forge/done.json`, write a detailed summary to `.forge/worker_output.md`:

```markdown
# Worker Output Summary

## What was implemented
- Files created: [list]
- Files modified: [list]

## Approach taken
Describe the approach and why you chose it.

## Issues encountered
Any problems hit and how they were resolved.

## Test results
Which tests pass/fail, any skipped tests.

## Remaining concerns
Anything incomplete or needing follow-up.
```

This file is read by the review pipeline for richer context. Be thorough.

## Completion Signal (CRITICAL — do this when done)

When ALL work is finished, tests pass, and build compiles:
```json
// Write to .forge/done.json
{
  "task_id": "jva-phase-003",
  "status": "completed",
  "completed_at": "ISO timestamp",
  "files_created": [],
  "files_modified": [],
  "tests_passing": 0,
  "tests_total": 0,
  "summary": "Brief summary of what was built"
}
```

The ForgeWatch supervisor is monitoring for `.forge/done.json`.
If you get stuck, write it with status "error" and explain.
Do NOT exit the session — ForgeWatch will handle cleanup.

## Code Standards

- Type hints on all function signatures
- Specific exception types (no bare except)
- No hardcoded secrets, API keys, or credentials
- Comments only for non-obvious logic
- Run tests before claiming completion
- Commit your changes with a descriptive message
