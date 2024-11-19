import express from "express";
const app = express();

app.set("port", process.env.PORT || 3000);

// Configura tus rutas aquí
app.get("/", (req, res) => {
    res.send("Hola, este es el servidor Superchachiguachi");
});

// Exporta `app` en lugar de iniciar el servidor
export default app;
