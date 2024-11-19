import tourModel from "../models/tour.js"
import { v4 as uuidv4 } from 'uuid';

const getAllTourControllers = async (req, res) => {
    const tours = await tourModel.getAllToursModel ()//cada ves que retorne una promesa ponemos un await y un async
    res.status(200).json(tours)
}

const createTourControllers = async (req, res) => { 
    const newTourData ={ //aqui se genera el tour que vamos a registrar
        id: uuidv4(), //aqui se genera el id
        ...req.body //aqui se recibe el body
    } //aqui se envia el tour
    try {
        const tour = await tourModel.createTourModel(newTourData) //aqui se crea el tour
        res.status(201).json(tour) //aqui se envia el tour
    } catch (error) { //aqui se maneja el error
        res.status(500).json(error) //aqui se envia el error
    }
}

const updateTourControllers = async (req, res) => {
    const {id} = req.params
    try {
        const tour = await tourModel.updateTourModel(id, req.body) //aqui se actualiza el tour
        res.status(200).json(tour) //aqui se envia el tour
    } catch (error) { //aqui se maneja el error
        res.status(500).json(error ) //aqui se envia el error
    }
}

const deleteTourControllers = async (req, res) => {
    const {id} = req.params
    try {
        const tour = await tourModel.deleteTourModel(id) //aqui se elimina el tour
        res.status(200).json({msg: "Lo conseguiste, lo eliminaste, lo borraste... Estas feliz?", tour}) //aqui se envia el tour
    } catch (error) { //aqui se maneja el error
        res.status(500).json({msg: "Para bien o para mal, fallaste al tratar de eliminar las cosas", error

        }) //aqui se envia el error
    }
}

const readTourControllers = async (req, res) => {
    const {id} = req.params
    try {
        const tour = await tourModel.readTourModel(id) //aqui se lee el tour
        res.status(200).json(tour) //aqui se envia el tour
    } catch (error) { //aqui se maneja el error
        res.status(500).json(error) //aqui se envia el error
    }
}

export {getAllTourControllers,
    createTourControllers,
    updateTourControllers,
    deleteTourControllers,
    readTourControllers
}
