import React from 'react';
import Slider from 'react-slick';
import Video from "./Video";
import { IoChevronDownSharp } from "react-icons/io5";

const initialSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow:  4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2 ,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const VideoCarousal = ({ videos, handleButtonClick }) => {
  const [settings, setSettings] = React.useState(initialSettings);

  React.useEffect(() => {
    setSettings(
      {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: videos?.length >= 4 ? 4 : videos?.length,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: videos?.length >= 3 ? 3 : videos?.length,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: videos?.length >= 2 ? 2 : videos?.length,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }
    )
  }, [videos])

  return (
    <Slider {...settings}>
      {
        videos.map(video => (
          <div>
            <Video key={video.id} video={video} handleButtonClick={handleButtonClick} />
          </div>
        ))
      }
    </Slider>
  );
};

export default VideoCarousal;

function NextArrow(props) {
  const { className, style, onClick } = props;
  console.log("click")
  return (
    <div
      className="next-btn"
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <IoChevronDownSharp className='icon' />
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick, canGoNext } = props;
  return (
    <div
      className="back-btn"
      style={{ ...style, display: "block", }}
      onClick={onClick}
    >
      <IoChevronDownSharp className='icon' />
    </div>
  );
}
