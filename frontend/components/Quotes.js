import Image from 'next/image';
import styled from 'styled-components';
import quotemark from '../public/images/quote.png';
import { device } from './device';
const QuotesStyles = styled.section`
  background: #F2F2F2;
  display: flex;
  justify-content: center;
  .quote-container {
    max-width: 1042px;
    margin: 0 50px;
    padding: 102px 0 142px;
    position: relative;
    img {
      position: absolute;
      top: 65px;
      left: -36px;
      z-index: 1
    }
    .quote-text {
      font-size: 30px;
      font-weight: 300;
      line-height: 40px;
      letter-spacing: 0.03em;
      color: #262626;
      margin-bottom: 20px;
      position: inherit;
      z-index: 9;
    }
    .quote-author {
      font-size: 20px;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: 0.05em;
      color: #262626;

      span {
        font-size: 14px;
        font-weight: 400;
        line-height: 21px;
        letter-spacing: 0.085em;
        color: #F8A151;
      }
    }
  }

  @media ${device.tablet} {
    .quote-container {
      padding: 10px 0 120px;
      img {
        top: -8px;
        width: 36px;
        height: 32px;
        left: -26px;
      }
      .quote-text {
       
        font-size: 18px;
        font-weight: 300;
        line-height: 24px;
        letter-spacing: 0.03em;
        text-align: left;
      }
    }

  }
`;

export default function Quotes({ attributes }) {
  return (
    <QuotesStyles>
      <div className="quote-container">
        <Image
          src={quotemark}
          alt="Quote"
          width="83"
          className='quote-image'
        />
        <div className="quote-text">
          {attributes.quote}
        </div>
        <div className="quote-author">
          — {attributes.author} <span>{attributes.title}</span >
        </div>
      </div>
    </QuotesStyles>
  );
};