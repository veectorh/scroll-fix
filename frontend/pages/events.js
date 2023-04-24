import Link from 'next/link';
import styled from "styled-components";
import Event from '@/components/Event';
import ButtonStyles from '../components/styles/ButtonStyles';
import { loadAPI } from '@/lib/load-api';
import ContainerBox from '@/components/styles/ContainerBox';
import { device } from '@/components/device';
import Head from 'next/head'

const EventsPageStyle = styled.section`
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
      padding-bottom: 8px;    
    }
  }


  @media ${device.mobileL} {
    padding: 36px 0 0;
  }
`;

const EventsListStyle = styled.div`
    max-width: 1250px; 
  padding-top: 40px;
  margin-bottom: 25px;

  @media ${device.tablet} {
    padding-top: 20px;
  }
`;

const CTASectionStyle = styled.section`
  display: flex;
  gap: 9px;
  justify-content: space-between;
  @media ${device.tablet} {
    flex-direction: column;
  }
`;

const CTAStyleEvents = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  background: linear-gradient(
      rgba(0, 0, 0, 0.55), 
      rgba(0, 0, 0, 0.55)
    ), url('/images/pastevents.png') no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  color: white;
  padding: 80px 4vw;
  h2 {
    font-weight: 400;
    font-size: 36px;
    line-height: 48px;
    text-align: center;
    letter-spacing: 0.03em;
    font-feature-settings: 'liga' off;
    color: #FFFFFF;
    margin: 10px;
  }
  p {
    font-family: 'Fira Sans',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.05em;
    color: #FFFFFF;
    margin: 15px;
  }

  @media ${device.tablet} {
    padding: 40px 4vw;
    h2 {
     
      font-size: 16px;
      font-weight: 500;
      line-height: 20px;
      letter-spacing: 0.085em;
      text-align: center;
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
`;

const CTAStyleStore = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  background: linear-gradient(
      rgba(0, 0, 0, 0.55), 
      rgba(0, 0, 0, 0.55)
    ), url('/images/onlinestorecta.png') no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  color: white;
  padding: 80px 4vw;
  h2 {
    font-weight: 400;
    font-size: 36px;
    line-height: 48px;
    text-align: center;
    letter-spacing: 0.03em;
    font-feature-settings: 'liga' off;
    color: #FFFFFF;
    margin: 10px;
  }
  p {
    font-family: 'Fira Sans',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.05em;
    color: #FFFFFF;
    margin: 10px 0 15px;
  }

  @media ${device.tablet} {
    padding: 40px 4vw;
    h2 {
     
      font-size: 16px;
      font-weight: 500;
      line-height: 20px;
      letter-spacing: 0.085em;
      text-align: center;
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
`;

export default function EventsPage({ events }) {
  return (
    <>
      <ContainerBox>
        <Head>
          <title>SpeakOut | Virtual Events</title>
          <meta property="og:title" content="SpeakOut | Virtual Events"/>
          <meta property="og:description" content="Voices Changing Lives" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.speakoutnow.org/events" />
          <meta property="og:image" content="https://speakout-website.s3.amazonaws.com/speakout_logo_dark_c683312f3e.png" />
        </Head>
        <EventsPageStyle>
          <h1>Virtual Events</h1>
          <p>
            Join us for live virtual events featuring renowned and emerging speakers presenting new, cutting-edge material on race, culture, and politics. Engage with others in accessible and affordable events.
          </p>

          <EventsListStyle>
            {
              events.data.map(event => (
                <Event key={event.id} event={{ event }} />
              ))
            }
          </EventsListStyle>
        </EventsPageStyle>
      </ContainerBox>
      <CTASectionStyle>
        <CTAStyleEvents>
          <h2>Watch Free SpeakOut Virtual Events and Webinars </h2>
          <p>Watch FREE SpeakOut virtual event recordings, focusing on a range of contemporary issues and featuring SpeakOut speakers and artists. Most programs are free to watch; some just $10 to support SpeakOut's ongoing educational work.</p>
          <ButtonStyles theme={{ main: "#00AFB5" }}>
            <a href="https://youtube.com/playlist?list=PLIKi6ujYCSbeCc3rIpM6HUMY_JOQ-5aUe" target="_blank">Learn More</a>
          </ButtonStyles>
        </CTAStyleEvents>
        <CTAStyleStore>
          <h2>SpeakOut Online Store</h2>
          <p>Find recent SpeakOut virtual event recordings in the online store, and support our ongoing educational work. Featuring compelling and transformative presentations and conversations.</p>
          <ButtonStyles theme={{ main: "#00AFB5" }}>
            <Link href="/store">Learn More</Link>
          </ButtonStyles>
        </CTAStyleStore>
      </CTASectionStyle>
    </>
  );
}

export async function getStaticProps() {
  const events = await loadAPI("virtual-events");

  return { props: { events } }
}