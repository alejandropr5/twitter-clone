from fastapi_utils.cbv import cbv
from fastapi_utils.inferring_router import InferringRouter
from fastapi import Depends, HTTPException
from sqlalchemy.orm import Session

from src.sqlapp import crud, schemas
from src.sqlapp.database import SessionLocal


# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


router = InferringRouter()


@cbv(router)
class UsersController:
    @router.get("/", response_model=list[schemas.User])
    def read_users(self,
                   skip: int = 0,
                   limit: int = 100,
                   db: Session = Depends(get_db)):
        users = crud.get_users(db, skip=skip, limit=limit)
        return users

    @router.post("/", response_model=schemas.User)
    def create_user(self,
                    user: schemas.UserCreate,
                    db: Session = Depends(get_db)):
        db_user = crud.get_user_by_username(db, username=user.username)
        if db_user:
            raise HTTPException(status_code=400,
                                detail="Username already registered")
        return crud.create_user(db=db, user=user)

    @router.get("/{username}", response_model=schemas.User)
    def read_user(self, username: str, db: Session = Depends(get_db)):
        db_user = crud.get_user_by_username(db, username=username)
        if db_user is None:
            raise HTTPException(status_code=404, detail="User not found")
        return db_user

    @router.delete("/{username}")
    def delete_user(self, username: str, db: Session = Depends(get_db)):
        db_user = crud.get_user_by_username(db, username=username)
        if db_user is None:
            raise HTTPException(status_code=404, detail="User not found")
        crud.delete_user(db, user=db_user)
        return {"message": "User successfully deleted"}
