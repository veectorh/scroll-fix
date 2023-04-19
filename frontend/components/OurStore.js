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
  justify-content: center;
  /* width: 100%; */
  padding: 50px 0 80px;
  .store {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1100px;
   .button {
      max-width: 1100px;
      padding: 0px 10px;
    }
   }
  
`;

const StoreListStyles = styled.section`
  display: grid;
  grid-column-gap: 15px;
  grid-row-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(262px, 1fr));
  width: 100%;
  @media ${device.tablet} {
    padding: 40px 0 60px;
    grid-column-gap: 10px;
    grid-row-gap: 15px;
    img {
        width: 100%;
        height: 100%;
        border-radius: 20px;
    }
  }

    

`

export default function OurStore({ products }) {
  return (
    <ContainerBox>
      <OurStoreStyles>
        <div className="store">
          <h2>Our Store</h2>
          <StoreListStyles>
            {
              products.map(product => (
                <Product key={product.id} product={product} />
              ))
            }
          </StoreListStyles>
          <div className="button">
            <ButtonStyles theme={{ main: "#F8A151" }} fullWidth={true}>
              <Link href="/store">View Our Store</Link>
            </ButtonStyles>
          </div >
        </div>
      </OurStoreStyles>
    </ContainerBox>

  )
}