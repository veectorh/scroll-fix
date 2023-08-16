import styled from "styled-components";
import { useState } from "react";
import VideoModal from "@/components/VideoModal";
import Image from "next/image";

const VideoStyle = styled.div`
    /* width: 265px; */
  .video {
    width: 100%;
    max-width: 265px;
    border-radius: 20px;
    cursor: pointer;
    padding: 15px;
    p {
      font-family: 'Oswald';
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
    }
    .play {
      position: absolute;
      top: 30%;
      left: 38%;
      width: 25%;
      height: 40%;
      /* max-width : 64px;
      min-height : 64px; */
    }
    img {
      border-radius: 20px;
    }

    .video-thumbnail {
      position: relative;
    }
    .thumbnail {
      width: 100%;
      max-width: 265px;
      /* height: 100%; */
    }
  }
`;

function getYoutubeImage(url) {
  const videoId = new URL(url).searchParams.get("v");
  return `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`
}

export default function Video({ video, handleButtonClick }) {
  

  return (
    <VideoStyle>
      <div className="video" onClick={()=> handleButtonClick(video)}>
        <div className="video-thumbnail">
          <img src={getYoutubeImage(video.video_url)} className="thumbnail" />
          <img src="/images/orange-play-button.png" className="play" alt="Play" />
        </div>
        <p>{video.video_name}</p>
      </div>
    
    </VideoStyle>
  )
}
