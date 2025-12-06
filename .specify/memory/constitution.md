<!--
Version change: 1.0.0 → 1.1.0
Modified principles:
  - N/A
Added sections:
  - Project Specific Rules
Removed sections:
  - N/A
Templates requiring updates:
  - .specify/templates/plan-template.md: ✅ updated
  - .specify/templates/spec-template.md: ✅ updated
  - .specify/templates/tasks-template.md: ✅ updated
  - .claude/commands/sp.adr.md: ✅ updated
  - .claude/commands/sp.analyze.md: ✅ updated
  - .claude/commands/sp.checklist.md: ✅ updated
  - .claude/commands/sp.clarify.md: ✅ updated
  - .claude/commands/sp.constitution.md: ✅ updated
  - .claude/commands/sp.git.commit_pr.md: ✅ updated
  - .claude/commands/sp.implement.md: ✅ updated
  - .claude/commands/sp.phr.md: ✅ updated
  - .claude/commands/sp.plan.md: ✅ updated
  - .claude/commands/sp.specify.md: ✅ updated
  - .claude/commands/sp.tasks.md: ✅ updated
Follow-up TODOs: none
-->
# Claude Code Constitution

## Core Principles

### Spec-Driven Development (SDD)
All development must be guided by clear, explicit specifications. Changes to code must trace back to a specified requirement.

### Tool-First Execution
Agents MUST prioritize and use MCP tools and CLI commands for all information gathering and task execution. Never assume a solution from internal knowledge; all methods require external verification.

### Prompt History Record (PHR)
Every user input must be recorded verbatim in a Prompt History Record (PHR). PHRs are routed based on stage (constitution, feature-specific, general).

### Architectural Decision Record (ADR) Suggestion
When an architecturally significant decision is detected, suggest documenting it with an ADR. Never auto-create ADRs; require user consent.

### Human as Tool Strategy
Invoke the user for input when encountering situations requiring human judgment, such as ambiguous requirements, unforeseen dependencies, or architectural uncertainty.

### Professional Objectivity
Prioritize technical accuracy and truthfulness. Focus on facts and problem-solving, providing direct, objective technical information without unnecessary superlatives or emotional validation.

## Development Guidelines

Authoritative Source Mandate: Agents MUST prioritize and use MCP tools and CLI commands for all information gathering and task execution. NEVER assume a solution from internal knowledge; all methods require external verification.
Execution Flow: Treat MCP servers as first-class tools for discovery, verification, execution, and state capture. PREFER CLI interactions (running commands and capturing outputs) over manual file creation or reliance on internal knowledge.
Knowledge Capture (PHR) for Every User Input: After completing requests, you MUST create a PHR (Prompt History Record).
Explicit ADR suggestions: When significant architectural decisions are made, run the three‑part test and suggest documenting.
Human as Tool Strategy: You are not expected to solve every problem autonomously. You MUST invoke the user for input when you encounter situations that require human judgment.

## Default Policies & Execution Contract

Clarify and plan first, do not invent APIs, never hardcode secrets, prefer smallest viable diff, cite existing code, keep reasoning private.
Execution Contract: Confirm surface and success criteria, list constraints, produce the artifact with acceptance checks inlined, add follow‑ups and risks, create PHR, and if plan/tasks identified decisions that meet significance, surface ADR suggestion text.

## Project Specific Rules

### Project Type
Full-stack Humanoid AI Book Web App with a Docusaurus (React) frontend and FastAPI (Python) backend. The UI should be animated, modern, glassmorphic, glowing, and use gradients.

### Inclusions
- Homepage with animated hero, robot image, and title “Welcome to My Humanoid AI Book”
- Sign In / Sign Up pages
- Chatbot page using Gemini API
- Book section with 6 chapters
- New stylish UI components
- Full folder structure automatically generated

### Strict Generation Rules
- Always generate REAL FILES inside the correct folders.
- NEVER return explanations or previews—just generate files.
- NEVER create empty files.
- All frontend code goes under: `frontend/`
- All backend code goes under: `backend/`
- All routes/pages must be fully implemented.
- Multiple files may be created in one implement step.
- The output MUST be valid working code.

## Governance

Constitution supersedes all other practices. Amendments require documentation, approval, and a migration plan. All PRs/reviews must verify compliance. Complexity must be justified.

**Version**: 1.1.0 | **Ratified**: 2025-12-06 | **Last Amended**: 2025-12-06