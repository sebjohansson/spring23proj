import { computeHeadingLevel } from "@testing-library/react";
import React,{useState} from "react";
import audio from '../assets/space-120280.mp3';


const PlayMusic =()=>{

    

    const [isToggled, SetIsToggled] = useState(false);
  
    const handleToggle =()=>{
        const song = new Audio(audio);
            SetIsToggled(!isToggled)
            switch(isToggled){
                default: song.current.pause()
                case false: song.current.pause()
                case true: song.current.play()
            }
            console.log(isToggled)
    }

  


    
    return (
        <div>
          <button onClick={handleToggle}>PLAY AUDIO</button>
        
        </div>
    );
  }


export default PlayMusic;