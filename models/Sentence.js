import mongoose from "mongoose";

import OptionSchema from "./Option.js";

const SentenceSchema = new mongoose.Schema({
    sentence: {
        type: String,
        required: true
    },
    options: {
        type: [OptionSchema],
        required: true
    },
    url: {
        type: String,
    },
});

export default mongoose.model('Sentence', SentenceSchema)
