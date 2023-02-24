import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import ButtonStyles from './styles/ButtonStyles';

const ProductStyles = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 262px;
  .title-price {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    .title {
      max-width: 172px;
      font-size: 20px;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: 0.05em;
      color: #00AFB5;
      margin: 0;
    }
    .price {
      max-width: 81px;
      font-size: 18px;
      font-weight: 500;
      line-height: 26px;
      letter-spacing: 0.05em;
      text-align: right;
      margin: 0;
    }
  }
  .description {
    margin: 10px 0 20px;
  }
`;

export default function Product() {
  return (
    <ProductStyles>
      <a href="https://www.speakoutnow.org/store" target="_blank" rel="noreferrer">
        <Image
          src='/images/temp/product1.png'
          alt="Facebook"
          width="262"
          height="262"
        />
      </a>
      <div className="title-price">
        <h4 className="title">2022 AAPI Heritage Month Bundle - INDIVIDUAL RATE</h4>
        <h5 className="price">$29.00</h5>
      </div>
      <p className="description">This Asian American and Pacific Islander (AAPI) Heritage Month celebrate the diverse identities, histories, and experiences of our AAPI communities with this one-of-a-kind Bundle.</p>
      <ButtonStyles theme={{ main: "#00AFB5" }}>
        <Link href="/ecourse">Buy Now</Link>
      </ButtonStyles>
    </ProductStyles>
  )
}