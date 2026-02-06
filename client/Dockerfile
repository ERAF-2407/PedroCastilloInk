# Etapa 1: Construcción (Build)
FROM node:20-alpine AS builder

WORKDIR /app

# Copiamos primero los package.json para aprovechar la caché de Docker
COPY package*.json ./
RUN npm install

# Copiamos el resto del código
COPY . .

# Recibimos la API Key como argumento de construcción
ARG VITE_API_KEY
ENV VITE_API_KEY=${VITE_API_KEY}

# Generamos los archivos estáticos en /app/dist
RUN npm run build

# Etapa 2: Servidor Web (Production)
FROM nginx:alpine

# Copiamos la configuración personalizada de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiamos solo los archivos compilados desde la etapa anterior
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]