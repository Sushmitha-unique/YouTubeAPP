import React,{useContext,useEffect,useState} from "react";
import "./Playvideo.css"
import axios  from "axios";
import Navcontext from "../context/Navcontext";
import ReadMoreReact from 'read-more-react';
const Playvideo = () =>{
    const {videoid} = useContext(Navcontext)
    const [videourl,setvideourl] =useState("");
    const [suggest,setsuggest] = useState([])
    const [detail,setdetail] = useState("");
    useEffect(()=>{
    async function show(){
        try{
          const response = await axios.get("https://youtube-data8.p.rapidapi.com/video/streaming-data/" , {
             
              params: {
                  id:videoid
                },
                headers:{
                  'X-RapidAPI-Key': 'd84af14033msh816ef172356aa9ap18e505jsn8d5c0f0e9482',
                   'X-RapidAPI-Host': 'youtube-data8.p.rapidapi.com'
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
        async function hello ()
        {
          try{
            const response = await axios.get("https://youtube-data8.p.rapidapi.com/video/related-contents/" , {
               
                params: {
                    id: videoid,
                    hl: 'en',
                    gl: 'US',
                  },
                  headers:{
                    'X-RapidAPI-Key': 'd84af14033msh816ef172356aa9ap18e505jsn8d5c0f0e9482',
                   'X-RapidAPI-Host': 'youtube-data8.p.rapidapi.com'
                }
            })
            console.log(response.data);
            const limitedVideos = response.data.contents.slice(0, 3);
            setsuggest(limitedVideos);
          }
          catch(error){
            console.log(error)
        }
        }
        async function details ()
        {
          try{
            const response =  await axios.get("https://youtube-data8.p.rapidapi.com/video/details/" , {
                headers:{
                    'X-RapidAPI-Key': 'd84af14033msh816ef172356aa9ap18e505jsn8d5c0f0e9482',
                     'X-RapidAPI-Host': 'youtube-data8.p.rapidapi.com'
                },
                params: {
                    id:videoid,
                    hl:'en',
                    gl:'US'
                  }
            })
            console.log(response.data);
            setdetail(response.data)
          }
          catch(error){
            console.log(error)
          }
      }
        details();
        show();
        hello();
  }, [videoid]);


    return( 
        <div className="play-video">
          <div className="video-and-suggestions">
            <div className="video-container">
           <video  src={videourl}  controls autoPlay muted  width={900} height={500}/>
           <div>
           {       detail && <div>
                           <img src={detail.author.avatar[0].url}  alt="avatar" />
                        <h5>{detail.author.title}</h5>
                        <span>{detail.category}</span>
                        <ReadMoreReact
                           text={detail.description}
                           min={100}
                           ideal={100}
                           max={500}
                           readMoreText="READ MORE"
                           />
                        </div>
                 
            }
           </div>
           </div>
           <div className="card2">
            {
              suggest.map((value)=>{
                return(
                  <div>
                <img src={value.video.thumbnails[0].url} alt="related" />
                <h5>{value.video.author.title}</h5>
                <span>{value.video.title}</span><br/>
                <span>{value.video.publishedTimeText}</span>
                </div>
                )
              }

              )
            }
           </div>
          
           </div>

        </div>
    )
}
export default Playvideo;