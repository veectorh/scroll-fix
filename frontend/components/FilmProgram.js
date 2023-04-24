import styled from "styled-components";
import Image from 'next/image';
import Link from 'next/link';
import SecondButtonStyles from '../components/styles/SecondButtonStyles';
import { device } from "./device";
import VideoModal from "@/components/VideoModal";
import { useState } from "react";

const FilmProgramStyle = styled.div`
  background-color: #000000;
  display: flex;
  gap: 40px;
  padding: 42px 42px;
  border-radius: 20px;
  margin-bottom: 25px;
  h2 {
    color: #ffffff;
    margin: 0 0 15px;
    padding: 0;
    font-weight: 400;
    font-size: 36px;
    line-height: 26px;
    letter-spacing: 0.03em;
  }
  h3 {
    color: #F8A151;
    margin: 0 0 10px;
  }
  p {
    color: #ffffff !important;
  }

  .image-buttons {
    max-width: 440px;
    
    img {
      width: 100%;
      height: 255px;
      border-radius: 20px;
      margin-bottom: 20px;
    }
  }

  .buttons {
    display: flex;
    width: 436px;
    justify-content: space-around;
    gap: 10px;
  }

  .artist {
    display: flex;
    gap: 20px;
    padding-top: 30px;
  }
  .artist-image {
    img {
      object-fit: cover;
      border-radius: 20px;
    }
  }
  .artist-description {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    p {
      margin-bottom: 30px;
    }
  }
  .btn-container {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content:  flex-end;
    .btn {
      width: calc(100% - 100px);
    }
  }

  .mobile-des {
    display: none;
    margin: 16px 0px;
  }

  .laptop-des {
    display: block;
  }

  @media ${device.laptop} {
    flex-direction: column;
    .btn-container {
      margin-top: 14px;
      .btn {
        width: 100%;
      }
    }
    .image-buttons {
      max-width: 100%;
      img {
        height: auto;
      }
    }
    .buttons {
      /* flex-direction: column; */
      width: 100%;
      max-width: 100%;
    }
  }

  @media ${device.tablet} {
    padding: 24px 24px;
    gap: 16px;

    .btn-container {
      margin-top: 0px;
    }
  
    h2 {
      //styleName: H2 Mobile;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: 0.085em;
      text-align: left;
      margin: 0 0 6px;
    }

    .name-descriptions,  .artist-description  {
      p {
        //styleName: Body Mobile;
        /* font-family: Fira Sans; */
        font-size: 12px;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0.05em;
        text-align: left;
      }
    }
    
    .mobile-des {
      display: block;
    }
    .laptop-des {
      display: none;
    }
    h3 {
     
      font-size: 16px;
      font-weight: 500;
      line-height: 21px;
      letter-spacing: 0.085em;
      text-align: left;
    }
    .artist-description {
      justify-content: center;
    }
  }
`;


export default function FilmProgram(film) {
  const [showModal, setShowModal] = useState(false);

  function handleButtonClick() {
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  const { name, description, artist_name, image, video_url } = film.film.film.attributes;
  const slug = artist_name.data.attributes.fullName.toLowerCase().replace('.', '').split(' ').join('-');

  return (
    <FilmProgramStyle>
      <div className="image-buttons">
        <Image
          src={image.data?.attributes?.url}
          alt={name}
          width={436}
          height={255}
          priority
        />
        <div className="buttons">
          <SecondButtonStyles theme={{ main: "#00AFB5" }} className="test" style={{ display: video_url === null ? "none" : "flex"}} onClick={handleButtonClick}>
            <a>Watch a Clip</a>
          </SecondButtonStyles>
          {video_url && showModal && (
            <VideoModal videoSrc={video_url} onClose={handleCloseModal} />
          )}
          <SecondButtonStyles theme={{ main: "#00AFB5" }} className="test">
            <Link href="/inquiry-form">Request Info</Link>
          </SecondButtonStyles>
        </div >
      </div>
      <div className="name-descriptions">
        <h2>{name}</h2>
        <p>{description}</p>
        <div className="artist">
          <div className="artist-image">
            <Image
              src={artist_name.data.attributes?.photo.data?.attributes?.url}
              alt={artist_name.data.attributes?.fullName}
              width={80}
              height={80}
              priority
            />
          </div >
          <div className="artist-description">
            <h3>Created by {artist_name.data.attributes.fullName}</h3>
            <p className="laptop-des">{artist_name.data.attributes.tagLine}</p>
          </div >
        </div >
        <p className="mobile-des">{artist_name.data.attributes.tagLine}</p>
        <div className="btn-container">
          <div className="btn">
            <SecondButtonStyles theme={{ main: "#000000" }} border={true}>
              <Link href={`/speakers/${slug}`}>More About the Artist</Link>
            </SecondButtonStyles>
          </div>
        </div>
      </div>
    </FilmProgramStyle>
  )
}