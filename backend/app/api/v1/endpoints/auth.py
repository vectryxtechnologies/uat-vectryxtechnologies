from fastapi import APIRouter, HTTPException, Request, status
from pymongo.errors import DuplicateKeyError
from app.core.security import create_access_token, hash_password, verify_password
from app.schemas.user import UserRegister, UserLogin, TokenResponse
from app.models.user import user_document

router = APIRouter()


@router.post("/register", status_code=status.HTTP_201_CREATED)
async def register(payload: UserRegister, request: Request):
    db = getattr(request.app.state, "db", None)
    if db is None:
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="Database connection unavailable",
        )

    users = db["users"]
    email = str(payload.email).lower().strip()
    if await users.find_one({"email": email}):
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Email already registered",
        )

    doc = user_document(email, hash_password(payload.password), payload.name)
    try:
        result = await users.insert_one(doc)
    except DuplicateKeyError:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Email already registered",
        )

    return {
        "id": str(result.inserted_id),
        "name": doc["name"],
        "email": doc["email"],
    }


@router.post("/login", response_model=TokenResponse)
async def login(payload: UserLogin, request: Request):
    db = getattr(request.app.state, "db", None)
    if db is None:
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="Database connection unavailable",
        )

    users = db["users"]
    email = str(payload.email).lower().strip()
    user = await users.find_one({"email": email})
    if not user or not verify_password(payload.password, user.get("password_hash", "")):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password",
        )

    token = create_access_token(str(user["_id"]))
    return {"access_token": token, "token_type": "bearer"}
