import express from "express";

import router from "./src/routers/game_routes.js";
import cors from "cors";
app.use(cors());
import dotenv from "dotenv";
dotenv.config();


// Inicializaciones

const app = express();

app.set("port", process.env.PORT || 3000);

// Configura tus rutas aquí
app.get("/", (req, res) => {
    res.send("Hola, este es el servidor Superchachiguachi");
});

// Exporta `app` en lugar de iniciar el servidor
export default app;
