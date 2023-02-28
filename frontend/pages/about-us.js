import NeedHelp from "@/components/NeedHelp";
import QuotesCarousel from "@/components/QuotesCarousel";
import styled from "styled-components";
import SponsoredProject from "@/components/SponsoredProject";
import ButtonStyles from "@/components/styles/ButtonStyles";
import Link from "next/link";
import SubHeroStyles from '../components/styles/SubHeroStyles';
import { loadSponsoredProjects } from "@/lib/load-sponsored-projects";

const AboutPageStyle = styled.section`
  padding: 50px 0 0;

  h1 {
    font-weight: 400;
    font-size: 60px;
    line-height: 89px;
    letter-spacing: 0.03em;
    color: #F8A151;
    text-transform: uppercase;
    margin: 0;
    padding: 0;
  }
  h3 {
    font-weight: 400;
    font-size: 36px;
    line-height: 53px;
    letter-spacing: 0.03em;
    color: #000000;
  }
  p {
    margin: 0;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.05em;
    color: #000000;
  }
  .intro {
    max-width: 1250px;
    margin: 0 auto;
    padding: 50px 0 50px;
  }
  .history-copy {
    max-width: 1250px;
    margin: 0 auto;
    column-count: 2;
    column-gap: 44px;
    padding-bottom: 40px;
  }
  .cta {
    text-align: center;
    padding-bottom: 80px;
    .buttons {
      display: flex;
      justify-content: center;
      gap: 20px;
    }
  }
`;

const SponsoredProjectsListStyles = styled.div`
  background-color: white;
  padding: 40px 20px 60px;

  h3 { 
    padding-left: 5vw;
    font-weight: 400;
    font-size: 36px;
    line-height: 53px;
    letter-spacing: 0.03em;
    color: #000000;
  }

  .projects {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: 30px;
    row-gap: 40px;
  }

`;

export default function AboutUsPage({ projects }) {
  return (
    <>
      <AboutPageStyle>
        <div className="intro">
          <h1>About Us</h1>
          <p>SpeakOut — The Institute for Democratic Education and Culture is a non-profit, mission-driven speakers agency and education institute.</p>
        </div>
        <SubHeroStyles>
          <h2>Our mission is to encourage critical and imaginative thinking to address the major inequities of our day and transform a fractured world.</h2>
          <p>Our network of speakers, artists, and strategic partners provide experiential learning opportunities and programming through lectures, workshops, professional development and trainings, film screenings, performances and curriculum development. Since our founding in 1990, we have worked with thousands of colleges, universities, K-12 schools and districts, community organizations, government and private sector providing 15,000 programs which advance the humanities and promote critical analysis, creativity, and innovative strategies for 21st-century problem-solving. We have reached over 3 million people nationwide through our network of 35k contacts.</p>
        </SubHeroStyles>
        <h3 className="intro">Our History</h3>
        <p className="history-copy">
          Speak Out was founded in 1990 as part of the non-profit Institute for Social and Cultural Change which included the progressive publishing house South End Press and Z Magazine. Initially, Speak Out was a way to showcase South End Press authors like Howard Zinn, Noam Chomsky, Elizabeth Martinez, Winona LaDuke, among others.
          <br/><br/>
        
          Founder Jean Caiani brought to the work her experience in organizing speaking tours for former CIA agent and whistleblower Philip Agee as well as her years with the United Farms Workers Union where she coordinated tours for Cesar Chavez.
          <br/><br/>
        
          Within several years, it became clear the Speak Out was fullfilling an incredible need by providing progressive speakers in the campus arena and there was growth in the roster - from the initial handful to dozens of speakers, scholars, performing and visual artists, exhibits and films.
          <br/><br/><br/>
        
          Speak Out eventually went on to establish its own 501(c)3 non-profit status as the Institute for Democratic Education and Culture, with an educational mission to educate, inspire and empower young people to become actively engaged in society and to work for social justice.
          <br/><br/>
        
          In addition to the hundreds of lectures and performances organized each year with campuses, companies, community organizations, and government agencies, the organization's work has expanded into new areas as well. Speak Out has been publishing and distributing educational materials, curriculum, and diversity resources. Through our on-line store, Speak Out offers books, DVDs, CDs and webinars. Our online virtual events, featuring our speakers and other thoughtleaders, are powerful, educational and inspiring. Our online E-Course for students, Race, Power, and Privilege, contributes to building an equitable campus culture. Our first short feature film production, The Syed Family Xmas Eve Game Night, had its world premiere at the Toronto International Film Festival and garnering critical and audience praise as it continues on the film festival circuit.
        </p>
        <div className="cta intro">
          <h3>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit</h3>
          <div className="buttons">
            <ButtonStyles theme={{ main: "#00AFB5" }}>
              <Link href="/">Explore Our Speakers</Link>
            </ButtonStyles>
            <ButtonStyles theme={{ main: "#00AFB5" }}>
              <Link href="/">Meet Our Team</Link>
            </ButtonStyles>
          </div >
        </div>
      </AboutPageStyle>
      <QuotesCarousel />
      <SponsoredProjectsListStyles>
        <h3>Our Fiscally-Sponsored Projects</h3>
        <div className="projects">
          {
            projects?.data?.map(project => (
              <SponsoredProject key={project.id} project={project} />
            ))
          }
        </div >
      </SponsoredProjectsListStyles>   
      <NeedHelp />
    </>
  );
}

export async function getStaticProps() {
  const projects = await loadSponsoredProjects();
  return { props: { projects }}
}