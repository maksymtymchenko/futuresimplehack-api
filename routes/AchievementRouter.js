import Router from 'express';

import AchievementController from '../controllers/AchievementController.js';

const achievementRouter = Router();

achievementRouter.get('/achievements', AchievementController.getAllAchievements)
achievementRouter.get('/achievements/:id', AchievementController.getOneAchievement)
achievementRouter.post('/achievements', AchievementController.createAchievement)
achievementRouter.put('/achievements/:id', AchievementController.updateAchievement)
achievementRouter.delete('/achievements/:id', AchievementController.deleteAchievement)

export default achievementRouter;