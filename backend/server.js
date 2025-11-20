import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
import eventRoutes from "./routes/events.js"

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

app.use("/api/events", eventRoutes)

mongoose.connect(process.env.MONGO_URL)
app.listen(5000)
