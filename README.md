### 1. Pre-requisite
Depending of your Operating system, you will need to install Docker daemon and docker-compose.

### 2. Architecture
- Backend - NodeJS with Express framework as a javascript runtime for our backend service.
- Database - Mysql
- Frontend - Angular

Each sub-directory will have its own Dockerfile.

### 3. Build
To create the images and launch the containers, we just have to run the following command:
```bash
$ docker-compose up --build -d
```
Then, by using docker-compose, you can run your multi-container docker app and create links between services.

And to check the status of the containers, we have the following command:
```bash
$ docker container ps
```

You app is now running and you can access your frontend using `localhost:4200` and backend using `localhost:3000`