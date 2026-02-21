# Flipkart Clone - Production Ready Monorepo

A scalable, production-ready full-stack Flipkart clone built with a modern tech stack and clean architecture.

## 🚀 Tech Stack

- **Frontend**: React + TypeScript + Vite + Tailwind CSS
- **Backend**: Node.js + Express + TypeScript
- **Database**: Prisma + PostgreSQL (Neon)
- **Monorepo Management**: NPM Workspaces

## 📁 Project Structure

```text
.
├── apps/
│   ├── api/          # Express Backend (TypeScript)
│   │   ├── src/
│   │   │   ├── controllers/
│   │   │   ├── services/
│   │   │   ├── routes/
│   │   │   ├── middleware/
│   │   │   ├── utils/
│   │   │   └── config/
│   │   └── prisma/
│   └── web/          # React Frontend (Coming Soon)
├── package.json      # Root Monorepo configuration
└── README.md
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (>= 18.0.0)
- NPM (>= 7.0.0)

### Installation

1. Clone the repository
2. Install dependencies from the root:
   ```bash
   npm install
   ```
3. Set up environment variables in `apps/api/.env`:
   ```env
   PORT=3002
   DATABASE_URL="your-postgresql-url"
   NODE_ENV=development
   ```

### Running the Project

#### Backend (API)
From the root:
```bash
npm run dev
```
Or directly from `apps/api`:
```bash
cd apps/api
npm run dev
```

The API will be available at `http://localhost:3002/api/v1`.

## 📡 API Documentation

### Health Check
- **Endpoint**: `GET /api/v1/health`
- **Description**: Returns the status of the server and database connection.
- **Sample Response**:
  ```json
  {
    "success": true,
    "data": {
      "status": "ok",
      "database": "connected"
    },
    "message": "Server is healthy"
  }
  ```

## 📜 Architecture Patterns

- **Controller-Service Pattern**: Controllers handle HTTP req/res, while Services encapsulate business logic.
- **RESTful API Versioning**: All routes are prefixed with `/api/v1`.
- **Standardized Responses**: Consistent JSON format for success and errors.
- **Global Error Handling**: Centralized middleware for catching and formatting application errors.
