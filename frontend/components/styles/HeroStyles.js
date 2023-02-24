import styled from 'styled-components';

const HeroStyles = styled.section`
  text-align: center;
  padding: 278px 0 250px;
  background: #30E8BF;
  background: -webkit-linear-gradient(to left, #FF8235, #30E8BF);
  background: linear-gradient(to left, #FF8235, #30E8BF); 
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
`;

export default HeroStyles;