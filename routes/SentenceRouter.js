import Router from 'express';

import SentenceController from '../controllers/SentenceController.js';

const sentenceRouter = Router();

sentenceRouter.get('/sentences', SentenceController.getAllSentences)
sentenceRouter.get('/sentences/:id', SentenceController.getOneSentence)
sentenceRouter.post('/sentences', SentenceController.createSentence)
sentenceRouter.put('/sentences/:id', SentenceController.updateSentence)
sentenceRouter.delete('/sentences/:id', SentenceController.deleteSentence)

export default sentenceRouter;