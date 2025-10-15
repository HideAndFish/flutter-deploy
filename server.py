from fastapi import FastAPI, HTTPException
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
import os

app = FastAPI(
    docs_url=None,
    redoc_url=None,
    openapi_url=None
)

# app.mount("/", StaticFiles(directory="web"), name="root_web")
# app.mount("/assets", StaticFiles(directory="web/assets"), name="assets")

@app.get("/")
async def start():
    return FileResponse("web/index.html")

@app.get("/{full_path:path}")
async def serve_index(full_path: str):
    index_path = os.path.join("web", full_path)
    is_exist = os.path.exists(index_path)
    if not is_exist:
        raise HTTPException(status_code=404, detail="Not Found")
    return FileResponse(index_path)
