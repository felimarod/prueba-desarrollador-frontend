FROM node:18-alpine as deploy

WORKDIR /app

RUN npm install -g npm@10.2.5

COPY package*.json /app
RUN npm install

# EXPOSE 5173/tcp

COPY . /app
RUN echo "VITE_BACKEND_URL=http://localhost:5000/api/tutorial" > .env

RUN ["npm", "run", "build"]

FROM httpd:alpine AS final

WORKDIR /usr/local/apache2/htdocs

COPY --from=deploy --chown=www-html:www-html /app/dist/ .
