# Use official Python 3.12 slim image as base
FROM python:3.13-bookworm

# Set work directory inside container
WORKDIR /app

# Copy pyproject.toml and uv.lock for dependencies
COPY pyproject.toml /app/

# Install build dependencies
RUN apt-get update && apt-get install -y build-essential 

# Install pip, poetry or other build system might be needed, but since pyproject has dependencies, use pip to install fastapi-cli uv etc.
RUN pip install --upgrade pip

# Install dependencies declared in pyproject.toml through pip (fastapi-cli is installed via pip fallback)
RUN pip install uv

RUN uv sync

# Copy application code
COPY . .

CMD ["uv","run","uvicorn", "server:app", "--host", "0.0.0.0", "--port", "8000"]
