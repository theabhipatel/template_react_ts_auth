# 🧩 React TypeScript Auth Template

A pre-configured **React.js + TypeScript** template to help you start new projects faster.  
This setup includes **authentication**, **Redux Toolkit**, **Tailwind CSS**, **Shadcn UI**, **React Router**, **Husky**, **Prettier**, **absolute paths**, and more — everything ready out of the box.

## 🚀 Features

### 🔐 Authentication System

- Login & Signup pages
- Protected routes
- JWT-based authentication (frontend-ready)
- Axios client with interceptors
- Auth Redux slice
- Auto redirect when unauthorized
- User profile page

### 🎨 UI & Styling

- Tailwind CSS configured
- Shadcn UI pre-installed (`components.json` included)
- Responsive components & pages
- Global styles in `index.css`

### 🛠️ Development Tools

- TypeScript
- ESLint configured
- Prettier auto formatting
- Husky pre-commit hook (`lint-staged` ready)
- Absolute import paths (`@/components/*`, `@/store/*`, etc.)
- Vite bundler

### 🧭 Routing

- React Router v6
- PrivateRoute protection
- Nested routes setup
- 404 Page

### 🧱 State Management

- Redux Toolkit (auth + user APIs ready)
- Typed hooks

## 📂 Project Structure

```
src/
 ├── components/           # Reusable UI components
 ├── layouts/              # Layout wrappers
 ├── pages/                # Login, Signup, Home, Profile, NotFound
 ├── routes/               # App routes + protected routes
 ├── store/                # Redux store + slices + APIs
 ├── utils/                # Axios client + helpers
 ├── types/                # Type definitions
 └── App.tsx               # Root application
```

## ⚡ Getting Started

### 1. Clone the Template

```bash
git clone https://github.com/theabhipatel/template_react_ts_auth
cd template_react_ts_auth
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

### 4. Build for Production

```bash
npm run build
```

## 🔧 Environment Variables

Create a `.env` file:

```
VITE_BASE_URL=http://localhost:5000
```

### Backend endpoints required:

- POST `/auth/login`
- POST `/auth/signup`
- GET `/users/me`

## 🔐 Authentication Flow (Frontend)

1. User logs in → API returns token
2. Token stored in Redux + localStorage
3. Axios interceptor attaches token
4. Unauthorized auto-logout
5. Protected pages redirect to `/login`

## 🎨 UI Components Using Shadcn

Generate new components:

```bash
npx shadcn-ui add button card input form
```

## 🧹 Formatting & Linting

Runs automatically via Husky.

Manual commands:

```bash
npm run lint
npm run format
```

## 📦 Absolute Imports

Already configured:

```
@/components/*
@/store/*
@/pages/*
@/utils/*
```

Example:

```ts
import LoginForm from "@/pages/login/components/LoginForm";
```

## 🛠️ Tech Stack

- React.js + TypeScript
- Vite
- Tailwind CSS
- Shadcn UI
- React Router v6
- Redux Toolkit
- Axios
- Prettier + ESLint + Husky
- Absolute Paths

## 🏁 Ready to Use

This template saves hours when starting a new React project.

## ⭐ Contribute

Feel free to submit a PR.

## 📄 License

MIT License
