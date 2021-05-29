# FROM node:lts
# WORKDIR /usr/src/app
# COPY package*.json ./
# COPY server.js ./
# RUN npm install
# EXPOSE 8080
# CMD ["node", "server.js"]doce

FROM node:lts
WORKDIR /usr/src/app
COPY package*.json ./
COPY server.js ./
COPY public/ ./public
CMD [ "mkdir", "public" ]
RUN npm install
COPY public/ ./public
EXPOSE 3000
CMD [ "node", "server.js" ]