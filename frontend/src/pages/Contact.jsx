import { useState } from "react"

export default function Contact() {
  const [name, setName] = useState("")
  const [msg, setMsg] = useState("")
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="p-6 max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input className="border p-2" placeholder="Name" value={name} onChange={e=>setName(e.target.value)} />
        <textarea className="border p-2" placeholder="Message" value={msg} onChange={e=>setMsg(e.target.value)} />
        <button className="bg-blue-500 text-white p-2">Submit</button>
      </form>
      {sent && <p className="text-green-600 mt-4">Message sent</p>}
    </div>
  )
}
