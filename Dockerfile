FROM node:15.0.0-alpine3.10
WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn
COPY . .
EXPOSE 9000
CMD ["yarn", "start:prod"]
