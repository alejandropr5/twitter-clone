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


# @app.on_event("startup")
# def load_model():
#     """This function will run once
#     when the application starts up"""
#     print("Loading the model...")
#     framework = Framework.sklearn
#     model = ModelLoader(
#         path=models_path[framework.value],
#         framework=framework,
#         labels=["setosa", "versicolor", "virginica"],
#         name="iris_model",
#         version=1.0,
#     )
#     print("model loaded successfully!")
#     app.state.model = model


@app.on_event("shutdown")
def shutdown_event():
    print("Shutting down the application...")


app.include_router(users_router, tags=["users"], prefix="/users")


@app.get("/hello_world")
def hello_world():
    return {"message": "Hello World from the API"}
