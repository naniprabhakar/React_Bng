import React from 'react'
import Videofile from './Vidya.mp4';


const Video = () => {
    return (
        <div>
            <center>
                <video controls width="800" height="450">
                    <source src={Videofile} type="video/mp4" />
                </video>
            </center>
        </div>
    )
}

export default Video