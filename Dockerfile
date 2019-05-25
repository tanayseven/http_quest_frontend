FROM node:10 as build
WORKDIR /app
ADD . /app
RUN export CI=true \
    && npm install \
    && npm run build \
    && npm test

FROM nginx:1.15 as prod
COPY ./build/ /usr/share/nginx/html/
