FROM node:latest

RUN mkdir -p /app/
WORKDIR /app

COPY ./ ./

RUN npm install
EXPOSE 3000
CMD ["npm","run","dev"]
