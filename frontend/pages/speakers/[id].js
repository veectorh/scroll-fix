import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';
import ButtonStyles from '@/components/styles/ButtonStyles';
import Image from 'next/image';
import TopicListStyles from '@/components/styles/TopicListStyles';
import QuotesCarousel from '@/components/QuotesCarousel';
import OurStore from '@/components/OurStore';
import { loadSpeakers } from '@/lib/load-speakers';
import { loadSingleSpeakers } from '@/lib/load-single-speaker';
import React, { useState, useEffect } from 'react';
const SpeakerHeroStyles = styled.section`
  background: rgba(56, 240, 240, 0.2);
  display: flex;
  justify-content: space-between;
  .speaker-info {
    padding: 50px 90px;
    .return-link {
      a {
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.065em;
        text-decoration-line: underline;
        text-transform: uppercase;
        color: #00AFB5;
      }
      a:hover {
        text-decoration: underline;
      }
    }
    h1 {
      font-family: 'Oswald';
      font-style: normal;
      font-weight: 400;
      font-size: 60px;
      line-height: 89px;
      letter-spacing: 0.03em;
      color: #000000;
      margin: 0;
      padding: 60px 0 15px;
    }
    p {
      color: #000000;
      margin: 0;
      max-width: 800px;
    }
    .buttons {
      display: flex;
      gap: 9px;
      margin-top: 34px;
    }
  }
  .speaker-image {
    img {
      position: relative !important;
      object-fit: cover;
    }
  }
`;

const SpeakerInfoStyles = styled.section`
  display: flex;
  justify-content: center;
  gap: 7em;
  margin-top: 50px;
  .left {
    max-width: 715px;
  }
  .right {
    width: 265px;
  }
  .heading-flex {
    display: flex;
    gap: 115px;
  }
  .headings {
    border-bottom: 1px solid #000000;
  }
  .content {
    padding-bottom: 75px;

    p {
      white-space: pre-line;
    }
  }
  .topics {
    margin: 30px 0;
  }
  .links {
    width: 270px;
    margin: 25px 0 0;
    p {
      font-family: 'Fira Sans', Arial;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 0.05em;
      text-decoration-line: underline;
      text-transform: capitalize;
      color: #00AFB5;
      margin-bottom: 15px;
    }
  }
  h2 {
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.05em;
    color: #000000;
    text-transform: uppercase;
    margin: 0;
    padding: 5px 10px 10px 0px;
    /* text-align: center; */
  }
  .selected {
      color: #00AFB5;
      text-decoration: underline;
      text-underline-offset: 11px;
      text-decoration-thickness: 5px;
  }
  .hide {
    display: none;
  }
`;

export const getStaticPaths = async () => {

  const speakers = await loadSpeakers();

  // create path names with id
  const paths = speakers?.data?.map(speaker => {
    return {
      params: { id: speaker.id.toString() }
    }
  })

  return {
    paths,
    fallback: false,
  }

}

export const getStaticProps = async (context) => {

  const id = context.params.id;

  // fetch data of each user with id 
  const speaker = await loadSingleSpeakers(id);

  // generate pages 
  return { props: { singleSpeaker: speaker } }
}


export default function SingleSpeaker({ singleSpeaker }) {
  
  const router = useRouter();
 
  const speaker = singleSpeaker?.data?.attributes;

  const [showAbout, setShowAbout] = useState(true);


  // add this code if you want to replace id with name in url 

  // useEffect(() => {
  //   if (speaker) {
  //     router.push({
  //       pathname: `${speaker?.fullName.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-')}`,
  //     },
  //       undefined, { shallow: true }
  //     )
  //   }
  // }, [speaker])


  return (
    <>
      <SpeakerHeroStyles>
        <div className="speaker-info">
          <div className="return-link">
            <Link href="/speakers">Back to All Speakers</Link>
          </div >
          <h1>{speaker?.fullName}</h1>
          <p>{speaker?.tagLine}</p>
          <div className="buttons">
            <ButtonStyles theme={{ main: "#00AFB5;" }}>
              <Link href="/speakers">
                Request Info
              </Link>
            </ButtonStyles>
            <ButtonStyles theme={{ main: "#00AFB5;" }}>
              <Link href="/speakers">
                Publicity Packet
                <span className="icon">
                  <Image
                    src='/images/download-icon.png'
                    alt="Download"
                    width={16}
                    height={16}
                  />
                </span>
              </Link>
            </ButtonStyles>
          </div>
        </div >
        <div className="speaker-image">

          <Image
            src={speaker?.photo.data?.attributes.url}
            alt={speaker?.fullName}
            fill
            sizes="33vw"
            priority
          />
        </div>
      </SpeakerHeroStyles>
      <SpeakerInfoStyles>
        <div className="left">
          <div className="heading-flex headings">
            <h2 onClick={() => setShowAbout(true)} className={showAbout == true ? 'selected' : ''}>&nbsp;&nbsp;About&nbsp;&nbsp;</h2>
            <h2 onClick={() => setShowAbout(false)} className={showAbout === false ? 'selected' : ''}>&nbsp;&nbsp;Speeches&nbsp;&nbsp;</h2>
          </div>
          <div className="content">
            <div className={`about ${showAbout == false ? 'hide' : ''}`} >
              <p>
                {speaker?.about}
              </p>
            </div>
            <div className={`speeches ${showAbout == true ? 'hide' : ''}`} >
              <p>
                {speaker?.speeches}
              </p>
            </div>
          </div>
        </div >
        <div className="right">
          <div className="headings">
            <h2>&nbsp;&nbsp;Topic Areas</h2>
          </div>
          <div className="topics">
            <TopicListStyles>
              {speaker?.topics?.data.map(topic =>
                <div key={topic.id}>{topic?.attributes?.name}</div>
              )}

            </TopicListStyles>
          </div >
          <div className="headings">
            <h2>&nbsp;&nbsp;Related Links</h2>
          </div>
          <div className="links">
            {speaker?.related_links?.map(link =>
              <a href={link.url} key={link.id}><p>{link.text}</p></a>
            )}

          </div>
          <ButtonStyles theme={{ main: "#00AFB5" }}>
            <Link href="/ecourse">
              Share this Speaker
            </Link>
          </ButtonStyles>
        </div>
      </SpeakerInfoStyles>
      <QuotesCarousel />
      <OurStore />
    </>
  );
}