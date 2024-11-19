import express from "express";
<<<<<<< HEAD
import router from "./routers/game_routes.js";
import cors from "cors";
app.use(cors());
import dotenv from "dotenv";
dotenv.config();


// Inicializaciones
=======
>>>>>>> ad108be6f1c135417be444da8ef17bad354e81eb
const app = express();

app.set("port", process.env.PORT || 3000);

// Configura tus rutas aquí
app.get("/", (req, res) => {
    res.send("Hola, este es el servidor Superchachiguachi");
});

// Exporta `app` en lugar de iniciar el servidor
export default app;
