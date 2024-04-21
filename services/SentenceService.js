import SentenceSchema from "../models/Sentence.js";

class SentenceService {
    async createSentence(sentence) {
        const createdSentence = await SentenceSchema.create(sentence);

        return createdSentence;
    }

    async getAllSentences() {
        const sentences = await SentenceSchema.find();

        return sentences;
    }

    async getOneSentence(id) {
        if (!id) throw new Error("id not found")

        const sentence = await SentenceSchema.findById(id)

        return sentence;
    }

    async updateSentence(sentence) {
        if (!sentence._id) throw new Error("id not found")

        const updatedSentence = await SentenceSchema.findByIdAndUpdate(sentence._id, sentence, {new: true})

        return updatedSentence;
    }

    async deleteSentence(id) {
        if (!id) throw new Error("id not found")

        const sentence = await SentenceSchema.findByIdAndDelete(id);

        return sentence;
    }
}

export default new SentenceService();