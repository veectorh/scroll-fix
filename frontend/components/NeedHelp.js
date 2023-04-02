import Link from 'next/link';
import styled from 'styled-components';
import ButtonStyles from './styles/ButtonStyles';
import { device } from './device';
const NeedHelpStyles = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
  background: rgba(0, 0, 0, 0.9);
  padding: 40px 20px 45px;
  h3 {
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 400;
    font-size: 50px;
    line-height: 58px;
     letter-spacing: 0.03em;
    text-transform: uppercase;
    color: #00AFB5;
    margin: 0;
  }

  @media ${device.tablet} {
    flex-direction: column;
    align-items: flex-start;
    gap: 50px;
    padding: 20px 40px 25px;

    h3 {
     
      font-size: 30px;
      font-weight: 400;
      line-height: 40px;
      letter-spacing: 0.03em;
      text-align: left;
    }

    
  }
  @media ${device.mobileL} {
    gap: 30px;
  }

`;

export default function NeedHelp() {
  return (
    <NeedHelpStyles>
      <h3>Need Help <br/>Finding a Speaker?</h3>
      <ButtonStyles theme={{ main: "#00AFB5;" }}>
        <Link href="/inquiry-form">Let Us Help</Link>
      </ButtonStyles>
    </NeedHelpStyles>
  );
};