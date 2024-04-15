import express from "express";
import cors from "cors";

import appRouter from "./routes/appRouter.js";
import { config } from "./config.js";

const app = express()

app.use(express.json())
app.use(cors())

app.use('/', appRouter)

app.listen(config.PORT, () => console.log(`Server started on port ${config.PORT}`))