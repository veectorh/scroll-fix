import Image from 'next/image';
import styled from 'styled-components';
import quotemark from '../public/images/quote.png';

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
    }
    .quote-text {
      font-size: 30px;
      font-weight: 300;
      line-height: 40px;
      letter-spacing: 0.03em;
      color: #262626;
      margin-bottom: 20px;
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
`;

export default function Quotes({quote, author, title}) {
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
          {quote}
        </div>
        <div className="quote-author">
          — {author} <span>{title}</span >
        </div>
      </div>
    </QuotesStyles>
  );
};