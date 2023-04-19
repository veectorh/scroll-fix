import styled from "styled-components";
import { useState } from "react";
import VideoModal from "@/components/VideoModal";
import Image from "next/image";
import Video from "./Video";

const VideoStyles = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 80px;

  .videos {
    display: flex;
    flex-direction: row;
    gap: 20px;
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
    <VideoStyles>
      {/* <h2>Videos</h2> */}
      <div className="videos">
        {
          videos.map(video => (  
            <Video key={video.id} video={video} onClose={handleCloseModal} onClick={handleButtonClick} showModal={showModal} />
          ))
        }
      </div>
    </VideoStyles>
  )
}