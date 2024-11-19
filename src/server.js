//Configuraciones para el servidor
// Requerir módulos
//importamos express

import express from "express";
import router from "./routers/game_routes.js";
import cors from "cors";
app.use(cors());
import dotenv from "dotenv";
dotenv.config();


// Inicializaciones
const app = express();

// Variables
app.set("port", process.env.PORT || 3000);

//Middlewares
app.use(express.json());

//Rutas
app.get("/", (req, res) => {
    res.send("Server ON");
});
app.use("/api",router);

//exportar la variable app
export default app;

