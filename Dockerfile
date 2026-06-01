FROM python:3.11-slim

ENV PYTHONUNBUFFERED=1 \
    PIP_NO_CACHE_DIR=1 \
    CARGO_HOME=/root/.cargo \
    RUSTUP_HOME=/root/.rustup \
    PATH=/root/.cargo/bin:$PATH

RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential curl ca-certificates gcc libssl-dev pkg-config git \
    && rm -rf /var/lib/apt/lists/*

RUN curl https://sh.rustup.rs -sSf | sh -s -- -y \
    && /root/.cargo/bin/rustup default stable || true

RUN python -m pip install --upgrade pip setuptools wheel

WORKDIR /app

COPY backend-fastapi/requirements.txt /app/requirements.txt
RUN pip install -r /app/requirements.txt

COPY backend-fastapi /app

EXPOSE 5000
ENV PORT=5000
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "5000"]
