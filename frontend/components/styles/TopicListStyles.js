import styled from 'styled-components';

const TopicListStyles = styled.section`
    display: flex;
    flex-wrap: wrap;
    row-gap: 5px;
    column-gap: 10px;
    
    div {
      display:flex;
      align-items: center;
      outline: none;
      border: none;
      height: 28px;
      background: #F2F2F2;
      border-radius: 20px;
      -moz-border-radius: 20px;
      -webkit-border-radius: 20px;
      padding: 0 10px;
      font-size: 15px;
      font-weight: 400;
      line-height: 22px;
      text-align: center;
      letter-spacing: 0.035em;
      color: #000000;
    }
`;

export default TopicListStyles;