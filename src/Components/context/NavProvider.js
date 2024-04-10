import React,{useState} from "react";
import axios from "axios"
import Navcontext from "./Navcontext";
const Navprovider = (props) =>{
    const [sidechange,setsidechange] = useState(true)
    const [term,setterm] = useState("")
    const [video,setvideo] = useState([])
    const [videoid,setvideoid]=useState("")
    return(
        <Navcontext.Provider value={
            {
                sidechange:sidechange,
                setsidechange:setsidechange,
                video:video,
                setvideo:setvideo,
                term:term,
                setterm:setterm,
                videoid:videoid,
                setvideoid:setvideoid
            }
        }>
          {props.children}
        </Navcontext.Provider>
    )
}
export default Navprovider;
