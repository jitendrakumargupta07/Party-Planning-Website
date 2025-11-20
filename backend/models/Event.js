import mongoose from "mongoose"

const EventSchema = new mongoose.Schema({
  title: String,
  price: Number,
  description: String,
  image: String
})

export default mongoose.model("Event", EventSchema)
