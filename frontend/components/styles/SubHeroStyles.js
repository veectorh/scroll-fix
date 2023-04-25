import styled from 'styled-components';
import { device } from '../device';

const SubHeroStyles = styled.section`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 185px 0;
  background: linear-gradient(
      rgba(0, 0, 0, 0.55), 
      rgba(0, 0, 0, 0.55)
    ), url('/images/hero-image.png') no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-attachment: fixed;
  color: white;

  h2 {
    font-family: "Fira Sans",-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
    font-weight: 600;
    font-size: 40px;
    line-height: 48px;
    text-align: center;
    letter-spacing: 0.03em;
    color: #38F0F0;
    margin: 0;
  }
  .sub {
    margin-top: 15px;
    font-weight: 400;
    font-size: 34px;
    line-height: 41px;
    color: #FFFFFF;
  }

  .white {
    color: white;
  }
  .about {
    max-width: 990px;
    padding-bottom: 30px;
  }

  .three-column {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 40px;
    margin-bottom: 60px;

    .item {
      max-width: 300px;
      text-align: center;

      h3 {
        color: white;
      }
      p {
        color: white;
      }
    }

    #borders {
      width: 350px !important;
      position:relative;
    }

    #borders:after {
      content: '';
      position: absolute;
      top: 35px;
      left: -20px;
      right: -20px;
      bottom: 30px;
      border-left: white 1px solid;
      border-right: white 1px solid;
    }
  }

  @media ${device.tablet} {
    padding: 43px 48px;

    h2 {
    /* font-family: Fira Sans; */
    font-size: 24px;
    font-weight: 600;
    line-height: 28px;
    letter-spacing: 0.03em;
    text-align: center;
    }

    .about {
      /* padding-bottom: 0px;   */
      text-align: center;
    }

    .three-column {
      gap: 40px;
      flex-direction: column;
      #borders:after {
      content: '';
      top: -15px;
      left: -20px;
      right: -20px;
      bottom: -15px;
      border-left: none;
      border-right: none;
      border-top: white 1px solid;
      border-bottom: white 1px solid;
    }
    }
  }
`;

export default SubHeroStyles;