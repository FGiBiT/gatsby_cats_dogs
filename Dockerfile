FROM node:14.16.0

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -g gatsby

COPY . .

EXPOSE 8000

CMD ["npm", "start"]