from datetime import datetime, timezone
from typing import Any


def user_document(email: str, password_hash: str, name: str) -> dict[str, Any]:
    """Build a MongoDB user document. Never store a plaintext password."""
    return {
        "email": email.lower().strip(),
        "name": name.strip(),
        "password_hash": password_hash,
        "created_at": datetime.now(timezone.utc),
    }
