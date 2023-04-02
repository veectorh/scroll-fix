import styled from 'styled-components';
import { device } from '../device';
const EducationalInstituteStyles = styled.section`
  background: #F2F2F2;
  text-align: center;
  padding: 0;
  p {
    max-width: 898px;
    margin: 0 auto 66px;;
  }

  .copy-image {
    display: flex;
    align-items: center;
    background: white;
    /* margin-bottom: -4px; */
    height: 101vh;
    
    .copy {      
      .copy-container {
        max-width: 353px;
        margin: 0 auto;
        text-align: left;
      }
    }
    .image {
      height: 101vh;
      img {
        position: relative !important;
        object-fit: cover;
      }
    }
  }

  .copy-image:nth-child(even) {
    flex-direction: row-reverse;
  }

  .copy-image > * {
    flex-basis: 100%
  }

  @media ${device.tablet} {
    .copy-image {
      flex-direction: column;
      height: fit-content;
      gap: 24px;
      .image {
        width: 100%
      }
      .copy {      
      .copy-container {
        max-width: 100%;
      }
      }
    }

    p {
    width: 100%;
    max-width: 100%;
    margin: 0 auto 33px;;
    }

    .copy-image:nth-child(even) {
      flex-direction: column;
    }

    .copy-image:first-child {
     h2{
       margin-top: 0px;
     }
    }

    h2 {
      //styleName: H1 Mobile;
      font-family: Oswald;
      font-size: 20px;
      font-weight: 500;
      line-height: 28px;
      letter-spacing: 0.085em;
      text-align: left;
      
    }

  }
`;

export default EducationalInstituteStyles;