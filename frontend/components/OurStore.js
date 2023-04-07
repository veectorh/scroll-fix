import Link from 'next/link';
import styled from 'styled-components';
import Product from './Product';
import ButtonStyles from './styles/ButtonStyles';
import { device } from './device';
import ContainerBox from './styles/ContainerBox';
const OurStoreStyles = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1100px;
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

const StoreListStyles = styled.section`
  padding: 0px 0 100px;
  margin: 0 auto;
  display: grid;
  grid-column-gap: 15px;
  grid-row-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

  @media ${device.tablet} {
    padding: 40px 0 60px;
    grid-column-gap: 10px;
    grid-row-gap: 15px;
  }

  img {
      width: 100%;
      height: 100%;
      border-radius: 20px;
  }
`

export default function OurStore({ products }) {
  return (
    
      <OurStoreStyles>
        <h2>Our Store</h2>
        {/* <div className="products"> */}
        <StoreListStyles>
          {
            products.map(product => (
              <Product key={product.id} product={product} />
            ))
          }
        </StoreListStyles>
        {/* </div> */}
        <div className="button">
          <ButtonStyles theme={{ main: "#F8A151" }} fullWidth={true}>
            <Link href="/store">View Our Store</Link>
          </ButtonStyles>
        </div >
      </OurStoreStyles>
  
  )
}