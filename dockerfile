FROM node:21-alpine
RUN apk add --no-cache git
RUN mkdir -p /buu_web_app
COPY . /buu_web_app
WORKDIR /buu_web_app

RUN yarn install
RUN yarn build
EXPOSE 3000
CMD ["yarn","start"]    