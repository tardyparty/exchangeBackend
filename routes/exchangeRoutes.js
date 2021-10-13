import express from 'express';
import { 
    getExchanges,
    getExchange,
    createExchange,
    updateExchange,
    deleteExchange
    } from '../controllers/exchangeController.js';


const router = express.Router();

router.get('/', getExchanges);
router.post('/', createExchange);
router.get('/:id', getExchange);
router.patch('/:id', updateExchange);
router.delete('/:id', deleteExchange);

export default router;