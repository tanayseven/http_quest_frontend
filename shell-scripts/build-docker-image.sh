#!/usr/bin/env bash
echo $DOCKER_API_KEY | docker login --username=$USERNAME --password-stdin
docker-compose build build || exit 1
docker-compose run build || exit 1
docker build --target=prod -t $USERNAME/http_quest_frontend . || exit 1
docker push $USERNAME/http_quest_frontend
