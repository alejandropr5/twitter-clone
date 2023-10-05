# from typing import Annotated
from fastapi_utils.cbv import cbv
from fastapi_utils.inferring_router import InferringRouter
from fastapi import HTTPException, status
from fastapi.responses import RedirectResponse
import requests


GITHUB_TOKEN_ENDPOINT = "https://github.com/login/oauth/access_token"
CLIENT_ID = "5b65a4ee4e9e984f6c1a"
CLIENT_SECRET = "11a4beac2fa8c67e23a91da5bcb2d907914413bd"


async def get_github_access_token(code: str):
    url_path = (f"{GITHUB_TOKEN_ENDPOINT}?client_id={CLIENT_ID}"
                f"&client_secret={CLIENT_SECRET}&code={code}")
    headers = {
        "Accept": "application/json"
    }
    response = requests.request(method="POST", url=url_path, headers=headers)

    try:
        data = response.json()
    except requests.exceptions.JSONDecodeError:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED)

    return data


router = InferringRouter()


@cbv(router)
class UsersController:
    @router.get("/login")
    async def login(self, code: str):
        data = await get_github_access_token(code)

        print("DEBUG:", data)
        return RedirectResponse("http://localhost:3000")
