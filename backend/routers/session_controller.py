from typing import Annotated
from fastapi_utils.cbv import cbv
from fastapi.security import OAuth2PasswordBearer
from fastapi_utils.inferring_router import InferringRouter
from fastapi import Cookie, Response

from src.sqlapp.database import SessionLocal
from src.sqlapp import schemas

CookieParam = Annotated[str | None, Cookie()]
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


router = InferringRouter()


@cbv(router)
class SessionController:
    @router.get("/")
    async def session(self, access_token: CookieParam = None):
        session = access_token is not None
        return {"session": session}

    @router.delete("/")
    async def logout(self, response: Response):
        response.delete_cookie("access_token")

    @router.post("/sign_up")
    async def sign_up(self, body: schemas.UserCreate):
        print(body)
        return body
