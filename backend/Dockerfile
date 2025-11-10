FROM node:20-alpine

RUN apk add --no-cache wget

WORKDIR /app

COPY package.json ./

RUN npm install

COPY index.js ./
COPY reasons.json ./

EXPOSE 3000

ENV NODE_ENV=production

CMD ["npm", "start"]
