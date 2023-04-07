import styled from "styled-components";
import { loadProducts } from "@/lib/load-products";
import Product from "@/components/Product";
import ThreeLink from "@/components/ThreeLink";
import { device } from "@/components/device";
import ContainerBox from "@/components/styles/ContainerBox";

const StorePageStyles = styled.section`
  padding: 100px 0 0;
  max-width: 1250px;
  margin: 0 auto 40px;
  h1 {
    font-weight: 400;
    font-size: 60px;
    line-height: 89px;
    letter-spacing: 0.03em;
    color: #F8A151;
    margin: 0 0 15px;
  }
  p {
    color: #2A2A2A;
    margin: 0 0 35px;
  }

  .products {
    display: grid;
    grid-column-gap: 50px;
    grid-row-gap: 50px;
    grid-template-columns: repeat(auto-fit,minmax(262px,1fr));

    img {
      width: 100%;
    }
  }

  @media ${device.tablet} {
    padding: 50px 0 0;

    h1 {
     
      font-size: 30px;
      font-weight: 500;
      line-height: 36px;
      letter-spacing: 0.05em;
      text-align: left;      
    }

    p {
      //styleName: Body Mobile;
      font-family: Fira Sans;
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0.05em;
      text-align: left;
    }
  }
`;

export default function StorePage({ products }) {
  return (
    <>
      <ContainerBox>
        <StorePageStyles>
          <h1>SPEAKOUT STORE</h1>
          <p>Find inspiration in our online store, featuring a selection of racial and social justice books, films, event recordings, and curriculum from SpeakOut speakers.</p>
          <div className="products">
            {
              products.data.map(product => (
                <Product key={product.id} product={product} />
              ))
            }
          </div>
        </StorePageStyles>
      </ContainerBox>
      <ThreeLink />
    </>
  );
}

export async function getStaticProps() {
  const products = await loadProducts();
  return { props: { products } }
}