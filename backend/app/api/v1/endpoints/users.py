from fastapi import APIRouter, Depends, HTTPException, Request, status
from app.dependencies.auth import get_current_user

router = APIRouter()


@router.get("/me")
async def get_me(current_user: dict = Depends(get_current_user)):
    """Return the profile of the currently authenticated user."""
    return {"success": True, "data": current_user}


@router.get("/")
async def get_users(
    request: Request,
    current_user: dict = Depends(get_current_user),
):
    """Protected endpoint: returns registered user list for authenticated requests."""
    db = getattr(request.app.state, "db", None)
    if db is None:
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="Database connection unavailable",
        )

    cursor = db["users"].find({}, {"name": 1, "email": 1, "created_at": 1}).limit(100)
    users = []
    async for user in cursor:
        users.append({
            "id": str(user["_id"]),
            "name": user.get("name"),
            "email": user.get("email"),
            "created_at": user.get("created_at"),
        })
    return {"success": True, "data": users}
