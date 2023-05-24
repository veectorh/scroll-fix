import Link from "next/link";
import ButtonStyles from "./styles/ButtonStyles";
import SubHeroStyles from '../components/styles/SubHeroStyles';

export default function SubHero() {
  return (
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
  )
}