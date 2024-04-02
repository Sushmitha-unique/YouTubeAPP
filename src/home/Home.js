import React,{useContext} from 'react'
import Sidebar from '../Components/Sidebar';
import Feed from '../feed/Feed';
import Navcontext from '../Components/context/Navcontext';
const Home = () => {
  const sidechange= useContext(Navcontext)
  return (
    <div>
       <Sidebar/>
       <div className={`container${sidechange?"":'large-container'}`}>
       <Feed/>
       </div>
    </div>
  )
}

export default Home;