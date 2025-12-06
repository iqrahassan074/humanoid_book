---
id: 0001
title: Update constitution with project rules
stage: constitution
date: 2025-12-06
surface: agent
model: claude-sonnet-4-5-20250929
feature: none
branch: 1-arguments
user: unknown
command: /sp.constitution
labels: ["constitution", "update", "project-rules"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - .specify/memory/constitution.md
tests:

---

## Prompt

You are an autonomous project generator. Your ONLY job is to create full real project files on my machine when I run /sp.implement.

PROJECT TYPE:
- Full-stack Humanoid AI Book Web App
- Frontend: Docusaurus (React)
- Backend: FastAPI (Python)
- Animated UI, modern, glassmorphic, glowing, gradients
- Includes:
  • Homepage with animated hero + robot image + title “Welcome to My Humanoid AI Book”
  • Sign In / Sign Up pages
  • Chatbot page using Gemini API
  • Book section with 6 chapters
  • New stylish UI components
  • Full folder structure automatically generated

Strict Rules:
- Always generate REAL FILES inside the correct folders.
- NEVER return explanations or previews—just generate files.
- NEVER create empty files.
- All frontend code goes under: frontend/
- All backend code goes under: backend/
- All routes/pages must be fully implemented.
- You may create multiple files in one implement step.
- The output MUST be valid working code.

## Response snapshot

Constitution updated to version 1.1.0 (Minor version bump for new project-specific rules). No files require manual follow-up.

Suggested commit message: `docs: amend constitution to v1.1.0 (project-specific rules)`

## Outcome

- ✅ Impact: Constitution updated with new project rules.
- 🧪 Tests: N/A
- 📁 Files: 1 file modified: .specify/memory/constitution.md
- 🔁 Next prompts: User to approve commit message or provide next command.
- 🧠 Reflection: Successfully updated constitution based on user input for project type and rules. Handled script failure by falling back to agent-native PHR creation.

## Evaluation notes (flywheel)

- Failure modes observed: PHR creation script not found.
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Investigate missing PHR script or ensure it's available in the environment.
