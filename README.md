# RUN COMMANDS

- Development (hot reload)

```sh
docker-compose down app
docker-compose up app --force-recreate
```

- Production (built + Nginx)

```sh
docker-compose down nginx
docker-compose up nginx --force-recreate
```

# DOCKER DATA CLEAR
- docker stop $(docker ps -aq)
- docker rm -f $(docker ps -aq)
- docker rmi -f $(docker images -aq)
- docker volume rm $(docker volume ls -q)
- docker network rm $(docker network ls -q)