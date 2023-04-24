import Link from 'next/link';
import styled from 'styled-components';
import ButtonStyles from './styles/ButtonStyles';
import { device } from './device';

const ThreeLinkStyles = styled.section`
  background: #F2F2F2;
  .links {
    display: flex;
    justify-content: space-around;
    gap: 20px;
    /* padding: 0 5px; */
    .link {
      padding: 20px 40px 30px;
    }
    .link:nth-of-type(-n+2) {
      border-right: 5px solid white;
      height: auto;
    }
    h4 {
      font-family: 'Oswald';
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 0.05em;
      color: #2A2A2A;
      margin: 0;
    }
    p {
      margin: 0;
      padding: 10px 0 30px;
      color: #262626;
    }
  }
  @media ${device.tablet} {
    .links {
      flex-direction: column;
      gap: 0px;
      .link {
      padding: 20px 30px 20px;
      }
      .link:nth-of-type(-n+2) {
        border-right: none;
        border-bottom: 5px solid white;
      }
      h4 {
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        letter-spacing: 0.085em;
        text-align: left;
      }
      p {
        //styleName: Body Mobile;
        /* font-family: Fira Sans; */
        font-size: 12px;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0.05em;
        text-align: left;
        padding: 6px 0 24px;
      }
    }
  }
`;

export default function ThreeLink() {
  return (
    <ThreeLinkStyles>
      <div className="links">
        <div className="link">
          <h4>Performances</h4>
          <p>Experience the power of live performance from top SpeakOut artist/activists. Solo-shows, spoken word and poetry, comedy, and film - each program brings vital and inspiring messages to campuses and communities. Join us for a transformative experience, available in person or virtually.</p>
          <ButtonStyles theme={{ main: "#00AFB5;" }}>
            <Link href="/performances">See Performances</Link>
          </ButtonStyles>
        </div>
        <div className="link">
          <h4>Exhibits</h4>
          <p>Book one of SpeakOut's award-winning exhibitions that explore history, race, family diversity, sexual orientation gender identity, and culture. Whether presented in person or virtually, each powerful exhibit offers an unforgettable educational experience.</p>
          <ButtonStyles theme={{ main: "#00AFB5;" }}>
            <Link href="/exhibits">See Exhibits</Link>
          </ButtonStyles>
        </div>
        <div className="link">
          <h4>Film Programs</h4>
          <p>Book a film program featuring SpeakOut's award-winning filmmakers - in person or virtually. Explore a variety of cultural and social issues through powerful and thought-provoking films, accompanied by in-depth discussions with the filmmakers themselves. A unique and enriching experience!</p>
          <ButtonStyles theme={{ main: "#00AFB5;" }}>
            <Link href="/film-programs">See Film Programs</Link>
          </ButtonStyles>
        </div>
      </div>
    </ThreeLinkStyles>
  );
};