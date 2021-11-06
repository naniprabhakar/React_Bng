import React from 'react'
import Audiofile from './Amma.mp3';
//import ReactLogo from './R.jpeg';

const Audio = () => {
    return (
        <div>
            <center>
                <audio controls>
                    <source src={Audiofile} type="audio/ogg" />
                </audio>
            </center>
        </div>
    )
}

export default Audio