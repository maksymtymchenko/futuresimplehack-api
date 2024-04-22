import mongoose from "mongoose";

const AchievementSchema = new mongoose.Schema({
    finishedLessons: {
        type: Number,
        required: true
    },
    learntWords: {
        type: Number,
        required: true
    },
    finishedProgram: {
        type: Number,
        required: true
    },
    spentHours: {
        type: Number,
        required: true
    },
    lastMark: {
        type: Number,
        required: true
    },
    averageMark: {
        type: Number,
        required: true
    },
});

export default mongoose.model('Achievement', AchievementSchema)
