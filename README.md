# microservices

# Prerequirements
Before start the app, you should have (docker)[https://www.docker.com/]  and docker-compose installed.

# Installation
Run code below and do some curl operations from example 
```
docker-compose up
```

# cUrl example
```bash
curl localhost:3000/api/exp \
 -H "Content-Type: application/json" \
 --request POST \
--data '{"expressions": ["784*4","478-1"]}'
```
