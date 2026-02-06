# Pedro Castillo Ink - Tattoo Studio

Sitio web profesional para el estudio de tatuajes de Pedro Castillo, especializado en realismo y sombras.

## 🚀 Características

- **Frontend:** React + Vite + Tailwind CSS (Diseño moderno y responsivo).
- **Backend:** Node.js + Express (Servidor optimizado con compresión y seguridad).
- **Infraestructura:** Dockerizado para fácil despliegue.

## 🛠️ Ejecutar Localmente (Desarrollo)

**Prerrequisitos:** Node.js v20+

1. Instalar dependencias en la raíz (esto instalará tanto cliente como servidor):
   ```bash
   npm install
   ```

2. Ejecutar en modo desarrollo:
   ```bash
   # En una terminal (Backend)
   npm run dev:server
   
   # En otra terminal (Frontend)
   cd client && npm run dev
   ```

## 🐳 Despliegue con Docker (Producción)

El proyecto está configurado para compilarse y servirse como una sola unidad optimizada.

1. **Construir y levantar el contenedor:**
   ```bash
   docker compose up --build -d
   ```

2. **Ver el sitio:**
   Abre tu navegador en `http://localhost:3000`.

3. **Para detener:**
   ```bash
   docker compose down
   ```

## 📁 Estructura del Proyecto

- `/client`: Código fuente del Frontend (React).
- `/server`: Código fuente del Backend (Express).
- `Dockerfile`: Configuración multi-etapa para construir la imagen de producción.
