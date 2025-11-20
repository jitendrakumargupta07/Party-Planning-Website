import Event from "../models/Event.js"

export const getEvents = async (req, res) => {
  const events = await Event.find()
  res.json(events)
}

export const createEvent = async (req, res) => {
  const event = await Event.create(req.body)
  res.json(event)
}
