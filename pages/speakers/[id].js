import Link from 'next/link';
import Script from 'next/script'
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
import ContainerBox from '@/components/styles/ContainerBox';
import { device } from '@/components/device';
import Head from 'next/head'
import RelatedSpeakers from '@/components/RelatedSpeakers';
// import Videos from '@/components/Videos';
import { useRouter } from 'next/router';

import dynamic from 'next/dynamic'

const VideosBox = dynamic(() => import('@/components/Videos'), {
  loading: () => <p>Loading...</p>,
})

const colors = ['#FBECDE', '#F2F2F2', '#E2EAEA'];
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
  .mobile-image {
      display: none;
  }
  @media ${device.tablet} {

    flex-direction: column-reverse;

    .speaker-info {
      padding: 40px 0px;
        h1 {  
          font-size: 30px;
          font-weight: 500;
          line-height: 36px;
          letter-spacing: 0.05em;
          text-align: left;  
          padding: 17px 0 15px;    
        }
        p {
          //styleName: Body Mobile;
          /* font-family: Fira Sans; */
          font-size: 12px;
          font-weight: 400;
          line-height: 16px;
          letter-spacing: 0.05em;
          text-align: left;
        }
        .return-link {
          a {
            font-size: 12px;
            font-weight: 500;
            line-height: 18px;
            letter-spacing: 0.065em;
            text-align: left;
          }
        }
        .speaker-image {
         display: none;
        }
        .mobile-image {
          display: block;
          padding-top: 20px;
          img {
            border-radius: 50%;
          }
        }
    }

  }

    @media ${device.tablet} {
        .page-detail {
          margin: 0px 36px;
        }
    }
  
    @media ${device.mobileL} {
        .page-detail {
          margin: 0px 24px;
        }
    }
  
    @media ${device.mobileM} {
        .page-detail {
          margin: 0px 24px;
        }
    }
  
    @media ${device.mobileS} {
        .page-detail {
          margin: 0px 24px;
        }
    }
`;

const SpeakerInfoStyles = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 7em;
  margin: 50px 0px;
  flex-wrap: wrap;
  .left {
    max-width: 715px;
    padding-left: 20px
    h2 {
      cursor: pointer;
    }
  }
  .right {
    max-width: 265px;
  }
  .heading-flex {
    display: flex;
    gap: 115px;
  }
  .headings {
    border-bottom: 1px solid #000000;
  }
  .content {
    min-width: 715px;
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
      font-family: 'Fira Sans',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
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

  .elfsight-app-1633c2e5-e526-4994-abb0-0089aacdd09c {
    margin-top: 40px;
    .eapps-social-share-buttons-container {
      text-align: left;
    }
  }

  @media ${device.tablet} {
    flex-direction: column;
    gap: 40px;
    flex-wrap: unset;

    .heading-flex {
      justify-content: flex-start;
      gap: 0px;
    }
    .content {
      padding-bottom: 0px;
      min-width: unset;
      p {
      //styleName: Body Mobile;
      /* font-family: Fira Sans; */
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0.05em;
      text-align: left;
     }
     ul {
  
      //styleName: Body Mobile;
      /* font-family: Fira Sans; */
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0.05em;
      text-align: left;

     }
    }

    .left {
      max-width: 100%;
      padding-left: unset;
    }
    .right {
      max-width: 100%;
    }
    .links {
      width: 100%;
      margin: 25px  0;
      a{

      //styleName: Body Mobile;
      /* font-family: Fira Sans; */
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: 0.05em;
      text-align: left;

      }
    }

    h2 {
      font-size: 20px;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: 0.05em;
      text-align: left;
    }
  }
`;

export default function SingleSpeaker({ singleSpeaker }) {
  const speaker = singleSpeaker?.data[0]?.attributes;
  const quotes = singleSpeaker.data[0].attributes?.quotes;
  const products = singleSpeaker.data[0]?.attributes?.products?.data;
  const relatedSpeakers = singleSpeaker?.data[0]?.attributes.related_speakers.data;
  const videos = singleSpeaker?.data[0]?.attributes.videos;
  const photos = singleSpeaker.data[0]?.attributes?.publicity_packet?.data?.[0]?.attributes?.url;
  const router = useRouter();

  const [showAbout, setShowAbout] = useState(true);

  let styleImage = {
    backgroundImage: "url(" + speaker?.photo.data?.attributes.url + ")",
  }

  const handleTopicClick = (id, name) => {

    router.push({
      pathname: '/speakers',
      query: { topic: name.replace(" ", "-"), id: id },
    })

  }

  return (
    <>
      <Head>
        <title>SpeakOut | {speaker?.fullName}</title>
        <meta property="og:title" content={`SpeakOut | ${speaker.fullName}`} />
        <meta property="og:description" content={speaker?.tagLine} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://www.speakoutnow.org/speakers/${speaker.slug}`} />
        <meta property="og:image" content={speaker?.photo.data?.attributes.url} />
      </Head>
      <SpeakerHeroStyles>
        <div className="speaker-info page-detail">

          <div className="return-link">
            <Link href="/speakers">Back to All Speakers</Link>
          </div >
          <div className='mobile-image'>
            <Image
              src={speaker?.photo.data?.attributes.url}
              alt={speaker?.fullName}
              width={125}
              height={125}
            />
          </div>
          <h1>{speaker?.fullName}</h1>
          <p>{speaker?.tagLine}</p>
          <div className="buttons">
            <ButtonStyles theme={{ main: "#00AFB5;" }}>
              <Link href="/inquiry-form">
                Request Info
              </Link>
            </ButtonStyles>

            {photos && (
              <ButtonStyles theme={{ main: "#00AFB5;" }} style={{ display: photos === null ? "none" : "flex" }}>
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
              </ButtonStyles>
            )}

          </div>
        </div>
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
      <ContainerBox>
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
                  <div onClick={() => handleTopicClick(topic?.id, topic?.attributes?.name)} key={topic.id} style={{ backgroundColor: "#F2F2F2" }}>{topic?.attributes?.name}</div>
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

            <Script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer />
            <div className="elfsight-app-1633c2e5-e526-4994-abb0-0089aacdd09c"></div>
          </div>
        </SpeakerInfoStyles>
      </ContainerBox>

      <VideosBox videos={videos.slice(0, 5)} />

      <SpeakerQuotesCarousel quotes={quotes} />
      {/* Display OurStore component only if Speaker has a related Product */}
      <ContainerBox>
        <>
          {products.length === 0 ? null : <OurStore products={products} />}
          {relatedSpeakers.length === 0 ? null : <RelatedSpeakers relatedSpeakers={relatedSpeakers} />}
        </>
      </ContainerBox>

    </>
  );
}

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