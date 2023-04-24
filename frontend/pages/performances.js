import styled from "styled-components";
import NeedHelp from "@/components/NeedHelp";
import { loadPerformances } from "@/lib/load-performances";
import Performance from "@/components/Performance";
import { device } from "@/components/device";
import ContainerBox from "@/components/styles/ContainerBox";
import Head from 'next/head'
import { useState } from "react";

const PerformancesPageStyle = styled.section`
  padding: 100px 0 0;
  max-width: 1250px;
  margin: 0 auto 40px;
  background-color: white;
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
      /* font-family: Fira Sans; */
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

const PerfomancesListStyle = styled.div`
    max-width: 1250px; 
  padding-top: 40px;
`;

export default function PerformancesPage({ performances }) {
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
          <title>SpeakOut | Performances</title>
          <meta property="og:title" content="SpeakOut | Performances"/>
          <meta property="og:description" content="Voices Changing Lives" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.speakoutnow.org/performances" />
          <meta property="og:image" content="https://speakout-website.s3.amazonaws.com/speakout_logo_dark_c683312f3e.png" />
      </Head>
      <ContainerBox>
        <PerformancesPageStyle>
          <div className="page-detail">
            <h1>Performances</h1>
            <p>Experience the power of live performance from top SpeakOut artist/activists. Solo-shows, spoken word and poetry, comedy, and film - each program brings vital and inspiring messages to campuses and communities. Join us for a transformative experience, available in person or virtually.</p>
          </div>
          <PerfomancesListStyle>
            {
              performances.data.map(performance => (
                <Performance key={performance.id} performance={{ performance }} onClose={handleCloseModal} onClick={handleButtonClick} showModal={showModal} />
              ))
            }
          </PerfomancesListStyle>
        </PerformancesPageStyle>
      </ContainerBox>
      <NeedHelp />
    </>
  );
}

export async function getStaticProps() {
  const performances = await loadPerformances();
  return { props: { performances } }
}
