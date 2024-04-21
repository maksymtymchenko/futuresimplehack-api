import Router from 'express';

import SentenceController from '../controllers/SentenceController.js';

const router = Router();

router.get('/sentences', SentenceController.getAllSentences)
router.get('/sentences/:id', SentenceController.getOneSentence)
router.post('/sentences', SentenceController.createSentence)
router.put('/sentences/:id', SentenceController.updateSentence)
router.delete('/sentences/:id', SentenceController.deleteSentence)

export default router;