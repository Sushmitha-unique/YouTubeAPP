import React,{useContext} from 'react'
import home from "../assets/home.png"
import game from "../assets/game_icon.png"
import automobile from "../assets/automobiles.png"
import sport from "../assets/sports.png"
import entertainment from "../assets/entertainment.png"
import tech from "../assets/tech.png"
import music from "../assets/music.png"
import blog from "../assets/blogs.png"
import news from "../assets/news.png"
import jack from "../assets/jack.png"
import simon from "../assets/simon.png"
import tom from "../assets/tom.png"
import megan from "../assets/megan.png"
import cameron from "../assets/cameron.png"
import "./Sidebar.css"
import Navcontext from './context/Navcontext'
const Sidebar = () => {
    const sidechange =useContext(Navcontext)
    console.log("sidebar",sidechange)
  return (
    <div className={`sidebar${sidechange?"":"small-sidebar"}`}>
        <div className='side'>
        <div className='sidelink'>
            <img src={home} alt='home'/>
            <p>Home</p>
        </div>
        <div className='sidelink'>
            <img src={game} alt='game'/>
            <p>Game</p>
        </div>
        <div className='sidelink'>
            <img src={automobile} alt='automobile'/>
            <p>Automobile</p>
        </div>
        <div className='sidelink'>
            <img src={sport} alt='sport'/>
            <p>Sport</p>
        </div>
        <div className='sidelink'>
            <img src={entertainment} alt='entertainment'/>
            <p>Entertainment</p>
        </div>
        <div className='sidelink'>
            <img src={tech} alt='tech'/>
            <p>Tech</p>
        </div>
        <div className='sidelink'>
            <img src={music} alt='music'/>
            <p>Music</p>
        </div>
        <div className='sidelink'>
            <img src={blog} alt='blog'/>
            <p>Blog</p>
        </div>
        <div className='sidelink'>
            <img src={news} alt='news'/>
            <p>News</p>
            </div>
        </div>
        <hr/>
        <div className='subscription'>
            <h3>Subcription</h3>
        <div className='sidelink'>
            <img src={jack} alt='jack'/>
            <p>Jack sipligans</p>
        </div>
        <div className='sidelink'>
            <img src={simon} alt='simon'/>
            <p>Swetha Arora</p>
        </div>
        <div className='sidelink'>
            <img src={tom} alt='tom'/>
            <p>Rahul Tom</p>
        </div>
        <div className='sidelink'>
            <img src={megan} alt='megan'/>
            <p>Megan</p>
        </div>
        <div className='sidelink'>
            <img src={cameron} alt='cameron'/>
            <p>cameron</p>
        </div>
        </div>
    </div>
  )
}

export default Sidebar;