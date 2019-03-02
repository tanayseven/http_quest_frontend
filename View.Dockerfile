FROM node:8 as dev
WORKDIR /app
ADD . /app
RUN export CI=true \
   && yarn install -D \
   && yarn test
CMD yarn build:dev \
   && yarn start

FROM nginx:1.15 as prod
COPY ./build/ /usr/share/nginx/html/

