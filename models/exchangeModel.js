import mongoose from 'mongoose';


const exchangeSchema = mongoose.Schema({
    name: String,
    participants: {
        type: [],
        default: undefined
    },
    matches: {
        buyer: String,
        receiver: String
    }
}, {timestamps: true});


const Exchange = mongoose.model('Exchange', exchangeSchema);

export default Exchange;