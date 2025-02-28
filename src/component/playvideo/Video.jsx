import React, { useRef } from 'react'
import './video.css'
import video from '../Assests/video.mp4'
const Video = ({playState,setPlayState}) => {
    const player = useRef(null)
    const closeplayer = (e)=>{
        if(e.target === player.current){
            setPlayState(false)
        }
    }
  return (
    <div className={`video  ${playState? '': 'hide'}`} ref={player} onClick={closeplayer} >
      <video src={video} autoPlay muted  controls ></video>
    </div>
  )
}

export default Video
