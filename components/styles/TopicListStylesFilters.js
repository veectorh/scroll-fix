import styled from 'styled-components';
import { device } from '../device';
const TopicListStylesFilter = styled.section`
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
      font-size: 15px;
      font-weight: 400;
      line-height: 22px;
      text-align: center;
      letter-spacing: 0.035em;
      color: #000000;
      cursor: pointer;
    }
    @media ${device.tablet} {
      flex-direction: column;
      align-items: center;
      div{
        width: fit-content;
        padding: 10px 20px 10px 20px;
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        letter-spacing: 0.085em;
        text-align: center;
      }
    }
`;

export default TopicListStylesFilter;