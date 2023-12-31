import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { device } from './device';
const SpeakerStyles = styled.div`
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    height: 310px;
    
    img {
      width: 310px;
      height: 100%;
      object-fit: cover;
      border-radius: 20px;
      overflow: hidden;
    }
    .speaker-info {
      background-color: rgba(0, 0, 0, 0.5);
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 80px;
      padding: 8px 16px;
      max-width: 310px;
      overflow: hidden;
      border-bottom-right-radius: 20px;
      .name {
        font-family: 'Oswald';
        font-size: 18px;
        font-weight: 500;
        line-height: 25px;
        letter-spacing: 0.085em;
        text-transform: uppercase;
        color: #F8A151;
        margin: 0;
      }
      .tagline {
        font-size: 12px;
        font-weight: 400;
        line-height: 14px;
        letter-spacing: 0.05em;
        color: #ffffff;
        margin: 0;
      }
    }

  
    @media ${device.tablet} {
      height: 100%;
      img, .speaker-info {
        width: 100%;
        max-width: 100%;
      }
      img {
        height: auto;
      }
      .speaker-info {
        bottom: 4px;
        border-bottom-left-radius: 20px;
        .name {
          font-size: 16px;
          font-weight: 500;
          line-height: 24px;
          letter-spacing: 0.085em;
          text-align: left;
        }
        .tagline {
          font-size: 12px;
          font-weight: 400;
          line-height: 16px;
          letter-spacing: 0.05em;
          text-align: left;
        }
      }
    }

    @media ${device.mobileL} {
      height: 279;
    }

`;

const graylight = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAANSURBVBhXY7hy5cp/AAh4A3zas3NuAAAAAElFTkSuQmCC";

export default function Speaker({ speaker }) {

  return (
    <SpeakerStyles>
      <Link href={`/speakers/${speaker.attributes.slug}`} passHref>
        <Image
          src={speaker.attributes.photo.data?.attributes.url}
          alt={speaker.attributes.fullName}
          width={300}
          height={300}
          placeholder="blur"
          blurDataURL={graylight}
        />
        <div className="speaker-info">
          <p className="name">{speaker.attributes.fullName}</p>
          <p className="tagline">{speaker.attributes.tagLine}</p>
        </div>
      </Link>
    </SpeakerStyles>
  );
}