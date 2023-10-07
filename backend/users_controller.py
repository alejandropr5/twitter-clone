from typing import Annotated
from fastapi_utils.cbv import cbv
from fastapi_utils.inferring_router import InferringRouter
from fastapi import Cookie, Response
import logging

logging.basicConfig(level=logging.DEBUG,
                    format="%(levelname)s:\t\t%(message)s")

CookieParam = Annotated[str | None, Cookie()]

router = InferringRouter()


@cbv(router)
class UsersController:
    @router.get("/session")
    async def session(self, access_token: CookieParam = None):
        logging.debug(f"access_token: {access_token}")
        session = access_token is not None
        return {"session": session}

    @router.get("/logout")
    async def logout(self, response: Response):
        response.delete_cookie("access_token")
