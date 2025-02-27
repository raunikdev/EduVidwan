from fastapi import FastAPI
from pydantic import BaseModel

class INPUT(BaseModel):
    age : int
    sex : str

appPUT = FastAPI()

@appPUT.put("/predict")
def predict_model(d:INPUT):
    if d.age > 18 and d.sex=='F':
        return {"survived" : 1} 
    else:
        return {"survived" : 0}