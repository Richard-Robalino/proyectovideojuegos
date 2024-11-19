import express from 'express';
import { getAllTourControllers, createTourControllers, updateTourControllers, deleteTourControllers, readTourControllers } from '../controllers/tour_controller.js'; // Corrige el nombre del archivo de importación si es necesario

const router = express.Router();

router.get('/tours', getAllTourControllers); // Define la ruta GET para obtener todos los tours
router.post('/tours', createTourControllers); // Define la ruta POST para crear un nuevo tour
router.put('/tours/:id', updateTourControllers);
router.delete('/tours/:id', deleteTourControllers);
router.get('/tours/:id', readTourControllers);


export default router;

