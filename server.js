import express from "express";
import cors from "cors";
import { config } from "./config.js";

const app = express()

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.status(200).json("Hello, it's Future Simple Hack API")
})

app.get("/ping", (req, res) => {
    res.status(200).json('Pong')
})



app.listen(config.PORT, () => console.log(`Server started on port ${config.PORT}`))