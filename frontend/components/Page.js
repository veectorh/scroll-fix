import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import 'node_modules/react-modal-video/scss/modal-video.scss';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Fira Sans';
    src: url('/fonts/FiraSans.ttf') format('ttf');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Oswald';
    src: url('/fonts/Oswald.ttf') format('truetype-variations');
    font-weight: 1 999;
  }
  html {
    --maxWidth: 1440px;
    box-sizing: border-box;
    font-size: 62.5%;
  }
  *,*:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: "Oswald", -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1.6rem;
  }
  h2 {
    font-size: 36px;
    font-weight: 400;
    line-height: 53px;
    letter-spacing: 0.03em;
    color: #262626;
  }
  h3 {
    font-size: 20px;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: 0.085em;
    color: #262626;
  }
  p {
    font-family: "Fira Sans", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.05em;
    color: #262626;
  }
  a {
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }
  button {
    font-family: 'Fira Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

const InnerStyles = styled.div`
  /* max-width: var(--maxWidth); */
  /* margin: 0;
  padding: 0; */
  /* outline: 1px solid red; */
`;

export default function Page({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <InnerStyles>
        {children}
      </InnerStyles>
      <Footer />
    </div>
  );
}