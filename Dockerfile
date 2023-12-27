FROM node:18-alpine as deploy

WORKDIR /app

RUN npm install -g npm@10.2.5

COPY package*.json /app
RUN npm install

COPY . .
RUN echo "VITE_BACKEND_URL=http://backend:8000/api/tutorial" > .env

EXPOSE 5173/tcp

RUN ["npm", "run", "build"]

FROM httpd:alpine AS final

COPY --from=deploy --chown=www-html:www-html /app/dist/ /usr/local/apache2/htdocs
