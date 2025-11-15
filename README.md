# Neogen Project

A React + TypeScript application built with Vite.  
This repository follows a clean and strict Git workflow (main → dev → feature), as required by the team guidelines.

---

## 📥 Clone the Project

    git clone https://github.com/r1derPUSH/neogen-project.git
    cd neogen-project

---

## 🚀 Getting Started

### 1. Install Dependencies

    npm install

### 2. Run Development Server

    npm run dev

### 3. Build for Production

    npm run build

### 4. Preview Production Build

    npm run preview

---

## 🧰 Tech Stack

- React 18
- TypeScript
- Vite
- CSS / CSS Modules
- React Router DOM

---

## 🌿 Git Branch Workflow

This project uses a controlled Git flow with strict rules.

### Main Branches

- **main** — production-ready code, always stable.
- **dev** — all features are merged here before main.

### Feature Branches

Create feature branches from `dev`:

- `feat/<task-name>` — new features
- `fix/<bug-name>` — bug fixes
- `chore/<task>` — maintenance / configs / refactors
- `docs/<documentation>` — documentation updates

### Rules

- Do **not** push directly to `main` or `dev`.
- All work happens in feature branches.
- Open Pull Requests **only into `dev`**.
- After review, `dev` can be merged into `main`.
- `main` and `dev` must always stay clean and in sync (0 behind).
