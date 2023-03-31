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

export default function Product({ product }) {
  return (
    <ProductStyles>
      <a href={product.attributes.product_url} target="_blank" rel="noreferrer">
        <Image
          src={product.attributes.image.data.attributes.url}
          alt="Facebook"
          width="262"
          height="262"
        />
      </a>
      <div className="title-price">
        <h4 className="title">{product.attributes.name}</h4>
        <h5 className="price">${product.attributes.price}</h5>
      </div>
      <p className="description">{product.attributes.description}</p>
      <ButtonStyles theme={{ main: "#00AFB5" }}>
        <Link href={product.attributes.product_url} target="_blank">Buy Now</Link>
      </ButtonStyles>
    </ProductStyles>
  )
}