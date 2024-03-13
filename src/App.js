import React from 'react'
import Navbar from './components/Navbar'
import "../src/App.css"
import { Route, Routes } from 'react-router-dom'
import About from './components/Pages/About'
import Service from './components/Pages/Service'
import Contact from './components/Pages/Contact'


function App() {
  return (
    <div className="App">
    <Navbar />
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </div>
  )
}

export default App