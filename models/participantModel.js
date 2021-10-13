import mongoose from 'mongoose';


const participantSchema = mongoose.Schema({
    name: String,
    email: {
        type: String,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, 'is invalid'],
        index: true
    },
    exclusions: [],
    match: {
        name: String,
        year: Number
    }
}, {timestamps: true});


const Participant = mongoose.model('participant', participantSchema);

export default Participant;