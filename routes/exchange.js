import express from 'express';
import { getParticipants } from '../controllers/exchange.js';

const router = express.Router();

router.get('/', getParticipants);

export default router;