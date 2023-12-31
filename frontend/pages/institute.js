import EducationalInstitute from "@/components/EducationalInstitute";
import ContainerBox from "@/components/styles/ContainerBox";
import styled from "styled-components";
import { device } from "@/components/device";
import Head from 'next/head'
import { loadAPI } from '@/lib/load-api';

const InstitutePageStyle = styled.section`
  padding: 100px 0 0;
  max-width: 1250px;
  margin: 0 auto 40px;
  h1 {
    font-weight: 400;
    font-size: 60px;
    line-height: 89px;
    letter-spacing: 0.03em;
    color: #F8A151;
    text-transform: uppercase;
    margin: 0;
  }
  .filter-description {
    display: flex;
    align-items: baseline;
    gap: 12px;
    margin: 40px 0 20px;
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
  }

  @media ${device.tablet} {
    padding: 50px 0 0;

    h1 {
     
      font-size: 30px;
      font-weight: 500;
      line-height: 36px;
      letter-spacing: 0.05em;
      text-align: left;      
    }
    
  }

  @media ${device.mobileL} {
    padding: 36px 0 0;
  }
`;

export default function InstitutePage({ events }) {
  return (
    <>
      <ContainerBox>
        <Head>
          <title>SpeakOut | Institute </title>
          <meta property="og:title" content="SpeakOut | Institute"/>
          <meta property="og:description" content="Voices Changing Lives" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.speakoutnow.org/institute" />
          <meta property="og:image" content="https://speakout-website.s3.amazonaws.com/speakout_logo_dark_c683312f3e.png" />
        </Head>
        <InstitutePageStyle>
          <h1>EDUCATION INSTITUTE</h1>
          <p>A digital destination that empowers young people, educators, and professionals through transformative programming featuring our speakers. The goal of our educational programs is to create a more just society.</p>
        </InstitutePageStyle>
      </ContainerBox>
      <EducationalInstitute events={events} />
    </>
  );
}

export async function getStaticProps() {
  const events = await loadAPI("virtual-events");

  return { props: { events } }
}