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

export default function OurStore({ products }) {
  return (
    <OurStoreStyles>
      <h2>Our Store</h2>
      <div className="products">
        {
          products.map(product => (
            <Product key={product.id} product={product} />
          ))
        }
      </div>
      <div className="button">
        <ButtonStyles theme={{ main: "#F8A151" }} fullWidth={true}>
          <Link href="/store">View Our Store</Link>
        </ButtonStyles>
      </div >
    </OurStoreStyles>
  )
}