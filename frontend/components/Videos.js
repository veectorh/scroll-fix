import styled from "styled-components";
import { useEffect, useState } from "react";
import VideoModal from "@/components/VideoModal";
import Image from "next/image";
import ContainerBox from "./styles/ContainerBox";
import { device } from "./device";
import Video from "./Video";
import VideoCarousal from './VideoCarousal'

const VideoStyles = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 0 50px;
  width: 100%;
  max-width: 1290px;
  margin: 0 auto 40px;
  .videos {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    width: 100%;
    .slick-slider {
      width: 100%;
      .slick-slide {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .slick-list {
        width: 100%; /* added this line only */
      }

      .slick-dots {
        li.slick-active {
          button:before {
            color: #F8A151 !important;
            font-size: 12px;
          }
        }
        li{
          button:before {
            font-size: 12px;
          }
        }
      }
      .back-btn {
        font-size: 0;
        line-height: 0;
        top: 50%;
        -webkit-transform: translate(0,-50%);
        -ms-transform: translate(0,-50%);
        transform: translate(0,-50%);
        cursor: pointer;
        color: transparent;
        border: none;
        outline: 0;
        left: -25px;
        position: absolute;

        .icon {
          width: 30px;
          height: 30px;
          color: #F8A151;
          transform: rotate(90deg);
        }
      }
      .next-btn {
        font-size: 0;
        line-height: 0;
        top: 50%;
        -webkit-transform: translate(0,-50%);
        -ms-transform: translate(0,-50%);
        transform: translate(0,-50%);
        cursor: pointer;
        color: transparent;
        border: none;
        outline: 0;
        position: absolute;
        right: -25px;
        .icon {
          width: 30px;
          height: 30px;
          color: #F8A151;
          transform: rotate(270deg);
        }
      }
    }
  } 

  .videosBox {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;
    width: 100%;
  }

  @media ${device.mobile} {
    padding: 0px 14px;
    .slick-slider {
      .slick-dots {
        bottom: -10px;
      }

      .back-btn {
        .icon {
          width: 20px;
          height: 20px;
        }
      }
      .next-btn {
        .icon {
          width: 20px;
          height: 20px;
        }
      }
    }
}
`;

export default function Videos({ videos }) {

  const [showCarousal, setShowCarousal] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState({});


  const handleButtonClick = (video) => {
    setShowModal(true);
    setSelectedVideo(video)
  }

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedVideo({})
  }

  const handleWindowResize = () => {
    if (getWindowSize() >= 1225 && videos.length > 4)
      setShowCarousal(true)
    else if (getWindowSize() > 910 && getWindowSize() < 1225 && videos.length > 3)
      setShowCarousal(true)
    else if (getWindowSize() > 620 && getWindowSize() < 910 && videos.length > 2)
      setShowCarousal(true)
    else if (getWindowSize() < 620 && videos.length > 1)
      setShowCarousal(true)
    else setShowCarousal(false)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  useEffect(() => {
    handleWindowResize();
  }, [videos]);

  console.log("showCarousal", showCarousal)

  return (
    <ContainerBox>
      <VideoStyles>
        {showCarousal ?
          <div className="videos">

            <VideoCarousal videos={videos} handleButtonClick={handleButtonClick} />
          </div>
          :
          <div className="videosBox">
            {
              videos.map(video => (
                <Video key={video.id} video={video} handleButtonClick={handleButtonClick} />
              ))
            }
          </div>
        }
      </VideoStyles>

      {selectedVideo.video_url && showModal && (
        <VideoModal videoSrc={selectedVideo.video_url} onClose={handleCloseModal} />
      )}


    </ContainerBox >
  )
}


function getWindowSize() {
  const { innerWidth } = window;
  return innerWidth;
}