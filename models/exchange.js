import mongoose, { mongo } from 'mongoose';
import participant from './participant.js';


const exchangeSchema = mongoose.Schema({
    name: String,
    participants: {
        type: [participant],
        default: undefined
    }
}, {timestamps: true});


mongoose.model('exchange', exchangeSchema);