FROM node:lts-bullseye

WORKDIR /app
COPY . .

RUN npm install -g serve \
    && npm install \
    && npm run build

EXPOSE 8080

CMD ["serve", "-s", "dist", "-l", "8080"]