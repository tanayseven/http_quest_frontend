FROM node:10 as build
WORKDIR /app
ADD . /app
RUN export CI=true \
    && npm install \
    && npm run build
CMD npm run build

FROM build as test
WORKDIR /app
ADD . /app
ENV CI=true
RUN npm i
RUN npm i -g react-scripts@3.3
CMD npm test


FROM nginx:1.15 as prod
COPY ./build/ /usr/share/nginx/html/
