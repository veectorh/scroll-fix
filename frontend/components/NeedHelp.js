import Link from 'next/link';
import styled from 'styled-components';
import ButtonStyles from './styles/ButtonStyles';

const NeedHelpStyles = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
  background: rgba(0, 0, 0, 0.9);
  padding: 40px 0 45px;
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
`;

export default function NeedHelp() {
  return (
    <NeedHelpStyles>
      <h3>Need Help <br/>Finding a Speaker?</h3>
      <ButtonStyles theme={{ main: "#00AFB5;" }}>
        <Link href="/ecourse">Let Us Help</Link>
      </ButtonStyles>
    </NeedHelpStyles>
  );
};