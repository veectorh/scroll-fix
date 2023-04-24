import styled from "styled-components";
import { useState } from "react";
import VideoModal from "@/components/VideoModal";
import Image from "next/image";
import ContainerBox from "./styles/ContainerBox";
import { device } from "./device";
import Video from "./Video";

const VideoStyles = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 50px;

  .videos {
    display: flex;
    flex-direction: row;
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
        <div className="videos">
          {
            videos.map(video => (  
              <Video key={video.id} video={video} onClose={handleCloseModal} onClick={handleButtonClick} showModal={showModal} />
            ))
          }
        </div>
      </VideoStyles>
    </ContainerBox>
  )
}