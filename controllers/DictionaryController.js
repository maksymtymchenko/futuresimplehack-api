import DictionaryService from '../services/DictionaryService.js';

class DictionaryController {
    async createDictionary(req, res, next) {
        try {
            const dictionary = await DictionaryService.createDictionary(req.body);

            return res.json(dictionary)
        } catch (e) {
            next(e)
        }
    }

    async getAllDictionaries(req, res, next) {
        try {
            const dictionaries = await DictionaryService.getAllDictionaries();

            return res.json(dictionaries);
        } catch (e) {
            next(e)
        }

    }

    async getOneDictionary(req, res, next) {
        try {
            const dictionary = await DictionaryService.getOneDictionary(req.params.id);

            return res.json(dictionary)
        } catch (e) {
            next(e)
        }
    }

    async updateDictionary(req, res, next) {
        try {
            const updatedDictionary = await DictionaryService.updateDictionary(req.body);

            return res.json(updatedDictionary);
        } catch (e) {
            next(e)
        }
    }

    async deleteDictionary(req, res, next) {
        try {
            const dictionary = await DictionaryService.deleteDictionary(req.params.id);

            return res.json(dictionary);
        } catch (e) {
            next(e)
        }
    }

}

export default new DictionaryController();




