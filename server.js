import 'dotenv/config';

import express from "express";
import mongoose from 'mongoose';
import cors from "cors";

import appRouter from "./routes/AppRouter.js";
import sentenceRouter from "./routes/SentenceRouter.js";
import dictionaryRouter from "./routes/DictionaryRouter.js";
import achievementRouter from "./routes/AchievementRouter.js";

import ErrorHandler from "./middlewares/ErrorHandler.js";

const app = express()

const PORT = process.env.PORT || 4444;

app.use(express.json())
app.use(cors())

app.use('/', appRouter)
app.use('/api', sentenceRouter)
app.use('/api', dictionaryRouter)
app.use('/api', achievementRouter)

app.use(ErrorHandler)

async function startServer() {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL);
        app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))
    } catch (e) {
        console.error(e);
    }
}


startServer()