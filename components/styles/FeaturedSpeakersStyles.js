import styled from 'styled-components';
import { device } from '../device';
const FeaturedSpeakersStyles = styled.section`
  display: flex;
  justify-content: center;
  gap: 75px;
  padding: 60px 0px;
  border-bottom: 4px solid #00AFB5;
  h2 {
    margin: 0;
  }
  .featured-intro {
    width: 288px; 
  }
  .featured-images {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 11px;
    grid-row-gap: 11px;
  }

  @media ${device.tablet} {
    padding: 40px 0px;
    flex-direction: column;
    gap: 24px;
    border-bottom: none;
    .featured-intro {
      width: 100%;
    }

    h2 {

      font-family: Oswald;
      font-size: 20px;
      font-weight: 500;
      line-height: 28px;
      letter-spacing: 0.085em;
      text-align: left;

    }
  }
  @media ${device.mobile} {
  .featured-images {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(1, 1fr);
      grid-column-gap: 11px;
      grid-row-gap: 11px;
  }
}
`;

export default FeaturedSpeakersStyles;