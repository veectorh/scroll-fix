import NeedHelp from "@/components/NeedHelp";
import QuotesCarousel from "@/components/QuotesCarousel";
import styled from "styled-components";
import SponsoredProject from "@/components/SponsoredProject";
import ButtonStyles from "@/components/styles/ButtonStyles";
import Link from "next/link";
import SubHeroStyles from '../components/styles/SubHeroStyles';
import { loadSponsoredProjects } from "@/lib/load-sponsored-projects";
import { loadQuotes } from "@/lib/load-quotes";
import { device } from "@/components/device";

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
  .history {
    max-width: 1250px;
    margin: 0 auto;
    padding: 60px 0 20px;
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

  @media ${device.tablet} {
    padding: 25px 0 0;

    h1 {
      font-family: Oswald;
      font-size: 30px;
      font-weight: 500;
      line-height: 36px;
      letter-spacing: 0.05em;
      text-align: left;   
      margin-bottom: 5px ;
    }

    .intro, .history {
      padding: 25px 0 25px;
    }
    .history-copy {
      column-count: 1;
    }
  }

  @media ${device.mobileL} {
    padding: 36px 0 0;

    .intro {
      padding-top: 0px;
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
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 40px;
    padding: 0 5vw;

    img{
    width: 100%;
    height: auto;
    }
  }

  @media ${device.tablet} {
    padding: 8px 0px 40px;

    h3 {
      //styleName: H1 Mobile;
      padding-left: 0px;
      font-family: Oswald;
      font-size: 20px;
      font-weight: 500;
      line-height: 28px;
      letter-spacing: 0.085em;
      text-align: left;
    }

    .projects {
      row-gap: 30px;
      padding: 0px;
    }
  }
`;

export default function AboutUsPage({ projects, quotes }) {
  return (
    <>
      <AboutPageStyle>
        <div className="intro">
          <h1>About Us</h1>
          <p>SpeakOut — The Institute for Democratic Education and Culture is a non-profit, mission-driven speakers agency and education institute.</p>
        </div>
        <SubHeroStyles>
          <h2 className="about">Our mission is to encourage critical and imaginative thinking to address the major inequities of our day and transform a fractured world.</h2>
          <p className="about white">Our network of speakers, artists, and strategic partners provide experiential learning opportunities and programming through lectures, workshops, professional development and trainings, film screenings, performances and curriculum development. Since our founding in 1990, we have worked with thousands of colleges, universities, K-12 schools and districts, community organizations, government and private sector providing 15,000 programs which advance the humanities and promote critical analysis, creativity, and innovative strategies for 21st-century problem-solving. We have reached over 3 million people nationwide through our network of 35k contacts.</p>
        </SubHeroStyles>
        <h3 className="history">Our History</h3>
        <p className="history-copy">
          SpeakOut (501c3) was founded in 1990 with the goal of showcasing progressive authors and speakers, such as Howard Zinn, Noam Chomsky, Elizabeth Martinez, and Winona LaDuke. Over the years, our roster has grown to include dozens of speakers, scholars, performing and visual artists, exhibits, and films, all working to educate, inspire, and empower young people and others to become actively engaged in society and to work for social justice. Our roster of speakers and artists includes some of the most prominent and influential figures in their fields.<br /><br />

          The organization was founded by Jean Caiani, who brought with her experience in organizing speaking tours for former CIA agent and whistleblower Philip Agee, as well as her years of service with the United Farm Workers Union, where she coordinated tours for Cesar Chavez. SpeakOut quickly became a go-to resource for those seeking progressive speakers and artists to engage with on campuses and beyond.

          In the years since its founding, SpeakOut has grown its roster to include dozens of speakers, scholars, performing and visual artists, exhibits, and films, all dedicated to educating, inspiring, and empowering young people and others to become actively engaged in society and to work towards social justice. Among its speakers and artists are some of the most prominent and influential figures in their fields, ensuring that SpeakOut is always at the forefront of progressive discourse.<br /><br />

          In addition to organizing hundreds of lectures and performances each year, SpeakOut has also expanded its programming and impact through the Education Institution, which offers virtual events, e-courses, the annual Summer Institute, films and film programs, and an online store and resources. By leveraging innovative programming and our incredible network, SpeakOut is able to bring its mission of promoting social justice and progressive change to an ever-widening audience.
        </p>

        <div className="cta intro">
          <h3>Join a movement of voices changing lives</h3>
          <div className="buttons">
            <ButtonStyles theme={{ main: "#00AFB5" }}>
              <Link href="/speakers">Explore Our Speakers</Link>
            </ButtonStyles>
            <ButtonStyles theme={{ main: "#00AFB5" }}>
              <Link href="/our-team">Meet Our Team</Link>
            </ButtonStyles>
          </div >
        </div>
      </AboutPageStyle>
      <QuotesCarousel quotes={quotes.data} />
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
  const quotes = await loadQuotes();
  return { props: { projects, quotes } }
}