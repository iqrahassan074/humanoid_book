# Tasks: AI Book Web App Implementation

**Feature Branch**: `feature/ai-book-app-spec` | **Date**: 2025-12-06 | **Plan**: specs/ai-book-app/plan.md
**Input**: Implementation plan from `/specs/ai-book-app/plan.md`

## Phase 0: Setup and Core Structure

### Docusaurus Frontend

-   **TASK_NAME**: Initialize Docusaurus Project
    -   **GOAL**: Create a new Docusaurus project in the `frontend/` directory.
    -   **FILES_TO_CREATE_OR_UPDATE**: `frontend/` directory with Docusaurus boilerplate files.
    -   **EXPECTED_OUTPUT**: Docusaurus project successfully created and runnable.

### FastAPI Backend

-   **TASK_NAME**: Initialize FastAPI Project
    -   **GOAL**: Set up a basic FastAPI project in the `backend/` directory.
    -   **FILES_TO_CREATE_OR_UPDATE**: `backend/` directory with `main.py`, `requirements.txt`, etc.
    -   **EXPECTED_OUTPUT**: FastAPI application successfully created and runnable.

### General Setup

-   **TASK_NAME**: Create Root .gitignore
    -   **GOAL**: Configure global `.gitignore` to ignore common project artifacts.
    -   **FILES_TO_CREATE_OR_UPDATE**: `.gitignore`
    -   **EXPECTED_OUTPUT**: `.gitignore` file created and configured.
-   **TASK_NAME**: Create Root README.md
    -   **GOAL**: Provide a basic project README.
    -   **FILES_TO_CREATE_OR_UPDATE**: `README.md`
    -   **EXPECTED_OUTPUT**: `README.md` file created with project overview.

## Phase 1: Frontend Core - Homepage & Layout

### Docusaurus Frontend

-   **TASK_NAME**: Configure Docusaurus Theme
    -   **GOAL**: Override default Docusaurus theme to apply custom styles, global CSS for gradients, glowing effects.
    -   **FILES_TO_CREATE_OR_UPDATE**: `frontend/docusaurus.config.js`, `frontend/src/css/custom.css`, `frontend/src/theme/` (new custom theme files).
    -   **EXPECTED_OUTPUT**: Docusaurus theme updated with initial custom styles.
-   **TASK_NAME**: Create Homepage Component
    -   **GOAL**: Develop `frontend/src/pages/index.js` for the animated hero section, robot image, and title.
    -   **FILES_TO_CREATE_OR_UPDATE**: `frontend/src/pages/index.js`, `frontend/static/img/robot.png` (or similar).
    -   **EXPECTED_OUTPUT**: Homepage displaying animated hero, robot image, and title.
-   **TASK_NAME**: Integrate Animated UI Components (Initial)
    -   **GOAL**: Implement placeholder animated UI components to demonstrate glassmorphism and animations.
    -   **FILES_TO_CREATE_OR_UPDATE**: `frontend/src/components/AnimatedCard.js`, `frontend/src/components/GlassmorphicButton.js` (examples).
    -   **EXPECTED_OUTPUT**: Custom animated and glassmorphic UI components integrated.

## Phase 2: Authentication System

### FastAPI Backend

-   **TASK_NAME**: Backend Auth API - Models
    -   **GOAL**: Define Pydantic models for user (signup, signin) and JWT tokens.
    -   **FILES_TO_CREATE_OR_UPDATE**: `backend/src/models/auth.py`.
    -   **EXPECTED_OUTPUT**: Pydantic models for authentication defined.
-   **TASK_NAME**: Backend Auth API - Logic
    -   **GOAL**: Implement user registration, login, and JWT generation/validation logic.
    -   **FILES_TO_CREATE_OR_UPDATE**: `backend/src/auth/` (e.g., `backend/src/auth/security.py`, `backend/src/auth/crud.py`).
    -   **EXPECTED_OUTPUT**: Backend authentication logic implemented.
-   **TASK_NAME**: Backend Auth API - Routes
    -   **GOAL**: Create FastAPI endpoints for `/api/signup` and `/api/signin`.
    -   **FILES_TO_CREATE_OR_UPDATE**: `backend/src/main.py`.
    -   **EXPECTED_OUTPUT**: `/api/signup` and `/api/signin` endpoints accessible.

### Docusaurus Frontend

