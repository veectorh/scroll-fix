import styled from 'styled-components';
import { device } from '../device';
const HeroStyles = styled.section`
  text-align: center;
  padding: 278px 0 250px;
  /* background: #30E8BF;
  background: -webkit-linear-gradient(to left, #FF8235, #30E8BF);
  background: linear-gradient(to left, #FF8235, #30E8BF);  */
  background-color:hsla(181,100%,35%,1);
background-image:
radial-gradient(at 2% 13%, hsla(0,0%,100%,0.1) 0px, transparent 50%),
radial-gradient(at 98% 6%, hsla(181,78%,18%,1) 0px, transparent 50%),
radial-gradient(at 39% 40%, hsla(28,92%,64%,0.67) 0px, transparent 50%),
radial-gradient(at 74% 5%, hsla(181,78%,18%,1) 0px, transparent 50%),
radial-gradient(at 28% 7%, hsla(28,92%,64%,1) 0px, transparent 50%),
radial-gradient(at 19% 70%, hsla(181,100%,35%,1) 0px, transparent 50%);
  h1 {
    font-family: "Oswald", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 80px;
    font-weight: 500;
    letter-spacing: 0.06em;
    font-style: normal;
    color: white;
    margin: 0;
    padding: 0;
    line-height: 119px;
  }
  .sub-text {
    font-family: "Oswald", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 30px;
    font-weight: 500;
    line-height: 44px;
    letter-spacing: 0.085em;
    color: #262626;
    margin: 10px 0 0;
    padding: 0;
  }
  .voices {
    font-family: "Oswald", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 24px;
    font-weight: 400;
    line-height: 36px;
    letter-spacing: 0.085em;
    color: #262626;
    margin: 15px 0 0;
    padding: 0;
  }
  .hero-buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 40px 0;
  }
  
  @media ${device.tablet} {

    padding: 140px 0 40px;

    h1 {
      font-size: 46px;
      font-weight: 500;
      line-height: 68px;
      letter-spacing: 0.05em;
      text-align: center;
    }

    .sub-text {

      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: 0.085em;
      text-align: center;

    }

    .voices {

      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0.05em;
      text-align: center;

    }

    .hero-buttons {
    align-items: center;
    flex-direction: column;
    }
  }

`;

export default HeroStyles;