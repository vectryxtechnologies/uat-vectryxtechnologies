# Vectryx

Vectryx is a modern full-stack platform featuring a hardened FastAPI backend, MongoDB integration, and secure JWT authentication.

## Project Structure

```
Vectryx/
├── backend/
│   ├── app/
│   │   ├── api/v1/endpoints/  # Route controllers (auth, users)
│   │   ├── core/              # Security and environment configuration
│   │   ├── database/          # MongoDB lifecycle and connection handling
│   │   ├── dependencies/      # Auth and permission dependencies
│   │   ├── models/            # Database documents
│   │   ├── schemas/           # Pydantic request/response schemas
│   │   └── main.py            # FastAPI application entrypoint
│   ├── tests/                 # Async test suite
│   ├── Dockerfile             # Multi-stage production container
│   ├── Procfile               # Cloud deployment descriptor
│   └── requirements.txt       # Python dependencies
├── docker-compose.yml         # Container orchestration for backend & MongoDB
└── README.md
```

## Quick Start (Docker)

```bash
docker compose up -d --build
```

- API Base: `http://localhost:8000`
- Health Check: `http://localhost:8000/health`
- Interactive API Docs (Dev): `http://localhost:8000/docs`

For detailed local setup and environment configuration, refer to [backend/README.md](file:///d:/PROJECTS/Vectryx/backend/README.md).
