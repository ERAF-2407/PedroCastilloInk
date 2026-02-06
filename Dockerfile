# --- Etapa 1: Construcción del Frontend ---
FROM node:20-alpine AS client-builder
WORKDIR /app/client

# Copiar dependencias y construir
COPY client/package*.json ./
RUN npm install
COPY client/ ./
RUN npm run build

# --- Etapa 2: Construcción del Backend ---
FROM node:20-alpine AS server-builder
WORKDIR /app/server

# Copiar dependencias y construir
COPY server/package*.json ./
RUN npm install
COPY server/ ./
RUN npm run build

# --- Etapa 3: Imagen de Producción ---
FROM node:20-alpine AS production
WORKDIR /app

# Copiar dependencias de producción del servidor solamente
COPY server/package*.json ./
RUN npm install --only=production

# Copiar los builds de las etapas anteriores
# Estructura: /app/dist (servidor) y /app/client/dist (cliente)
COPY --from=server-builder /app/server/dist ./dist
COPY --from=client-builder /app/client/dist ./client/dist

# Variables de entorno por defecto
ENV NODE_ENV=production
ENV SERVERPORT=3000

# Exponer puerto y arrancar
EXPOSE 3000
CMD ["node", "dist/App.js"]