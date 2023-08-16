import styled from 'styled-components';
import { device } from '../device';

const OurStoreStyles = styled.section`
  .mobile {
      display: none;
      h2 {
        font-size: 20px;
        font-weight: 500;
        line-height: 28px;
        letter-spacing: 0.085em;
        text-align: center;
        margin-top: 40px;
      }
  }

  .desktop {
    display: flex;
    flex-direction: column;
    align-items: center;
    
  }

  @media ${device.tablet} {
  
    .desktop {
      display: none;
    }
    .mobile {
      display: block;
    }
  }
`;

export default OurStoreStyles;