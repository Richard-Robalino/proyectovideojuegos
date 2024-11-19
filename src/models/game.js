const API_URL = "https://tu-api-en-render.com/videojuegos";

const GameModel = {
    async getAllGameModel() {
        const peticion = await fetch(`${API_URL}`);
        const games = await peticion.json();
        return games;
    },
    async createGameModel(newGame) {
        const peticion = await fetch(`${API_URL}`, {
            method: "POST",
            body: JSON.stringify(newGame),
            headers: { "Content-Type": "application/json" }
        });
        const games = await peticion.json();
        return games;
    },
    async updateGameModel(gameID, updateGameModel) {
        const peticion = await fetch(`${API_URL}/${gameID}`, {
            method: "PUT",
            body: JSON.stringify(updateGameModel),
            headers: { "Content-Type": "application/json" }
        });
        const data = await peticion.json();
        return data;
    },
    async deleteGameModel(gameID) {
        const peticion = await fetch(`${API_URL}/${gameID}`, {
            method: "DELETE"
        });
        const data = await peticion.json();
        return data;
    },
    async readGameModel(gameID) {
        const peticion = await fetch(`${API_URL}/${gameID}`);
        const data = await peticion.json();
        return data;
    }
};
