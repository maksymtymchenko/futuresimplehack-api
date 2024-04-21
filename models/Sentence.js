import mongoose from "mongoose";

import Option from "./types/Option.js";

const SentenceSchema = new mongoose.Schema({
    sentence: {
        type: String,
        required: true
    },
    options: {
        type: [Option],
        required: true
    },
    url: {
        type: String,
    },
});

export default mongoose.model('Sentence', SentenceSchema)
