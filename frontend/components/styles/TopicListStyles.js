import styled from 'styled-components';
import { device } from '../device';
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
      border-radius: 20px;
      -moz-border-radius: 20px;
      -webkit-border-radius: 20px;
      padding: 0 10px;
      font-size: 16px;
      font-weight: 400;
      line-height: 22px;
      text-align: center;
      letter-spacing: 0.035em;
      color: #000000;
      cursor: pointer;
    }

    div:hover {
      box-shadow: rgba(100, 100, 111, 0.2) 0px 2px 3px 0px;
    }
`;

export default TopicListStyles;