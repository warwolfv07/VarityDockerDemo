FROM node:alpine

WORKDIR /backend
COPY package.json .
COPY index.js .
RUN npm install

EXPOSE 3030
CMD ["npm", "start"]
