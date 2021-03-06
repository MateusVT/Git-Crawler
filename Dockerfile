FROM node:12.13-slim
WORKDIR /usr/app
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]