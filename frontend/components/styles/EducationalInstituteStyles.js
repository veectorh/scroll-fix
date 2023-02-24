import styled from 'styled-components';

const EducationalInstituteStyles = styled.section`
  background: #F2F2F2;
  text-align: center;
  padding: 30px 0 60px;
  p {
    max-width: 898px;
    margin: 0 auto 66px;;
  }

  .copy-image {
    display: flex;
    align-items: center;
    background: white;
    margin-bottom: -4px;
    .copy {      
      .copy-container {
        max-width: 353px;
        margin: 0 auto;
        text-align: left;
      }
    }
    .image {
      img {
        position: relative !important;
        object-fit: cover;
      }
    }
  }
  .copy-image > * {
    flex-basis: 100%
  }
`;

export default EducationalInstituteStyles;