-   **TASK_NAME**: Frontend Auth Pages
    -   **GOAL**: Develop `frontend/src/pages/signup.js` and `frontend/src/pages/signin.js` with forms.
    -   **FILES_TO_CREATE_OR_UPDATE**: `frontend/src/pages/signup.js`, `frontend/src/pages/signin.js`.
    -   **EXPECTED_OUTPUT**: Functional sign-up and sign-in forms on dedicated pages.
-   **TASK_NAME**: Frontend API Service for Auth
    -   **GOAL**: Create `frontend/src/api/auth.js` for interacting with backend authentication APIs.
    -   **FILES_TO_CREATE_OR_UPDATE**: `frontend/src/api/auth.js`.
    -   **EXPECTED_OUTPUT**: Frontend service for calling auth APIs.
-   **TASK_NAME**: Frontend Auth Context/State
    -   **GOAL**: Implement React Context or similar for managing authentication state and JWT tokens.
    -   **FILES_TO_CREATE_OR_UPDATE**: `frontend/src/context/AuthContext.js` (or similar).
    -   **EXPECTED_OUTPUT**: Global authentication state management.

## Phase 3: Chatbot Integration

### FastAPI Backend

-   **TASK_NAME**: Backend Chatbot Endpoint
    -   **GOAL**: Implement `/api/chatbot` endpoint that proxies requests to the Gemini API.
    -   **FILES_TO_CREATE_OR_UPDATE**: `backend/src/main.py`.
    -   **EXPECTED_OUTPUT**: `/api/chatbot` endpoint accessible.
-   **TASK_NAME**: Gemini API Integration
    -   **GOAL**: Integrate Google Generative AI SDK within `backend/src/chatbot/` to handle chatbot logic and communication.
    -   **FILES_TO_CREATE_OR_UPDATE**: `backend/src/chatbot/gemini_service.py` (example).
    -   **EXPECTED_OUTPUT**: Backend able to communicate with Gemini API.

### Docusaurus Frontend

-   **TASK_NAME**: Frontend Chatbot Page
    -   **GOAL**: Create `frontend/src/pages/chatbot.js` with a UI for sending messages and displaying responses.
    -   **FILES_TO_CREATE_OR_UPDATE**: `frontend/src/pages/chatbot.js`.
    -   **EXPECTED_OUTPUT**: Functional chatbot UI page.
-   **TASK_NAME**: Frontend Chatbot API Service
    -   **GOAL**: Create `frontend/src/api/chatbot.js` for communicating with the backend chatbot endpoint.
    -   **FILES_TO_CREATE_OR_UPDATE**: `frontend/src/api/chatbot.js`.
    -   **EXPECTED_OUTPUT**: Frontend service for calling chatbot API.

## Phase 4: Book Section

### Docusaurus Frontend

-   **TASK_NAME**: Create Book Chapter Content
    -   **GOAL**: Create 6 markdown files for book content.
    -   **FILES_TO_CREATE_OR_UPDATE**: `frontend/docs/chapter1.md` through `frontend/docs/chapter6.md`.
    -   **EXPECTED_OUTPUT**: Six static markdown files containing book chapter content.
-   **TASK_NAME**: Configure Docusaurus Sidebar for Book
    -   **GOAL**: Update `docusaurus.config.js` to include the 6 chapters in the sidebar navigation.
    -   **FILES_TO_CREATE_OR_UPDATE**: `frontend/docusaurus.config.js`.
    -   **EXPECTED_OUTPUT**: Book chapters navigable via Docusaurus sidebar.

## Phase 5: Final UI Enhancements & Refinements

### Docusaurus Frontend

-   **TASK_NAME**: Review and Apply Global Styles
    -   **GOAL**: Conduct a full review of all components and pages, applying the defined UI styles (gradients, glowing effects).
    -   **FILES_TO_CREATE_OR_UPDATE**: `frontend/src/css/custom.css`, `frontend/src/components/*`, `frontend/src/pages/*`.
    -   **EXPECTED_OUTPUT**: Consistent application of modern UI styles across the app.
-   **TASK_NAME**: Final Animation Integration
    -   **GOAL**: Ensure smooth transitions and animations across the application.
    -   **FILES_TO_CREATE_OR_UPDATE**: `frontend/src/components/*`, `frontend/src/pages/*`, `frontend/src/theme/*`.
    -   **EXPECTED_OUTPUT**: Polished UI with smooth animations and transitions.
