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
ENV PATH /app/node_modules/.bin/:$PATH
RUN ls -lart
CMD npm test


FROM nginx:1.15 as prod
COPY ./build/ /usr/share/nginx/html/
