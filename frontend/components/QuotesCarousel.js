import { useState, useEffect } from 'react';
import Quotes from './Quotes';

export default function QuotesCarousel({quotes}) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % quotes.length);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    }
  }, [currentSlide]);
  
  function handleDotClick(index) {
    setCurrentSlide(index);
  }
  
  return (
    <div style={styles.container}>
      <Quotes {...quotes[currentSlide]}  />
      <div style={styles.dots}>
        {quotes.map((_, index) => (
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
  );
}

const styles = {
  container: {
    position: 'relative',
    width: '100%',
    background: '#F2F2F2',
    paddingTop: '60px',
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
};
