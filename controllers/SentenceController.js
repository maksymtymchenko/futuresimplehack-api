import SentenceService from '../services/SentenceService.js';

class SentenceController {
    async createSentence(req, res, next) {
        try {
            const sentence = await SentenceService.createSentence(req.body);

            return res.json(sentence)
        } catch (e) {
            next(e)
        }
    }

    async getAllSentences(req, res, next) {
        try {
            const sentences = await SentenceService.getAllSentences();

            return res.json(sentences);
        } catch (e) {
            next(e)
        }

    }

    async getOneSentence(req, res, next) {
        try {
            const sentence = await SentenceService.getOneSentence(req.params.id);

            return res.json(sentence)
        } catch (e) {
            next(e)
        }
    }

    async updateSentence(req, res, next) {
        try {
            const updatedSentence = await SentenceService.updateSentence(req.body);

            return res.json(updatedSentence);
        } catch (e) {
            next(e)
        }
    }

    async deleteSentence(req, res, next) {
        try {
            const sentence = await SentenceService.deleteSentence(req.params.id);

            return res.json(sentence);
        } catch (e) {
            next(e)
        }
    }

}

export default new SentenceController();




