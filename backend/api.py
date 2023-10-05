from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from users_controller import router as users_router

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
    allow_credentials=True,
)


@app.on_event("shutdown")
def shutdown_event():
    print("Shutting down the application...")


app.include_router(users_router, tags=["users"], prefix="/users")
