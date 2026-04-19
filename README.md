# Food Order App

**Full-Stack Web Application** | React (Frontend) | Express.js (Backend)

---

## Project Overview

A full-stack food ordering application with React frontend and Express.js backend. Users can browse meals, add items to cart, checkout with validation, and submit orders.

**Status:** ✅ Functional | **Version:** 1.0.0

---

## Quick Installation

### Prerequisites
- Node.js (v14+)
- npm

### Setup

```bash
# Clone/download project
cd food-order-app

# Install dependencies
npm install
cd backend && npm install && cd ..
```

### Run Application

**Terminal 1 - Backend (port 3001)**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend (port 5174)**
```bash
npm run dev
```

Visit `http://localhost:5174`

---

## Features

- Browse meal catalog
- Add/remove items from cart
- Adjust quantities in real-time
- Checkout with form validation
- Order submission and confirmation
- Error handling and validation

---

## Project Structure

```
src/
├── components/          # React components (Main, Meals, Cart, Checkout, etc.)
├── Store/              # GlobalState Context (state management)
├── util/               # Utilities (CurrencyFormatter)
└── App.jsx             # Root component

backend/
├── app.js              # Express server & API routes
└── data/               # available-meals.json, orders.json
```

---

## Technology Stack

**Frontend:** React 19.2.4 | Vite 4.4.5 | React Hook Form 7.71.2

**Backend:** Express.js 4.18.2 | Node.js | Nodemon

**Language:** JavaScript (ES6+) | JSON

**Storage:** JSON Files

---

## Core Concepts

- **React Hooks:** useState, useRef, useContext, useEffect
- **Context API:** Global state management
- **Component Composition:** Reusable components
- **REST API:** GET /meals, POST /orders
- **Form Validation:** Email, required fields
- **State Management:** Centralized in App.jsx
- **Async Operations:** Fetch API, async/await

---

## Commands

```bash
# Frontend
npm run dev      # Development server
npm run build    # Production build

# Backend
npm run dev      # Development (auto-reload)
npm start        # Production
```

---

## API Endpoints

- **GET /meals** - Fetch all meals
- **POST /orders** - Submit new order

---

## License

ISC License
