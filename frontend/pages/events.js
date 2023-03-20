import Link from 'next/link';
import styled from "styled-components";
import Event from '@/components/Event';
import ButtonStyles from '../components/styles/ButtonStyles';
import { loadAPI } from '@/lib/load-api';

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
`;

const EventsListStyle = styled.div`
  max-width: 1258px;
  padding-top: 40px;
  margin-bottom: 25px;
`;

const CTASectionStyle = styled.section`
  display: flex;
  gap: 9px;
  justify-content: space-between;
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
    font-family: 'Fira Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.05em;
    color: #FFFFFF;
    margin: 15px;
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
    font-family: 'Fira Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.05em;
    color: #FFFFFF;
    margin: 10px 0 15px;
  }
`;

export default function EventsPage({ events}) {
  return (
    <>
      <EventsPageStyle>
        <h1>Virtual Events</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin fringilla sagittis. Nunc ultrices turpis eget nunc consequat vulputate. Donec libero magna, tincidunt nec sapien ut, porttitor gravida tortor.
        </p>

        <EventsListStyle>
          {
            events.data.map(event => (
              <Event key={event.id} event={{ event }} />
            ))
          }
        </EventsListStyle>
      </EventsPageStyle>
      <CTASectionStyle>
        <CTAStyleEvents>
          <h2>Watch Past SpeakOut Virtual Events and Webinars</h2>
          <p>Watch past SpeakOut virtual programs, focusing on a range of contemporary issues and featuring SpeakOut speakers and artists. Most programs are free to watch; some just $10 to support SpeakOut's ongoing educational work.</p>
          <ButtonStyles theme={{ main: "#00AFB5" }}>
            <Link href="/#">Learn More</Link>
          </ButtonStyles>
        </CTAStyleEvents>
        <CTAStyleStore>
          <h2>SpeakOut Online Store</h2>
          <p>Shop social and racial justice books, films, resources, webinars, even coloring books and a game! Great gift-giving ideas for people of all ages! Plus check out our special end-of-year virtual events package! And your purchase supports SpeakOut's social justice education efforts (not a billionaire's excursions to space)!</p>
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