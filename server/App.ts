import express from "express";
import "dotenv/config";
import path from "path";
import compression from "compression";
import helmet from "helmet";
import cors from "cors";

const app = express();
const port = process.env.SERVERPORT || 3000;

// Middleware de optimización y seguridad
app.use(compression()); // Comprime las respuestas HTTP (gzip)
app.use(helmet({
  contentSecurityPolicy: false, // Desactivar CSP estricto para evitar conflictos con scripts de React/Vite en desarrollo
  crossOriginEmbedderPolicy: false,
}));
app.use(cors()); // Permite peticiones cruzadas (útil si separas dominios, pero buena práctica tenerlo configurado)
app.use(express.json());

// Servir archivos estáticos del Frontend (React build)
// Asume que has ejecutado 'npm run build' en la carpeta client y se generó 'dist'
const clientBuildPath = path.join(__dirname, "../client/dist");
app.use(express.static(clientBuildPath));

// Manejo de rutas SPA (Single Page Application)
// Cualquier ruta que no sea API devolverá el index.html para que React Router maneje la navegación
app.get("*", (req, res) => {
  res.sendFile(path.join(clientBuildPath, "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
