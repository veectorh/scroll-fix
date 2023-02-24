// @ts-nocheck
import Link from 'next/link';
import styled from 'styled-components';
import Product from './Product';
import ButtonStyles from './styles/ButtonStyles';

const OurStoreStyles = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0 80px;
  .products {
    display: flex;
    flex-direction: row;
    gap: 15px;
    margin-bottom: 40px;
  }
  .button {
    max-width: 1100px;
    margin: 0 10px;
  }
`;

export default function OurStore() {
  return (
    <OurStoreStyles>
      <h2>Our Store</h2>
      <div className="products">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
      <div className="button">
        <ButtonStyles theme={{ main: "#F8A151" }} fullWidth={true}>
          <Link href="/ecourse">Buy Now</Link>
        </ButtonStyles>
      </div >
    </OurStoreStyles>
  )
}