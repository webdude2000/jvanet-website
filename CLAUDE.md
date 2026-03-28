# jvanet — Build Task

**Task**: JVANet — Full UI redesign with Impeccable premium design
**Category**: frontend_component
**Complexity**: standard

## Description

Redesign the JVANet IT services website using Impeccable skill for premium corporate tech aesthetics. Must project credibility, technical authority, and professionalism.

## Workflow (use your Superpowers)

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
  "task_id": "ui-jva-001",
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

## Completion Signal (CRITICAL — do this when done)

When ALL work is finished, tests pass, and build compiles:
```json
// Write to .forge/done.json
{
  "task_id": "ui-jva-001",
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
