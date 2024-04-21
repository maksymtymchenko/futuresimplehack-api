import mongoose from 'mongoose';

const OptionSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    option: {
        type: String,
        required: true
    },
    correct: {
        type: Boolean,
        required: true
    }
});

export default OptionSchema