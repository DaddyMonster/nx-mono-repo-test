#!/bin/sh
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
nx run test-next:build --prod
cd dist/apps/test-next
npx add-dependencies graphql @emotion/react @emotion/styled
#ENVS
NEXT_CONTAINER_NAME=test-next
GCR_PATH=gcr.io/$GC_PROJECT_ID/$NEXT_CONTAINER_NAME:latest
REGION=$GC_REGION
SERVICE=$NEXT_CONTAINER_NAME

echo ${GC_PROJECT_ID}
echo ${NEXT_CONTAINER_NAME}
echo ${GCR_PATH}


cp ../../../apps/test-next/Dockerfile .

docker build . -t $NEXT_CONTAINER_NAME
docker tag $NEXT_CONTAINER_NAME $GCR_PATH

docker push $GCR_PATH

echo "NEXT CLINT DOCKER IMAGE PUSHED TO REPO"
gcloud components install beta --quiet
gcloud beta run deploy $SERVICE --image $GCR_PATH --project $GC_PROJECT_ID --platform managed --region $REGION --allow-unauthenticated
