import React from "react";
import Youtube from 'react-youtube';


const Music = () => {
    const opt = {
        height: '28.13',
        width: '50',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
    }

    return (
        <iframe
        style={{
          width: "30%",
          height: "350px",
          marginLeft: "auto", 
          marginRight: "auto",
          display: "flex",
          border:"0"
        }}
        src={`https://www.youtube.com/embed/ru-O5L2uxho`}
      />
    )
}

const MusicStyled = {
    width: "20%", 
}

export default Music;