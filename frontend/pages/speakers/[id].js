import Link from 'next/link';
import styled from 'styled-components';
import ButtonStyles from '@/components/styles/ButtonStyles';
import Image from 'next/image';
import TopicListStyles from '@/components/styles/TopicListStyles';
import SpeakerQuotesCarousel from '@/components/SpeakerQuotesCarousel';
import OurStore from '@/components/OurStore';
import { loadSpeakers } from '@/lib/load-speakers';
import { loadSingleSpeakers } from '@/lib/load-single-speaker';
import React, { useState, useEffect } from 'react';
import ReactMarkdown from "react-markdown";

const colors = ['#FBECDE', '#F2F2F2', '#F8A151'];
const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];
const color = getRandomColor();

const SpeakerHeroStyles = styled.section`
  background: ${color};
  display: flex;
  justify-content: space-between;
  .speaker-info {
    padding: 50px 90px;
    flex: 1;
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
    /* width: 50vw; */
    height: 530px;
    /* box-shadow: inset 175px 0 175px 0 ${color}; */
    background-position: 0 2%;
    background-size: cover;
    background-repeat: no-repeat;
    flex: 1;
    img {
      position: relative !important;
      object-fit: cover;
      object-position: 0 15%;
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
      params: { id: speaker.attributes.slug }
    }
  })
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const slug = context.params.id;
  // fetch data of each user with id 
  const speaker = await loadSingleSpeakers(slug);
  // generate pages 
  return { props: { singleSpeaker: speaker } }
}


export default function SingleSpeaker({ singleSpeaker }) {
  console.log("SPEAKER", singleSpeaker);
  const speaker = singleSpeaker?.data[0]?.attributes;
  const quotes = singleSpeaker.data[0].attributes?.quotes;
  const products = singleSpeaker.data[0]?.attributes?.products?.data;

// PUBLICITY PACKET ISSUE
  // const photos = singleSpeaker.data[0]?.attributes?.publicity_packet?.data[0]?.attributes?.url;
  const [showAbout, setShowAbout] = useState(true);
  // console.log("PRODUCTS", products);
  // console.log("PHOTOSDOWNLOWD", photos);
  // console.log("Empty", products.length === 0);

  let styleImage = {
    backgroundImage: "url(" + speaker?.photo.data?.attributes.url + ")",
  }

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
              <Link href="/inquiry-form">
                Request Info
              </Link>
            </ButtonStyles>

{/* PUBLICITY PACKET ISSUE */}
            {/* <ButtonStyles theme={{ main: "#00AFB5;" }} style={{ display: photos === null ? "none" : "flex"}}>
              <Link href={photos}>
                Photos
                <span className="icon">
                  <Image
                    src='/images/download-icon.png'
                    alt="Download"
                    width={16}
                    height={16}
                    priority
                  />
                </span>
              </Link>
            </ButtonStyles> */}
          </div>
        </div >
        <div className="speaker-image" style={styleImage}>
          {/* <Image
            src={speaker?.photo.data?.attributes.url}
            alt={speaker?.fullName}
            fill
            sizes="33vw"
            priority
          /> */}
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
              <ReactMarkdown children={speaker?.about} />
            </div>
            <div className={`speeches ${showAbout == true ? 'hide' : ''}`} >
              <ReactMarkdown children={speaker?.speeches} />
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
                <div key={topic.id} style={{ backgroundColor: "#F2F2F2" }}>{topic?.attributes?.name}</div>
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
      <SpeakerQuotesCarousel quotes={quotes} />
      {/* Display OurStore component only if Speaker has a related Product */}
      { products.length === 0 ? null : <OurStore products={products} /> }
    </>
  );
}