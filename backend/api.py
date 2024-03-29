import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers.github_controller import router as github_router
from routers.users_controller import router as users_router
from routers.session_controller import router as session_router

HOMEPAGE_URL = os.environ.get("HOMEPAGE_URL", "http://127.0.0.1:3000")
HOMEPAGE_LOCALHOST = os.environ.get("HOMEPAGE_URL", "http://localhost:3000")

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=[HOMEPAGE_URL, HOMEPAGE_LOCALHOST],
    allow_methods=["*"],
    allow_headers=["*"],
    allow_credentials=True,
)


@app.on_event("shutdown")
def shutdown_event():
    print("Shutting down the application...")


app.include_router(github_router, tags=["github"], prefix="/github")
app.include_router(users_router, tags=["users"], prefix="/users")
app.include_router(session_router, tags=["session"], prefix="/session")
