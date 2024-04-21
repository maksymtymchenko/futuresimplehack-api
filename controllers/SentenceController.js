import SentenceService from '../services/SentenceService.js';

class SentenceController {
    async createSentence(req, res, next) {
        try {
            const post = await SentenceService.createSentence(req.body);

            return res.json(post)
        } catch (e) {
            next(e)
            // res.status(500).json({error: e})
        }
    }

    async getAllSentences(req, res, next) {
        try {
            const posts = await SentenceService.getAllSentences();

            return res.json(posts);
        } catch (e) {
            next(e)
            // res.status(500).json({error: e})
        }

    }

    async getOneSentence(req, res, next) {
        try {
            const post = await SentenceService.getOneSentence(req.params.id);

            return res.json(post)
        } catch (e) {
            next(e)
            // res.status(500).json({error: e})
        }
    }

    async updateSentence(req, res, next) {
        try {
            const updatedPost = await SentenceService.updateSentence(req.body);

            return res.json(updatedPost);
        } catch (e) {
            // res.status(500).json({error: e})
            next(e)
        }
    }

    async deleteSentence(req, res, next) {
        try {
            const post = await SentenceService.deleteSentence(req.params.id);

            return res.json(post);
        } catch (e) {
            next(e)
            // res.status(500).json({error: e})
        }
    }

}

export default new SentenceController();




