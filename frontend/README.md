# Frontend

HTTP server with Node.

Goal:
- create the DockerFile
- Build an image
- Run the container
- Tag and push an image in the private registry

## Docker

Run locally:

```bash
docker build -t scraly/frontend-docker:1.0.0 .
docker run -it -p 8000:8000 scraly/frontend-docker:1.0.0
```

Push image to the registry:

```bash
docker login
docker buildx build --push -t scraly/frontend-docker:1.0.0 .
```