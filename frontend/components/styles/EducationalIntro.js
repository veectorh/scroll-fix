import styled from 'styled-components';
import { device } from '../device';

const EducationalIntro = styled.section`
  background: #F2F2F2;
  text-align: center;
  padding: 30px 0 60px;
  p {
    max-width: 898px;
    margin: 0 auto 0px;
  }

  @media ${device.tablet} {
    margin-bottom: 16px;

    h2 {
      //styleName: H1 Mobile;
      font-family: Oswald;
      font-size: 20px;
      font-weight: 500;
      line-height: 28px;
      letter-spacing: 0.085em;
      text-align: center;
   
    }
  }
`;

export default EducationalIntro;