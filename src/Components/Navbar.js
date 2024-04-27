import React,{useContext,useEffect} from 'react'
import menu from "../assets/menu.png"
import logo from "../assets/logoimg.png"
import search from "../assets/search.png"
import upload from "../assets/upload.png"
import more from "../assets/more.png"
import notification from "../assets/notification.png"
import profile from "../assets/jack.png"
import "./Navbar.css"
import Navcontext from './context/Navcontext'
import axios from 'axios'
const Navbar = () => {
  const {sidechange,setsidechange,term,setterm,setvideo} =useContext(Navcontext);
   function Hello(){
    setsidechange(!sidechange)
  }
  useEffect(()=>{
    show()
},[])
   async function show(){
    try{
      const response = await axios.get("https://youtube-data8.p.rapidapi.com/search/" , {
         
          params: {
              q: term || "random",
              hl: 'en',
              gl: 'US',
            },
            headers:{
              'X-RapidAPI-Key': 'd84af14033msh816ef172356aa9ap18e505jsn8d5c0f0e9482',
                   'X-RapidAPI-Host': 'youtube-data8.p.rapidapi.com'
          }
      })
      console.log(response.data);
      setvideo(response.data.contents);
      setterm("")
  }
  catch(error){
      console.log(error)
  }
  }
  console.log(sidechange)
  return (
    <nav className='flex'>
        <div className='left '>
            <img className='menu' onClick={Hello} src={menu} alt="menu"/>
            <img  className='logo' src={logo}  alt='logo'/>
        </div>
        <div className='center'>
           <div className='search flex'>
           <input type='text' placeholder='Enter your Search' onChange={(e)=>setterm(e.target.value)} 
           value ={term}/>
            <img  src={search} onClick={show} alt='search' />
           </div>
        </div>
        <div className='right'>
            <img src={upload}  alt='upload'/>
            <img src={more} alt='more'/>
            <img src={notification} alt='notification'/>
            <img  className='profile'src={profile} alt='profile'/>
        </div>
    </nav>
  )
}

export default Navbar