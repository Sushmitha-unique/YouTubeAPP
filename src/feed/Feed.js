import React,{useContext} from 'react'
import "./Feed.css"
import thumbnail1 from "../assets/thumbnail1.png"
import Navcontext from '../Components/context/Navcontext'
const Feed = () => {
    const {video,setvideo}=useContext(Navcontext);
  return (
    <div className='feed'>
    <div className='card'>
    {video.map(value=>(
                    <div className='display'>
                        <img src={value.snippet.thumbnails.medium.url}  alt={value.snippet.channelId}/>
                        <div>
                        <h5>{value.snippet.title}</h5>
                        <span>{value.snippet.channelTitle}</span>
                        </div>
                    </div>
))}
        </div>
    </div>
  )
}

export default Feed;
 