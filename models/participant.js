import mongoose from 'mongoose';


const participantSchema = mongoose.Schema({
    name: String,
    email: {
        type: String,
        lowercase: true,
        required: [true, "can't be blank"],
        match: [/\S+@\S+\.\S+/, 'is invalid'],
        index: true
    }
}, {timestamps: true});


const participant = mongoose.model('participant', participantSchema);

export default participant;