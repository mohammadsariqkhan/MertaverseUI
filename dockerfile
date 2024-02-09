FROM node:latest

RUN mkdir -p /app/
WORKDIR /app

COPY ./ ./

RUN npm install -y
EXPOSE 3000
CMD ["npm","run","dev"]
