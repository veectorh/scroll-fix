import styled from "styled-components";
import Image from 'next/image';
import Link from 'next/link';
import SecondButtonStyles from './styles/SecondButtonStyles';
import { device } from "./device";
import ReactMarkdown from "react-markdown";

const EventStyle = styled.div`
  background-color: #F2F2F2;
  display: flex;
  gap: 40px;
  padding: 42px 42px;
  border-radius: 20px;
  margin-bottom: 25px;
  h2 {
    color: #000000;
    margin: 0 0 15px;;
    padding: 0;
    font-weight: 400;
    font-size: 36px;
    line-height: 35px;
    letter-spacing: 0.03em;
  }
  h3 {
    color: #F8A151;
    margin: 0 0 10px;
  }
  p {
    color: #000000 !important;
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

  .name-descriptions {
    a {
        color: inherit;
        text-decoration: underline;
      }
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

  @media ${device.laptop} {
    flex-direction: column;
    .image-buttons {
      max-width: 440px;
    }
  }

  @media ${device.tablet} {
    flex-direction: column;
    padding: 24px ;
    gap: 24px;

    h2 {
      //styleName: H2 Mobile;
     
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: 0.085em;
      text-align: left;
    }

    h3 {
      //styleName: H2 Mobile;
     
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: 0.085em;
      text-align: left;

    }
    .buttons {
      width: 100%;
    }

    .name-descriptions,  .artist-description  {
      p {
        //styleName: Body Mobile;
        font-family: Fira Sans;
        font-size: 12px;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0.05em;
        text-align: left;
      }
    }


    .image-buttons {
    max-width: 100%;
      img {
        width: 100%;
        height: auto;
      }
    }
  }

  .artist {
    display: flex;
    gap: 16px;
    padding-top: 20px;
  }
`;

export default function Event(event) {
  const { name, description, artist_name, image, enroll_url } = event.event.event.attributes;
  // const slug = artist_name.data.attributes.fullName.toLowerCase().replace('.', '').split(' ').join('-');

  return (
    <EventStyle>
      <div className="image-buttons">
        <Image
          src={image.data.attributes.url}
          alt={name}
          width={436}
          height={255}
          priority
        />
        <div className="buttons">
          <SecondButtonStyles theme={{ main: "#00AFB5" }} className="test">
            <Link href={enroll_url === null ? "/#" : enroll_url} target="_blank">Register Here</Link>
          </SecondButtonStyles>
          {/* <SecondButtonStyles theme={{ main: "#00AFB5" }} className="test">
            <Link href="/inquiry-form">Register & Learn More</Link>
          </SecondButtonStyles> */}
        </div >
      </div>
      <div className="name-descriptions">
        <h2>{name}</h2>
        <ReactMarkdown children={description} />
        <div className="artist">
          {/* <div className="artist-image">
            <Image 
              src={artist_name.data.attributes?.photo.data?.attributes?.url} 
              alt={artist_name.data.attributes?.fullName} 
              width={80} 
              height={80} 
              priority
            />
          </div > */}
          <div className="artist-description">
            <h3>Featuring {artist_name.data.attributes.fullName}</h3>
            <p>{artist_name.data.attributes.tagLine}</p>
            {/* <SecondButtonStyles theme={{ main: "#000000" }} border={true}>
              <Link href={`/speakers/${slug}`}>More About the Artist</Link>
            </SecondButtonStyles> */}
          </div >
        </div >
      </div>
    </EventStyle>
  )
}