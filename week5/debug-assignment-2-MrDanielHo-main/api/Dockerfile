FROM node:jod-alpine
WORKDIR /app
COPY package*.json /app
RUN npm install
COPY . /app
ENV PORT=3000
ENV DB_URL=postgres
ENV DB_HOST=snacks-db
ENV DB_NAME=snacks
ENV DB_PASSWORD=docker
ENV DB_PORT=5432
EXPOSE 3000
RUN npm run setup-db
CMD ["node", "server/index.js"]