You have a ForgeOS build task to complete. You have Superpowers and all skills loaded.

## Task: JVANet — Full UI redesign with Impeccable premium design
**ID**: ui-jva-001
**Category**: frontend_component
**Complexity**: standard
**Project**: jvanet

## Description
Redesign the JVANet IT services website using Impeccable skill for premium corporate tech aesthetics. Must project credibility, technical authority, and professionalism.

## Context (already in your working directory)
- Read `CLAUDE.md` — it has your coding standards and design requirements
- Read `.forge/architecture.md` — full system design
- Read `.forge/acceptance_criteria.md` — your checklist
- Read `.forge/context.json` — machine-readable task context

## Workflow (use your Superpowers)
1. Start with `/using-superpowers` to activate your full toolkit
2. Read all `.forge/` context files to understand the full picture
3. Use the architect agent to verify the approach if this is complex
4. Create a plan in `plans/` directory with test gates per phase
5. Use `/execute-plan` to implement with subagent-driven TDD
6. After implementation, run `/review staged` for 6-dimension code review
7. Fix any issues found in review
8. Run all tests and verify the build compiles
9. Run `/security-review` to check for security vulnerabilities
10. Fix any security issues found before completing

## Progress Reporting (MANDATORY)
After EVERY significant step, update `forge_progress.json`:
```bash
cat > forge_progress.json << 'EOF'
{
  "task_id": "ui-jva-001",
  "status": "in_progress",
  "phase": "implementing",
  "completed_steps": ["list of completed steps"],
  "current_step": "what you are doing now",
  "files_created": [],
  "files_modified": [],
  "tests_passing": 0,
  "tests_total": 0,
  "errors": [],
  "last_update": "$(date -Iseconds)"
}
EOF
```

## Completion Signal (CRITICAL — do this when done)
When ALL work is finished, tests pass, and build compiles:
```bash
cat > .forge/done.json << 'EOF'
{
  "task_id": "ui-jva-001",
  "status": "completed",
  "completed_at": "$(date -Iseconds)",
  "files_created": [],
  "files_modified": [],
  "tests_passing": 0,
  "tests_total": 0,
  "summary": "Brief summary of what was built"
}
EOF
```

The ForgeWatch supervisor is monitoring for `.forge/done.json`.
If you get stuck or cannot complete, write it with status "error" and explain.
Do NOT exit the session — ForgeWatch will handle cleanup.

Begin now. Start by reading the context files in .forge/ directory.
