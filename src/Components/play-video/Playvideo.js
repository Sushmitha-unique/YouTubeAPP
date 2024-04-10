import React,{useContext,useEffect,useState} from "react";
import "./Playvideo.css"
import axios  from "axios";
import Navcontext from "../context/Navcontext";
import like from "../../assets/like.png"
import dislike from "../../assets/dislike.png"
import share from "../../assets/share.png"
import save from "../../assets/save.png"
import jack from "../../assets/jack.png"
import profile from "../../assets/user_profile.jpg"
const Playvideo = () =>{
    const {videoid} = useContext(Navcontext)
    const [videourl,setvideourl] =useState("");
    useEffect(()=>{
    async function show(){
        try{
          const response = await axios.get("https://youtube138.p.rapidapi.com/video/streaming-data/" , {
             
              params: {
                  id:videoid
                },
                headers:{
                  'X-RapidAPI-Key': '62bc180b27mshe139761ff85c18ep12ec1ejsna8a2aed75283',
                   'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
              }
          })
          const videoFormats = response.data.adaptiveFormats;
          const videourl = videoFormats.find(format => format.qualityLabel === "720p")
          if (videourl) {
            setvideourl(videourl.url);
            console.log(videourl)
          } else {
            console.error("No video URL found");
          }
        }
        catch (error) {
            console.error("Error fetching video URL:", error);
          }
        }
        show();
  }, [videoid]);
    return( 
        <div className="play-video">
           <video  src={videourl}  controls autoPlay muted  width={900} height={500}/>
        </div>
    )
}
export default Playvideo;