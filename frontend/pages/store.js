import styled from "styled-components";
import { loadProducts } from "@/lib/load-products";
import Product from "@/components/Product";
import ThreeLink from "@/components/ThreeLink";

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
    grid-column-gap: 5px;
    grid-row-gap: 50px;
    grid-template-columns: repeat(auto-fit,minmax(262px,1fr));
  }
`;

export default function StorePage({ products }) {
  console.log("STORE", products);
  return (
    <>
      <StorePageStyles>
        <h1>SPEAKOUT STORE</h1>
        <p>Update with subheader copy here</p>
        <div className="products">
          {
            products.data.map(product => (
              <Product key={product.id} product={product} />
            ))
          }
        </div>    
      </StorePageStyles>
      <ThreeLink />
    </>
  );
}

export async function getStaticProps() {
  const products = await loadProducts();
  return { props: { products } }
}