import mongoose, { mongo } from 'mongoose';
import Participant from './participantModel.js';


const exchangeSchema = mongoose.Schema({
    name: String,
    participants: {
        type: [Participant],
        default: undefined
    },
    matches: {
        buyer: String,
        receiver: String
    }
}, {timestamps: true});


mongoose.model('exchange', exchangeSchema);

module.exports = exchangeSchema;