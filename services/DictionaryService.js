import DictionarySchema from "../models/Dictionary.js";

import { translateWord } from "../utils/translateWord.js"

class DictionaryService {
    async createDictionary(dictionary) {
        const { originalWord } = dictionary;

        const translatedWord = await translateWord(originalWord);

        const newDictionary = new DictionarySchema({
            originalWord: originalWord,
            translatedWord: translatedWord
        })

        await newDictionary.save();

        return newDictionary;
    }

    async getAllDictionaries() {
        const dictionaries = await DictionarySchema.find();

        return dictionaries;
    }

    async getOneDictionary(id) {
        if (!id) throw new Error("id not found")

        const dictionary = await DictionarySchema.findById(id)

        return dictionary;
    }

    async updateDictionary(dictionary) {
        if (!dictionary._id) throw new Error("id not found")

        const updatedDictionary = await DictionarySchema.findByIdAndUpdate(dictionary._id, dictionary, {new: true})

        return updatedDictionary;
    }

    async deleteDictionary(id) {
        if (!id) throw new Error("id not found")

        const dictionary = await DictionarySchema.findByIdAndDelete(id);

        return dictionary;
    }
}

export default new DictionaryService();