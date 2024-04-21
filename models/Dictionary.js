import mongoose from "mongoose";

const DictionarySchema = new mongoose.Schema({
    originalWord: {
        type: String,
        required: true
    },
    translatedWord: {
        type: String,
    }
});

export default mongoose.model('Dictionary', DictionarySchema)
