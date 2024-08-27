import React, { useRef } from 'react'
import './Videoplayer.css'
import video from '../../assets/college-video.mp4'

function Videoplayer({player, setPlayer}) {

    const videoRef = useRef(null)

    const closeplayer = (e) =>{
        if(e.target === videoRef.current){
            setPlayer(false)
        }
    }

  return (
    <div className={`video-player ${player == true ? "" : 'hide'}`} ref={videoRef} onClick={closeplayer}>
        <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default Videoplayer
