#!/bin/sh

nx run test-nest:build --prod
cd dist/apps/test-nest
npx add-dependencies graphql reflect-metadata pg @nestjs/core @nestjs/platform-express apollo-server-express rxjs


#ENVS
NEST_CONTAINER_NAME=test-nest
GCR_PATH=gcr.io/$GC_PROJECT_ID/$NEST_CONTAINER_NAME:latest
REGION=$GC_REGION
SERVICE=$NEST_CONTAINER_NAME

echo ${GC_PROJECT_ID}
echo ${NEST_CONTAINER_NAME}
echo ${GCR_PATH}


cp ../../../apps/test-nest/test-nest.Dockerfile .
docker build -t . $NEST_CONTAINER_NAME -f ./test-nest.Dockerfile
docker tag $NEST_CONTAINER_NAME $GCR_PATH

docker push $GCR_PATH
echo "NEST SERVER DOCKER IMAGE PUSHED TO REPO"
gcloud components install beta --quiet

gcloud beta run deploy $SERVICE --image $GCR_PATH --project $GC_PROJECT_ID --platform managed --region $REGION --allow-unauthenticated --update-env-vars=$TEST_NEST_SECRETS
