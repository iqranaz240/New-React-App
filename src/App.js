import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Abouts from './components/Abouts'
import Contact from './components/Contact'

function App() {
  return (
    <div>
      <Router>
      <div className="list">
                    <ul style={{backgroundColor: 'blue'}}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="about">About</Link></li>
                        <li><Link to="contact">Contact</Link></li>
                    </ul>
                </div>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="about" element={<Abouts/>} />
          <Route exact path="contact" element={<Contact/>} />
        </Routes>
        
      </Router>
    </div>
  )
}

export default App