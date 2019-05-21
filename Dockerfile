FROM node:8 as build
WORKDIR /app
ADD . /app
RUN export CI=true \
    && npm run install \
    && npm run build \
    && npm test
CMD npm run build

FROM nginx:1.15 as prod
COPY ./view/build/ /usr/share/nginx/html/
