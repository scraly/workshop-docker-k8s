# backend

The app displays a whale ;-).

## Run locally

```
go run main.go
2022/03/01 09:56:21 Listening on localhost:8080
```

## Docker

Run locally:

```bash
docker build -t scraly/backend-docker:1.0.0 .
docker run -it -p 8080:8080 scraly/backend-docker:1.0.0
```

Login and push in the Docker Hub:

```bash
docker login
docker buildx build --push -t scraly/backend-docker:1.0.0 .
```
