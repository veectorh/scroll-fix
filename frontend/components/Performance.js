import styled from "styled-components";
import Image from 'next/image';
import Link from 'next/link';
import SecondButtonStyles from '../components/styles/SecondButtonStyles';

const PerformanceStyle = styled.div`
  background-color: #000000;
  display: flex;
  gap: 40px;
  padding: 42px 42px;
  border-radius: 20px;
  h2 {
    color: #ffffff;
    margin: 0 0 15px;;
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
    width: 100%;
    p {
      margin-bottom: 30px;
    }
  }
`;


export default function Performance({performance}) {
  console.log("We INSIDE:", performance)
  return (
    <PerformanceStyle>
      <div className="image-buttons">
        <Image 
          src={performance.attributes.image?.data?.attributes.url} 
          alt={performance.attributes?.name} 
          width={436} 
          height={255} 
          priority
        />
        <div className="buttons">
          <SecondButtonStyles theme={{ main: "#00AFB5" }} className="test">
            <Link href="/ecourse">Watch a Clip</Link>
          </SecondButtonStyles>
          <SecondButtonStyles theme={{ main: "#00AFB5" }} className="test">
            <Link href="/ecourse">Request Info</Link>
          </SecondButtonStyles>
        </div >
      </div>
      <div className="name-descriptions">
        <h2>{performance.attributes?.name}</h2>
        <p>{performance.attributes?.description}</p>
        <div className="artist">
          <div className="artist-image">
            <Image 
              src={performance.attributes.artist_photo?.data?.attributes?.url} 
              alt={performance.attributes?.name} 
              width={121} 
              height={121} 
              priority
            />
          </div >
          <div className="artist-description">
            <h3>Created by {performance.attributes?.artist_name}</h3>
            <p>Created by {performance.attributes?.artist_description}</p>
            <SecondButtonStyles theme={{ main: "#000000" }} border={true}>
              <Link href="/ecourse">More About the Artist</Link>
            </SecondButtonStyles>
          </div >
        </div >
      </div>
    </PerformanceStyle>
  )
}