import styled from "styled-components";
import NeedHelp from "@/components/NeedHelp";
import FilmProgram from "@/components/FilmProgram";
import { loadAPI } from "@/lib/load-api";
import { device } from "@/components/device";
import ContainerBox from "@/components/styles/ContainerBox";
import Head from 'next/head'
import { useState } from "react";

const FilmProgramsPageStyle = styled.section`
  padding: 100px 0 0;
  max-width: 1250px;
  margin: 0 auto 40px;
  background-color: white;
  
  .page-detail {

  }
  h1 {
    font-weight: 400;
    font-size: 60px;
    line-height: 89px;
    letter-spacing: 0.03em;
    color: #F8A151;
    text-transform: uppercase;
    margin: 0;
  }
  h4 {
    font-family: 'Oswald';
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.05em;
    color: #2A2A2A;
    margin: 0;
  }
  p {
    color: #2A2A2A;
    margin: 0;
    max-width: 910px;
  }


  @media ${device.tablet} {
    padding: 50px 0 0;

    h1 {
      font-size: 30px;
      font-weight: 500;
      line-height: 36px;
      letter-spacing: 0.05em;
      text-align: left;  
      margin-bottom : 8px;
    }

    p {
      //styleName: Body Mobile;
      font-family: Fira Sans;
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0.05em;
      text-align: left;
    }
  }

  @media ${device.mobileL} {
    padding: 36px 0 0;
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

const FilmProgramListStyle = styled.div`
    max-width: 1250px; 
  padding-top: 40px;
  
  @media ${device.tablet} {
    padding-top: 20px;
  }
`;

export default function FilmProgramsPage({ films }) {
  const [showModal, setShowModal] = useState(false);

  function handleButtonClick() {
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  return (
    <>
      <ContainerBox>
        <Head>
          <title>SpeakOut | Film Programs</title>
          <meta property="og:title" content="SpeakOut | Film Programs"/>
          <meta property="og:description" content="Voices Changing Lives" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.speakoutnow.org/film-programs" />
          <meta property="og:image" content="https://speakout-website.s3.amazonaws.com/speakout_logo_dark_c683312f3e.png" />
        </Head>
        <FilmProgramsPageStyle>
          <div className="page-detail">
            <h1>Film Programs</h1>
            <p>Book a film program featuring SpeakOut's award-winning filmmakers - in person or virutally. Explore a variety of cultural and social issues through powerful and thought-provoking films, accompanied by in-depth discussions with the filmmakers themselves. A unique and enriching experience!</p>
          </div>
          <FilmProgramListStyle>
            {
              films.data.map(film => (
                <FilmProgram key={film.id} film={{ film }} onClose={handleCloseModal} onClick={handleButtonClick} showModal={showModal} />
              ))
            }
          </FilmProgramListStyle>
        </FilmProgramsPageStyle>
      </ContainerBox>
      <NeedHelp />
    </>
  );
}

export async function getStaticProps() {
  const films = await loadAPI("film-programs");
  return { props: { films } }
}
