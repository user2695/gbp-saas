# GBP Review SaaS 🏪⭐

A SaaS platform to **collect, manage, and reply to Google Business Profile (GBP) reviews** using **AI-powered responses**.  
Built with **Next.js, Node.js, TypeScript, TailwindCSS, and Docker**.

---

## 🚀 Features

- 🔑 **Authentication & User Management**
  - Secure login & signup
  - Multi-tenant architecture for agencies & businesses

- ⭐ **Google Business Profile Integration**
  - Fetch reviews directly from Google Business API
  - Centralized dashboard for managing multiple locations

- 🤖 **AI-Powered Review Replies**
  - Smart, context-aware response generation
  - Customizable tone & style (professional, casual, friendly)

- 📊 **Analytics & Insights**
  - Track review sentiment over time
  - Performance metrics for locations/brands

- ⚙️ **Admin Tools**
  - Manage users, subscriptions, and business locations
  - Role-based access (Admin, Manager, Staff)

---

## 🏗️ Tech Stack

- **Frontend:** Next.js (App Router) + TypeScript + TailwindCSS  
- **Backend:** Node.js (Express / Fastify) + TypeScript  
- **Database:** PostgreSQL / MongoDB (choose one)  
- **Auth:** JWT / NextAuth.js  
- **AI Integration:** OpenAI API (or any LLM provider)  
- **Infrastructure:** Docker + Docker Compose  
- **Monorepo Management:** Turborepo  
- **UI Library:** Custom shared `packages/ui-library`  

---

## 📂 Monorepo Structure

```bash
gbp-review-saas/
│── apps/
│   ├── frontend/       # Next.js React App (customer-facing dashboard)
│   └── backend/        # Node.js API server
│
│── packages/
│   ├── ui-library/     # Shared UI components (Button, Input, etc.)
│   ├── eslint-config/  # Custom ESLint rules
│   └── tsconfig/       # Shared TS configs
│
│── docker-compose.yml  # Multi-service setup
│── package.json
│── tsconfig.json
│── README.md
