import express from "express";
import mongoose from 'mongoose';
import cors from "cors";

import appRouter from "./routes/appRouter.js";
import sentenceRouter from "./routes/SentenceRouter.js";
import ErrorHandler from "./middlewares/ErrorHandler.js";
import { config } from "./config.js";

const app = express()

app.use(express.json())
app.use(cors())

app.use('/', appRouter)
app.use('/api', sentenceRouter)

app.use(ErrorHandler)

async function startServer() {
    try {
        await mongoose.connect(config.MONGO_URL);
        app.listen(config.PORT, () => console.log(`Server is running on port: ${config.PORT}`))
    } catch (e) {
        console.error(e);
    }
}


startServer()