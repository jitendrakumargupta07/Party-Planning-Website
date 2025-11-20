import { useEffect, useState } from "react"
import axios from "axios"

export default function Packages() {
  const [events, setEvents] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/api/events").then(res => setEvents(res.data))
  }, [])

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {events.map(e => (
        <div key={e._id} className="p-4 shadow-lg border rounded-xl">
          <img className="w-full h-40 object-cover" src={e.image} />
          <h2 className="text-xl font-bold">{e.title}</h2>
          <p>{e.description}</p>
          <p className="font-bold">₹{e.price}</p>
        </div>
      ))}
    </div>
  )
}
