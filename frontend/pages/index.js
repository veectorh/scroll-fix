import { useState } from "react";
import styled from 'styled-components';
import Link from 'next/link';
import { loadFeaturedSpeakers } from '@/lib/load-featured-speakers';
import { loadQuotes } from '@/lib/load-quotes';
import { loadFeaturedProducts } from '@/lib/load-featured-products';
import HeroStyles from '../components/styles/HeroStyles';
import Speaker from '@/components/Speaker';
import SubHeroStyles from '../components/styles/SubHeroStyles';
import FeaturedSpeakersStyles from '../components/styles/FeaturedSpeakersStyles';
import EducationalInstitute from '@/components/EducationalInstitute';
import VideoModal from "@/components/VideoModal";
import QuotesCarousel from '../components/QuotesCarousel';
import OurStore from '../components/OurStore';
import ButtonStyles from '../components/styles/ButtonStyles';
import OurStoreCarousel from '@/components/OurStoreCrousal';
import { device } from '@/components/device';
import ContainerBox from '@/components/styles/ContainerBox';
import Head from 'next/head'

const EducationalIntro = styled.section`
  background: #F2F2F2;
  text-align: center;
  padding: 30px 0 60px;
  p {
    max-width: 898px;
    margin: 0 auto 0px;
  }

  @media ${device.tablet} {
    margin-bottom: 16px;

    h2 {
      //styleName: H1 Mobile;
      font-family: Oswald;
      font-size: 20px;
      font-weight: 500;
      line-height: 28px;
      letter-spacing: 0.085em;
      text-align: center;
   
    }
  }

`;
const OurStoreStyles = styled.section`

  .mobile {
      display: none;
      h2 {
        font-size: 20px;
        font-weight: 500;
        line-height: 28px;
        letter-spacing: 0.085em;
        text-align: center;
        margin-top: 40px;
      }
  }

  .desktop {
    display: flex;
    flex-direction: column;
    align-items: center;
    
  }

  @media ${device.tablet} {
  
    .desktop {
      display: none;
    }
    .mobile {
      display: block;
    }
  }

`;

const Home = ({ featuredSpeakers, quotes, products }) => {
  const [showModal, setShowModal] = useState(false);

  function handleButtonClick() {
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  return (
    <>
      <Head>
        <title>SpeakOut | Voices changing lives</title>
        <meta property="og:title" content="SpeakOut"/>
        <meta property="og:description" content="Voices Changing Lives" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.speakoutnow.org" />
        <meta property="og:image" content="https://speakout-website.s3.amazonaws.com/speakout_logo_dark_c683312f3e.png" />
      </Head>
      <div style={{marginTop: -79}}>
        <HeroStyles>
          <ContainerBox>
            <h1>SPEAKOUT</h1>
            <p className="sub-text">A mission-driven speakers agency and education institute.</p>
            <p className="voices">Voices changing lives.</p>
            <div className="hero-buttons">
              <ButtonStyles theme={{ main: "rgba(9, 88, 91, 0.6)" }}><Link href="/speakers">Explore Our Speakers</Link></ButtonStyles>
              <ButtonStyles theme={{ main: "rgba(9, 88, 91, 0.6)" }}><Link href="/institute">Explore the Institute</Link></ButtonStyles>
              <ButtonStyles theme={{ main: "rgba(9, 88, 91, 0.6)" }} onClick={handleButtonClick}>
                <a>Watch Our Video <span></span></a>
              </ButtonStyles>
              {showModal && (
                <VideoModal videoSrc="https://www.youtube.com/watch?v=op0SFgqziP4" onClose={handleCloseModal} />
              )}
            </div>
          </ContainerBox>
        </HeroStyles>
        <SubHeroStyles>
          <h2>We are SpeakOut </h2>
          <h2 className="sub">The Institute for Democratic Education and Culture</h2>
          <div className="three-column">
            <div className="item">
              <h3>Our Mission</h3>
              <p>SpeakOut&apos;s mission is to encourage critical and imaginative thinking to address the major inequities of our day and transform a fractured world.</p>
            </div>
            <div className="item" id="borders">
              <h3>Our Learning Opportunities</h3>
              <p>Our network of speakers, artists, and strategic partners provide experiential learning opportunities through lectures, workshops, film screenings, performances, consulting and professional development.</p>
            </div>
            <div className="item">
              <h3>Our Network</h3>
              <p>SpeakOut works with colleges, universities, schools, organizations, government agencies and the private sector, promoting critical analysis, creativity and innovative strategies for 21st century problem-solving.</p>
            </div>
          </div>
          <ButtonStyles theme={{ main: "#00AFB5" }}><Link href="/about-us">learn more about speakout</Link></ButtonStyles>
        </SubHeroStyles>
        <ContainerBox>
          <FeaturedSpeakersStyles>
            <div className="featured-intro">
              <h2>Featured Speakers</h2>
              <p>SpeakOut&apos;s mission is to encourage critical and imaginative thinking to address the major inequities of our day and transform a fractured world.</p>
              <ButtonStyles theme={{ main: "#00AFB5" }}><Link href="/speakers">Explore Our Speakers</Link></ButtonStyles>
            </div>
            <div className="featured-images">
              {featuredSpeakers.map(speaker => (
                <Speaker key={speaker.id} speaker={speaker} />
              ))
              }
            </div>
          </FeaturedSpeakersStyles>
        </ContainerBox>

        <EducationalIntro>
          <ContainerBox>
            <h2>Education Institute</h2>
            <p>A digital destination that empowers young people, educators, and professionals through transformative programming featuring our speakers. The goal of our educational programs is to create a more just society.</p>
          </ContainerBox>
        </EducationalIntro>
        <EducationalInstitute />
        <QuotesCarousel quotes={quotes.data} />
        <OurStoreStyles>
          <ContainerBox>
            <div className='desktop'>
              <OurStore products={products} />
            </div>
          </ContainerBox>
          <div className='mobile'>
            <OurStoreCarousel products={products} />
          </div>
        </OurStoreStyles>
      </div>
    </>
  );
};

// Return 4 Random Featured Speakers
// function getRandomSpeakers(speakersData) {
//   const shuffledSpeakers = speakersData.data.sort(() => Math.random() - 0.5);
//   return shuffledSpeakers.slice(0, 4);
// }

export async function getStaticProps() {
  const featuredSpeakers = await loadFeaturedSpeakers();
  const quotes = await loadQuotes();
  const products = await loadFeaturedProducts();

  return { props: { featuredSpeakers, quotes, products } }
}

export default Home;