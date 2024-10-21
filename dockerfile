FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --production

COPY . .

RUN npm run build

EXPOSE 8008


CMD ["node", "server.js"]

