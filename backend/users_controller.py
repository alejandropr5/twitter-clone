# from typing import Annotated
from fastapi_utils.cbv import cbv
from fastapi_utils.inferring_router import InferringRouter
from fastapi import HTTPException, status, Request
from fastapi.responses import RedirectResponse
import requests

import logging

logging.basicConfig(level=logging.DEBUG,
                    format="\n[%(levelname)s] %(asctime)s: %(message)s")


class GitHub():
    TOKEN_ENDPOINT = "https://github.com/login/oauth/access_token"
    USER_ENDPOINT = "https://api.github.com/user"
    CLIENT_ID = "5b65a4ee4e9e984f6c1a"
    CLIENT_SECRET = "11a4beac2fa8c67e23a91da5bcb2d907914413bd"


async def get_github_access_token(code: str):
    url_path = (f"{GitHub.TOKEN_ENDPOINT}?client_id={GitHub.CLIENT_ID}"
                f"&client_secret={GitHub.CLIENT_SECRET}&code={code}")
    headers = {
        "Accept": "application/json"
    }
    response = requests.request(method="POST",
                                url=url_path,
                                headers=headers)
    try:
        data = response.json()
    except requests.exceptions.JSONDecodeError:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED)

    return data


async def get_github_user_data(token: dict):
    headers = {
        "Authorization": f"{token['token_type']} {token['access_token']}"
    }
    response = requests.request(method="GET",
                                url=GitHub.USER_ENDPOINT,
                                headers=headers)
    # try:
    data = response.json()
    # except requests.exceptions.JSONDecodeError:
    #     raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED)

    return data


router = InferringRouter()


@cbv(router)
class UsersController:
    @router.get("/github_login")
    async def github_login(self, code: str, request: Request):
        token = await get_github_access_token(code)
        user_data = await get_github_user_data(token)

        logging.debug(token)
        logging.debug(user_data)

        return RedirectResponse(request.headers["referer"])
