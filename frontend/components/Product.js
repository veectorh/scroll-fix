import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import ButtonStyles from './styles/ButtonStyles';
import { device } from './device';
const ProductStyles = styled.div`
  display: flex;
  flex-direction: column;

  /* max-width: 262px; */
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
  img {
      border-radius: 20px;
      margin: auto 0px;
  } 
 
  @media ${device.tablet} {
    .title-price {
    .title {
      //styleName: H2 Mobile;
      font-family: Oswald;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: 0.085em;
      text-align: left;
    }
    .description {
      //styleName: Body Mobile;
      font-family: Fira Sans;
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0.05em;
      text-align: left;
    }
    .price {
      //styleName: H2 Mobile;
      font-family: Oswald;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: 0.085em;
      text-align: right;

    }
  }
  }
  @media ${device.mobileL} {

    img {
      width: 100%;
      height: 100%;
      border-radius: 20px;
    } 
  }
`;

export default function Product({ product }) {
  return (
    <ProductStyles>
      <a href={product.attributes.product_url} target="_blank" rel="noreferrer">
        <Image
          src={product.attributes.image.data.attributes.url}
          alt="Facebook"
          width={300}
          height={300}
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