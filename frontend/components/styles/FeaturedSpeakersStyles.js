import styled from 'styled-components';

const FeaturedSpeakersStyles = styled.section`
  display: flex;
  justify-content: center;
  gap: 75px;
  padding: 60px 180px;
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
`;

export default FeaturedSpeakersStyles;