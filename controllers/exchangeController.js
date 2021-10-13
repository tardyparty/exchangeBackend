import express from 'express';
import mongoose from 'mongoose';

import Exchange from '../models/exchangeModel.js';

const router = express.Router();

export const getExchanges = async (req, res) => {
    try {
        const exchanges = await Exchange.find();

        res.status(200).json(exchanges);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const getExchange = async (req, res) => {
    const { id } = req.params;

    try {
        const exchange = await Exchange.findById(id);

        res.status(200).json(exchange);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const createExchange = async (req, res) => {
    const { name, participants, matches } = req.body;

    const newExchange = new Exchange({ name, participants, matches });

    try {
        await newExchange.save();

        res.status(200).json(newExchange);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


export const updateExchange = async (req, res) => {
    const { id } = req.params;
    const { name, participants, matches } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No exchange with id: ${id}`);

    const updatedExchange = { name, participants, matches, _id: id };

    await Exchange.findByIdAndUpdate(id, updatedExchange, { new: true });

    res.json(updatedExchange);
}


export const deleteExchange = async ( req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No exchange with id: ${id}`);

    await Exchange.findByIdAndRemove(id);

    res.json({ message: "Exchange deleted successfully." });
}


export default router;