import React,{useContext,useEffect} from 'react'
import "./Feed.css"
import thumbnail1 from "../assets/thumbnail1.png"
import Navcontext from '../Components/context/Navcontext'
import {Link} from "react-router-dom"
import Video from '../video/Video'
const Feed = () => {
    const {video,setvideoid,videoid}=useContext(Navcontext);
    const handleTitleClick = (videoId) => {
      setvideoid(videoId);
    };
    useEffect(() => {
      console.log(videoid);
    }, [videoid]);
  return (
    <div className='card'>
   
{video.map((value) => (
  
        <Link   to= {'/Playvideo'} className="video-item" key={value.id}>
          <img src={value.video.thumbnails[0].url} />
          <h5 onClick={() => handleTitleClick(value.video.videoId)}>{value.video.author.title}</h5>
          <span>{value.video.title}</span><br/>
          <span>{value.video.publishedTimeText}</span>
        </Link>
      ))}
        </div>
  )
}

export default Feed;
 