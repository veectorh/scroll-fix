import Image from 'next/image';
import styled from 'styled-components';

const SocialStyles = styled.nav`
  display: flex;
  align-items: center;
  padding: 15px 0px;
  a {
    margin: 0 5px;
  }
`;

const DonateButtonStyle = styled.div`
  a {
    display:flex;
    align-items: center;
    outline: none;
    border: none;
    height: 44px;
    text-align: center;
    padding: 0 20px;
    background: #FFFFFF;
    color: #D66740;
    font-size: 16px;
    font-family: "Oswald", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 500;
    height: 44px;
    line-height: 24px;
    letter-spacing: 0.085em;
    text-decoration: none;
    text-transform: uppercase;
    margin-bottom: 5px;
    -moz-border-radius: 30px;
    -webkit-border-radius: 30px;
    cursor: pointer;
  }

  a:hover {
    color: #FFFFFF;
    background: #000000;
  }
`;

export default function Social() {
  return (
    <SocialStyles>
      <a href="https://www.facebook.com/SpeakOutSpeakers" target="_blank" rel="noreferrer">
        <Image
          src="/images/facebook.png"
          alt="Facebook"
          width="9"
          height="17"
        />
      </a>
      <a href="https://www.instagram.com/SpeakOutspeakers" target="_blank" rel="noreferrer">
        <Image
          src="/images/instagram.png"
          alt="Instagram"
          width="16"
          height="16"
        />
      </a>
      <a href="https://twitter.com/SpeakOutIDEC" target="_blank" rel="noreferrer">
        <Image
          src="/images/twitter.png"
          alt="Twitter"
          width="18"
          height="15"
        />
      </a>
      <DonateButtonStyle>
        <a href="https://www.paypal.com/us/fundraiser/charity/2248447" target="_blank" rel="noreferrer" style={{ marginLeft:15 }}>
          DONATE
        </a>
      </DonateButtonStyle>
    </SocialStyles>
  )
}