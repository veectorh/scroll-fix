import { useState } from "react";
import Head from 'next/head'
import Link from 'next/link';
import { loadFeaturedSpeakers } from '@/lib/load-featured-speakers';
import { loadQuotes } from '@/lib/load-quotes';
import { loadFeaturedProducts } from '@/lib/load-featured-products';
import { loadAPI } from '@/lib/load-api';
import Hero from "@/components/Hero";
import SubHero from "@/components/SubHero";
import EducationalInstitute from '@/components/EducationalInstitute';
import Speaker from '@/components/Speaker';
import QuotesCarousel from '../components/QuotesCarousel';
import OurStore from '../components/OurStore';
import OurStoreCarousel from '@/components/OurStoreCrousal';
import EducationalIntro from "@/components/styles/EducationalIntro";
import FeaturedSpeakersStyles from '../components/styles/FeaturedSpeakersStyles';
import ButtonStyles from '../components/styles/ButtonStyles';
import OurStoreStyles from '../components/styles/OurStoreStyles';
import ContainerBox from '@/components/styles/ContainerBox';
import styled from 'styled-components';
import { device } from '../components/device';

const HeroScroll = styled.div`
  height: 95vh;
  overflow-y: scroll;

  @media ${device.tablet} {
    height: unset;
    overflow-y: unset;
  }
`;

const Home = ({ featuredSpeakers, quotes, products, events }) => {
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
        <HeroScroll>
          <Hero showModal={showModal} onClick={handleButtonClick} onClose={handleCloseModal} />
          <SubHero />
        </HeroScroll>
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
        <EducationalInstitute events={events} />
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

export async function getStaticProps() {
  const featuredSpeakers = await loadFeaturedSpeakers();
  const quotes = await loadQuotes();
  const products = await loadFeaturedProducts();
  const events = await loadAPI("virtual-events");

  return { props: { featuredSpeakers, quotes, products, events } }
}

export default Home;