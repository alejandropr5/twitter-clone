# from typing import Annotated
from fastapi_utils.cbv import cbv
from fastapi_utils.inferring_router import InferringRouter
from fastapi import Request, HTTPException, status
from fastapi.responses import RedirectResponse


router = InferringRouter()


async def get_model(request: Request):
    return request.app.state.model


@cbv(router)
class UsersController:
    @router.get("/hello_world")
    def hello_world(self):
        return "Hello World from UsersController"

    @router.get("/login")
    async def login(self, code: str | None = None):
        if code is None:
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,
                                detail="Code not provided")

        return RedirectResponse(f"http://localhost:3000?code={code}")
