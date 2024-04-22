import AchievementService from "../services/AchievementService.js";

class AchievementController {
    async createAchievement(req, res, next) {
        try {
            const achievement = await AchievementService.createAchievement(req.body);

            return res.json(achievement)
        } catch (e) {
            next(e)
        }
    }

    async getAllAchievements(req, res, next) {
        try {
            const achievements = await AchievementService.getAllAchievements();

            return res.json(achievements);
        } catch (e) {
            next(e)
        }

    }

    async getOneAchievement(req, res, next) {
        try {
            const achievement = await AchievementService.getOneAchievement(req.params.id);

            return res.json(achievement)
        } catch (e) {
            next(e)
        }
    }

    async updateAchievement(req, res, next) {
        try {
            const updatedAchievement = await AchievementService.updateAchievement(req.body);

            return res.json(updatedAchievement);
        } catch (e) {
            next(e)
        }
    }

    async deleteAchievement(req, res, next) {
        try {
            const achievement = await AchievementService.deleteAchievement(req.params.id);

            return res.json(achievement);
        } catch (e) {
            next(e)
        }
    }
}

export default new AchievementController();