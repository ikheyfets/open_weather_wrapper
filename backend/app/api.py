from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.weather import Forecast


app = FastAPI()

origins = [
    "http://localhost:3000",
    "localhost:3000"
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


@app.get("/", tags=["root"])
async def read_root(zip_code: str) -> dict:
    forecast = Forecast()
    print(zip_code)
    return forecast.get(zip_code=zip_code)