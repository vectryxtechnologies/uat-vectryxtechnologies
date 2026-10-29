# Vectryx Backend API

Production-ready FastAPI backend with MongoDB, JWT Authentication, and OWASP security hardening.

## Features
- **FastAPI** with async endpoints and OpenAPI schema documentation
- **MongoDB** integration with connection pooling and unique indexing via Motor / PyMongo
- **Authentication**: JWT Bearer token authentication with password hashing using bcrypt
- **Security**:
  - OWASP defensive HTTP security headers (`X-Content-Type-Options`, `X-Frame-Options`, `X-XSS-Protection`, `Referrer-Policy`)
  - Configurable CORS origin whitelist
  - Strict input validation via Pydantic schemas
  - Protected endpoints requiring valid Bearer tokens
  - Non-root container execution
- **Containerization**: Production multi-stage `Dockerfile` and `docker-compose.yml`

## Local Development Setup

```powershell
# 1. Create and activate virtual environment
python -m venv .venv
.venv\Scripts\Activate.ps1

# 2. Install dependencies
pip install -r backend/requirements.txt

# 3. Environment configuration
Copy-Item backend/.env.example backend/.env

# 4. Start backend
cd backend
uvicorn app.main:app --reload
```

## Running with Docker Compose

```powershell
docker compose up -d --build
```

The API will be available at `http://localhost:8000`.
- Health check: `http://localhost:8000/health`
- Swagger UI (Development mode only): `http://localhost:8000/docs`

## API Endpoints

### Public Endpoints
- `GET /` - Root service status
- `GET /health` - Health check and MongoDB connectivity
- `POST /api/v1/auth/register` - Register a new user
- `POST /api/v1/auth/login` - Authenticate user and receive JWT access token

### Protected Endpoints (Requires `Authorization: Bearer <token>`)
- `GET /api/v1/users/me` - Get profile of the authenticated user
- `GET /api/v1/users/` - List users (authenticated access)
