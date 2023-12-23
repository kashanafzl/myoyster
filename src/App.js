import React from 'react'
import './App.css'

// react Rounting
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import Mainsection from './Components/LandingPage/Mainsection';


export default function App() {
  return (
    <div>

      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/landingpage' element={<Mainsection />} />
        </Routes>
      </Router>

    </div>
  )
}
