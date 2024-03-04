# workshop-docker-k8s

* backend display docker whale

```
			##         .
			## ## ##        ==
		 ## ## ## ## ##    ===
		/"""""""""""""""""\___/ ===
		{                       /  ===-
		\______ O           __/
		 \    \         __/
		  \____\_______/
		

  		Hello from Docker!
```

* frontend call `backend:8080`

* network `my_network` thanks to that frontend and backend containers can communicate to each others

## Run the frontend and the backend in a network (to be able to communicate to each others)

```
$ docker compose up
```

Result:

```
$ docker container ls
CONTAINER ID   IMAGE                          COMMAND                  CREATED          STATUS         PORTS                                       NAMES
7ef1ddfe910a   scraly/frontend-docker:1.0.1   "docker-entrypoint.s…"   6 minutes ago    Up 4 seconds   0.0.0.0:8000->8000/tcp, :::8000->8000/tcp   frontend
e38eee67ef01   scraly/backend-docker:1.0.0    "/backend"               11 minutes ago   Up 4 seconds   0.0.0.0:8080->8080/tcp, :::8080->8080/tcp   backend

$ docker network ls
NETWORK ID     NAME                          DRIVER    SCOPE
d4076e9c12a8   bridge                        bridge    local
ee9ebd4bc549   host                          host      local
a0e43ad619a0   my_network                    bridge    local <-- the created network
5775177876e3   none                          null      local
ede275d67a80   workshop-docker-k8s_backend   bridge    local
```