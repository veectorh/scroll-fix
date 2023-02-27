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
      <a href="https://www.paypal.com/us/fundraiser/charity/2248447" target="_blank" rel="noreferrer" style={{ marginLeft:15 }}>
        <Image
          src="/images/donate.png"
          alt="Donate"
          width="95"
          height="44"
        />
      </a>
    </SocialStyles>
  )

}