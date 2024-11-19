//el punto de arranque de todo el web server
import app from "../server.js";

export default async function handler(req, res) {
    await app(req, res);
}

/*app.listen(app.get("port"), () => {
    console.log(`Servidor Superchachiguachi encendido en el puerto ${app.get("port")}`);
});*/
