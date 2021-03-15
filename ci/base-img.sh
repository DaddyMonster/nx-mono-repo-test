#!/bin/sh
echo BASE IMG BUILD SCRIPT START

ls

BASE_CONTAINER_NAME=nx-base-img

docker build . -t $BASE_CONTAINER_NAME
docker tag $BASE_CONTAINER_NAME engsparkapp/nx-test-base:latest
docker push engsparkapp/nx-test-base:latest
