import React,{useState} from 'react'
import axios from "axios"
 const Main = () => {
    const [term,setterm] = useState("")
    const [video,setvideo] = useState([])
    async function Show(){
    try{
        const response =  await axios.get("https://youtube-v31.p.rapidapi.com/search" , {
            headers:{
                'X-RapidAPI-Key': '62bc180b27mshe139761ff85c18ep12ec1ejsna8a2aed75283',
                 'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
            },
            params: {
                q: term,
                part: 'snippet,id',
                regionCode: 'US',
                maxResults: '5',
                order: 'date'
              }
        })
        console.log(response.data);
        setvideo(response.data.items);
        setterm("")
    }
    catch{}
    }
  return (
    <div>
        <div>
            <input  type='text' placeholder='Enter your search'
            onChange={(e)=>setterm(e.target.value)} 
            value ={term}/>
            <button onClick={Show}>Search</button>
            {
                video.map(value=>(
                    <div className='display'>
                        <img src={value.snippet.thumbnails.medium.url}  alt={value.snippet.channelId}/>
                        <div>
                        <h5>{value.snippet.title}</h5>
                        <span>{value.snippet.channelTitle}</span>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
export default Main;