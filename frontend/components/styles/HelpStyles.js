import styled from 'styled-components';
import { device } from '../device';
const HelpStyles = styled.section`
  padding: 100px 0 0;
  max-width: 1250px;
  margin: 0 auto 40px;
  padding-bottom: 130px;
  h1 {
    font-weight: 400;
    font-size: 60px;
    line-height: 89px;
    letter-spacing: 0.03em;
    color: #F8A151;
    margin: 0 0 15px;
  }
  p {
    color: #2A2A2A;
    margin: 0 0 35px;
  }

  @media ${device.tablet} {
    padding: 50px 0 0;

    h1 {
     
      font-size: 30px;
      font-weight: 500;
      line-height: 36px;
      letter-spacing: 0.05em;
      text-align: left;      
    }

    p {
      //styleName: Body Mobile;
      /* font-family: Fira Sans; */
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0.05em;
      text-align: left;
    }
  }

  @media ${device.mobileL} {
    padding: 36px 0 0;
  }
`;

export default HelpStyles;