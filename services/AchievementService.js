import AchievementSchema from "../models/Achievement.js";

class AchievementService {
    async createAchievement(achievement) {
        const createdAchievement = await AchievementSchema.create(achievement);

        return createdAchievement;

    }

    async getAllAchievements() {
        const achievements = await AchievementSchema.find();

        return achievements;
    }

    async getOneAchievement(id) {
        if (!id) throw new Error("id not found")

        const achievement = await AchievementSchema.findById(id)

        return achievement;
    }

    async updateAchievement(achievement) {
        if (!achievement._id) throw new Error("id not found")

        const updatedAchievement = await AchievementSchema.findByIdAndUpdate(achievement._id, achievement, {new: true})

        return updatedAchievement;
    }

    async deleteAchievement(id) {
        if (!id) throw new Error("id not found")

        const achievement = await AchievementSchema.findByIdAndDelete(id);

        return achievement;
    }
}

export default new AchievementService();