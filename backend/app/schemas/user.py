from pydantic import BaseModel, EmailStr, Field, ConfigDict
from datetime import datetime


class UserRegister(BaseModel):
    name: str = Field(min_length=2, max_length=80)
    email: EmailStr
    password: str = Field(min_length=8, max_length=72)


class UserLogin(BaseModel):
    email: EmailStr
    password: str = Field(min_length=8, max_length=72)


class UserPublic(BaseModel):
    id: str
    name: str
    email: EmailStr
    created_at: datetime | None = None
    model_config = ConfigDict(from_attributes=True)


class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
