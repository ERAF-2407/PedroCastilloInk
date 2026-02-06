FROM node:20-alpine

WORKDIR /app

# Copiamos dependencias
COPY package*.json ./
RUN npm install

# Copiamos el código fuente
COPY . .

EXPOSE 3001

CMD ["npm", "start"]