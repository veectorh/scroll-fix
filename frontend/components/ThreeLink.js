import Link from 'next/link';
import styled from 'styled-components';
import ButtonStyles from './styles/ButtonStyles';

const ThreeLinkStyles = styled.section`
  background: #F2F2F2;
  .links {
    display: flex;
    justify-content: space-around;
    gap: 20px;
    padding: 0 5px;
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
`;

export default function ThreeLink() {
  return (
    <ThreeLinkStyles>
      <div className="links">
        <div className="link">
          <h4>Performances</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          <ButtonStyles theme={{ main: "#00AFB5;" }}>
            <Link href="/ecourse">See Performances</Link>
          </ButtonStyles>
        </div>
        <div className="link">
          <h4>Exhibits</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          <ButtonStyles theme={{ main: "#00AFB5;" }}>
            <Link href="/ecourse">See Exhibits</Link>
          </ButtonStyles>
        </div>
        <div className="link">
          <h4>Film Programs</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          <ButtonStyles theme={{ main: "#00AFB5;" }}>
            <Link href="/ecourse">See Film Programs</Link>
          </ButtonStyles>
        </div>
      </div>
    </ThreeLinkStyles>
  );
};