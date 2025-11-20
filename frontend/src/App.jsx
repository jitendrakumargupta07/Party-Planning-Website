import { useEffect, useState } from "react"
import axios from "axios"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import Packages from "./pages/Packages"
import Contact from "./pages/Contact"

function App() {
  return (
    <BrowserRouter>
      <nav className="p-4 bg-blue-500 text-white flex gap-5">
        <Link to="/">Home</Link>
        <Link to="/packages">Packages</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
