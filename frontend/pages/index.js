import { useEffect, useState } from 'react'
import Link from 'next/link';
import HeroStyles from '../components/styles/HeroStyles';
import ButtonStyles from '../components/styles/ButtonStyles';
import SubHeroStyles from '../components/styles/SubHeroStyles';
import FeaturedSpeakersStyles from '../components/styles/FeaturedSpeakersStyles';
import EducationalInstitute from '@/components/EducationalInstitute';
import QuotesCarousel from '../components/QuotesCarousel';
import OurStore from '../components/OurStore';
import { loadFeaturedSpeakers } from '@/lib/load-featured-speakers';
import Speaker from '@/components/Speaker';
import styled from 'styled-components';

const EducationalIntro = styled.div`
  background: #F2F2F2;
  text-align: center;
  padding: 30px 0 60px;
  p {
    max-width: 898px;
    margin: 0 auto 0px;
  }
`;

const Home = ({ featuredSpeakers, error }) => {
  const speakers = getRandomSpeakers(featuredSpeakers);
  return (
    <div style={{marginTop: -79}}>
      <HeroStyles>
        <h1>SPEAKOUT</h1>
        <p className="sub-text">A mission-driven speakers agency and education institute.</p>
        <p className="voices">Voices changing lives.</p>
        <div className="hero-buttons">
          <ButtonStyles theme={{ main: "rgba(9, 88, 91, 0.6)" }}><Link href="/speakers">Explore Our Speakers</Link></ButtonStyles>
          <ButtonStyles theme={{ main: "rgba(9, 88, 91, 0.6)" }}><Link href="/institute">Explore the Institute</Link></ButtonStyles>
          <ButtonStyles theme={{ main: "rgba(9, 88, 91, 0.6)" }}><Link href="#">Watch Our Video <span></span></Link></ButtonStyles>
        </div>
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
      <FeaturedSpeakersStyles>
        <div className="featured-intro">
          <h2>Featured speakers</h2>
          <p>SpeakOut&apos;s mission is to encourage critical and imaginative thinking to address the major inequities of our day and transform a fractured world.</p>
          <ButtonStyles theme={{ main: "#00AFB5" }}><Link href="/speakers">Explore Our Speakers</Link></ButtonStyles>
        </div>
        <div className="featured-images">
          {/* { speakers.map(speaker => (
              <Speaker key={speaker.id} speaker={speaker} />
            ))
          } */}
        </div>
      </FeaturedSpeakersStyles>


      <EducationalIntro>
        <h2>Educational Institute</h2>
        <p>A digital destination that empowers young people, educators, and professionals through transformative programming featuring our speakers. The goal of our educational programs is to create a more just society.</p>
      </EducationalIntro>
      <EducationalInstitute />
      <QuotesCarousel />
      <OurStore />
    </div>
  );
};

// Return 4 Random Featured Speakers
function getRandomSpeakers(speakersData) {
  const shuffledSpeakers = speakersData.sort(() => Math.random() - 0.5);
  return shuffledSpeakers.slice(0, 4);
}

export async function getStaticProps() {
  const featuredSpeakers = await loadFeaturedSpeakers();

  return { props: { featuredSpeakers } }
}

export default Home;