const tourModel ={

     async getAllToursModel() { //creamos un modelo que se conecta a la base de datos y nos da una respuesta a la petición
        const peticion= await fetch("http://localhost:4000/tours")
        const tours = await peticion.json()
        return tours
    },
    async createTourModel(newTour) { //creamos un modelo que se conecta a la base de datos y nos da una respuesta a la petición
        const url = "http://localhost:4000/tours"
        //const peticion= await fetch("http://localhost:4000/tours")
        const peticion = await fetch(url, {
            method: "POST",
            body: JSON.stringify(newTour),
            headers: {"Content-Type": "application/json",}
        })
        const tours = await peticion.json()
        console.log(tours)
        return tours
    },

    async updateTourModel(tourId, updateTourModel){
        //Conexión con la base de datos
        const url = `http://localhost:4000/tours/${tourId}`
        //Envio de la petición a bdd
        const peticion = await fetch(url, {
            method: "PUT",
            body: JSON.stringify(updateTourModel),
            headers: {"Content-Type": "application/json",}
        })
        //Obtener la respuesta
        const data = await peticion.json()
        //Mandar la respuesta al controlador
        return data
    },
    async deleteTourModel(tourId){
        const url = `http://localhost:4000/tours/${tourId}`
        const peticion = await fetch(url, {
            method: "DELETE",
        })
        const data = await peticion.json()
        return data
    },

    //Ahora necesito hacer el read pero solo de un tour con el id ta
    async readTourModel(tourId){
        const peticion = await fetch(`http://localhost:4000/tours/${tourId}`)
        const data = await peticion.json()
        return data
    }

}


export default tourModel