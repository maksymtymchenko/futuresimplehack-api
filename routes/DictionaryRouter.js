import Router from 'express';

import DictionaryController from '../controllers/DictionaryController.js';

const dictionaryRouter = Router();

dictionaryRouter.get('/dictionaries', DictionaryController.getAllDictionaries)
dictionaryRouter.get('/dictionaries/:id', DictionaryController.getOneDictionary)
dictionaryRouter.post('/dictionaries', DictionaryController.createDictionary)
dictionaryRouter.put('/dictionaries/:id', DictionaryController.updateDictionary)
dictionaryRouter.delete('/dictionaries/:id', DictionaryController.deleteDictionary)

export default dictionaryRouter;