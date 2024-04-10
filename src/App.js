import React from 'react'
import "./App.css"
import Main from './Components/Main.js'
import Navbar from './Components/Navbar.js'
import { Routes,Route } from 'react-router-dom'
import Home from "./home/Home.js"
import Video from './video/Video.js'
import Playvideo from './Components/play-video/Playvideo.js'
 const App = () => {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Playvideo' element={<Playvideo />}/>
      </Routes>
    </div>
  )
}
export default App;