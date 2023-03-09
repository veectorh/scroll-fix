import { useState, useEffect } from 'react';
import Quotes from './Quotes';

const quotes = [
  { id: 1,
    quote: "An unforgettable experience. I witnessed first-hand the incredible power of the dialogue that comes from experiencing the photographs and the text panels. The exhibit touched every student I spoke with, whether or not they had their own story to tell.",
    author: "Dale Rogers Marshall",
    title: "President, Wheaton College, Norton, MA"
  },
  { id: 2,
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
    title: "President, Anaheim, CA"
  },
  { id: 3,
    quote: "Darkness cannot drive out darkness, only light can do that. Hate cannot drive out hate, only love can do that.",
    author: "Martin Luther King, Jr.",
    title: "President, Southern Christian Leadership Conference, Atlanta, GA"
  },
  { id: 4,
    quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    author: "Ophra Winfrey",
    title: "The Greatest, Chicago, IL"
  }
]

export default function QuotesCarousel() {
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
