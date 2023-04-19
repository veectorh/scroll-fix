import styled from "styled-components";
import { useState } from "react";
import VideoModal from "@/components/VideoModal";
import Image from "next/image";
import ContainerBox from "./styles/ContainerBox";
import { device } from "./device";
const VideoStyles = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 80px;

  .videos {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    
    .video {
      width: 265px;
      border-radius: 20px;
      position: relative;
      cursor: pointer;
      
      p {
        font-family: 'Oswald';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
      }
      .play {
        position: absolute;
        top: 42px;
        left: 100px;
      }
      img {
        border-radius: 20px;
      }
    }
  } 
  
`;

function getYoutubeImage(url) {
  // https://img.youtube.com/vi/<insert-youtube-video-id-here>/hqdefault.jpg
  const videoId = new URL(url).searchParams.get("v");
  return `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`
}

export default function Videos({ videos }) {
  const [showModal, setShowModal] = useState(false);

  function handleButtonClick() {
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  return (
    <ContainerBox>
      <VideoStyles>
        {/* <h2>Videos</h2> */}
        <div className="videos">
          {
            videos.map(video => (
              <div className="video-container" key={video.id} >
                <div className="video" onClick={handleButtonClick}>
                  <img src={getYoutubeImage(video.video_url)} width={262} className="thumbnail" />
                  <Image src="/images/orange-play-button.png" width="64" height="64" className="play" alt="Play" />
                  <p>{video.video_name}</p>
                </div>
                {video.video_url && showModal && (
                  <VideoModal videoSrc={video.video_url} onClose={handleCloseModal} />
                )}
              </div>
            ))

          }
        </div>
      </VideoStyles>
    </ContainerBox>
  )
}