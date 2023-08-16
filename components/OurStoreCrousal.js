import { useState, useEffect } from 'react';
import OurStore from './OurStore';
import Product from './Product';
import ButtonStyles from './styles/ButtonStyles';
import ContainerBox from './styles/ContainerBox';
import Link from 'next/link';
export default function OurStoreCarousel({ products }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % products.length);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    }
  }, [currentSlide]);

  function handleDotClick(index) {
    setCurrentSlide(index);
  }

  return (
    <ContainerBox>
      <h2 >Our Store</h2>
      <div style={styles.container}>
        <Product product={products[currentSlide]} />
        <div style={styles.dots}>
          {products.map((_, index) => (
            <span
              key={index}
              onClick={() => handleDotClick(index)}
              style={{
                ...styles.dot,
                backgroundColor: index === currentSlide ? '#F8A151' : '#43434359',
              }}
            />
          ))}
        </div>
      </div>
      <div  style={styles.button}>
        <ButtonStyles theme={{ main: "#F8A151" }} fullWidth={true}>
          <Link href="/store">View Our Store</Link>
        </ButtonStyles>
      </div >
    </ContainerBox>
  );
}

const styles = {
  container: {
    position: 'relative',
    width: '100%',
    padding: '20px 0px 60px 0px',
    alignItems: 'center'
  },
  image: {
    width: '100px',
  },
  arrows: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 2%',
  },
  dots: {
    position: 'absolute',
    bottom: '40px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    padding: '1% 0',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: '50%',
    margin: '0 5px',
    cursor: 'pointer',
    backgroundColor: '#BADA55',
  },
  heading: {
    //styleName: H1 Mobile;
    fontFamily: 'Oswald',
    fontSize: '20px',
    fontWeight: '500',
    lineHeight: '28px',
    letterSpacing: '0.085em',
    textAlign: 'center',
  },
  button : {
    maxWidth: '1100px',
    margin: '0px 0px 16px 0px'
  }
};
