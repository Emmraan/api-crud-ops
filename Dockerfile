FROM node:18

WORKDIR /app/opscrud

COPY ..

RUN npm install

CMD ["node", "index.js"]