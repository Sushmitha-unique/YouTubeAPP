import React from 'react'
import "./App.css"
import Main from './Components/Main.js'
import Navbar from './Components/Navbar.js'
import { Routes,Route } from 'react-router-dom'
import Home from "./home/Home.js"
import Video from './video/Video.js'
 const App = () => {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </div>
  )
}
export default App;