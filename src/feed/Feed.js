import React,{useContext,useEffect} from 'react'
import "./Feed.css"
import Navcontext from '../Components/context/Navcontext'
import {Link} from "react-router-dom"
const Feed = () => {
    const {video,setvideoid,videoid}=useContext(Navcontext);
    const handleTitleClick = (value) => {
      setvideoid(value.video.videoId);
    };
    useEffect(() => {
      console.log(videoid);
    }, [videoid]);

  return (
    <div className='card'>
   
{video.map((value) => (
  
        <Link   to= {'/Playvideo'} className="video-item" key={value.id}>
          <img src={value.video.thumbnails[0].url}  alt='thumbnails'/>
          <h5 onClick={() => handleTitleClick(value)}>{value.video.author.title}</h5>
          <span>{value.video.title}</span><br/>
          <span>{value.video.publishedTimeText}</span>
        </Link>
      ))}
        </div>
  )
}

export default Feed;
 