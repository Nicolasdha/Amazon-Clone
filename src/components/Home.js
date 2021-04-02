import React, { useState } from "react";
import "../styles/Home.css";
import Product from "./Product";

function Home() {
  const heroImages = ["/hero1.jpg", "/hero2.jpg", "/hero4.jpg"];
  const delay = 4000;

  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className='home'>
      <div className='home__container'>
        <div className='slideshow'>
          <div
            className='slideshowSlider'
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >
            {heroImages.map((image, index) => (
              <img className='slide home__image' key={index} src={image}></img>
            ))}
          </div>

          {/*<div className='slideshowDots'>
            {heroImages.map((_, idx) => (
              <div
                key={idx}
                className={`slideshowDot${index === idx ? " active" : ""}`}
                onClick={() => {
                  setIndex(idx);
                }}
              ></div>
            ))}
              </div>*/}
        </div>

        <div className='home__row home__row--first'>
          <Product
            id='215556312'
            title='The Lean Startup: How Constant Innovation Created Radically Successful Businesses Paperback'
            price={29.99}
            image='http://1.bp.blogspot.com/-T-d3JPMr-Uk/UPshLuidy6I/AAAAAAAAFbU/vOiHd0qgnC4/s1600/lean-startup_book-cover.jpeg'
            rating={2}
            key={1}
          />
          <Product
            id='2176312'
            title='Kuccu Stand Mixer, 6 Qt 660W, 6-Speed Tilt-Head Food Dough Mixer, Kitchen Electric Mixer with Stainless Steel Bowl,Dough Hook,Whisk, Beater, Egg white separator (6-QT, Silver-1)'
            price={145.99}
            image='https://images-na.ssl-images-amazon.com/images/I/71hvYseFrlL._AC_SX522_.jpg'
            rating={4}
            key={2}
          />
          <Product
            id='2156312'
            title='All-new Echo (4th Gen) | With premium sound, smart home hub, and Alexa | Charcoal'
            price={79.99}
            image='https://images-na.ssl-images-amazon.com/images/I/71JB6hM6Z6L._AC_SY355_.jpg'
            rating={4}
            key={3}
          />
          <Product
            id='2156312'
            title='All-new Echo (4th Gen) | With premium sound, smart home hub, and Alexa | Charcoal'
            price={79.99}
            image='https://images-na.ssl-images-amazon.com/images/I/71JB6hM6Z6L._AC_SY355_.jpg'
            rating={4}
            key={3}
          />
        </div>
        <div className='home__row'>
          <Product
            id='2156312'
            title='All-new Echo (4th Gen) | With premium sound, smart home hub, and Alexa | Charcoal'
            price={79.99}
            image='https://images-na.ssl-images-amazon.com/images/I/71JB6hM6Z6L._AC_SY355_.jpg'
            rating={4}
            key={3}
          />
          <Product
            id='216677312'
            title='Daybetter 16.4ft 5m Led Strip Lights, Flexible Color Changing 5050 RGB 150 LEDs Light Strips Kit Work with App'
            price={16.99}
            image='https://images-na.ssl-images-amazon.com/images/I/7170G4unQOL._AC_SY355_.jpg'
            rating={4}
            key={4}
          />
          <Product
            id='2133412'
            title='
          Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PS4, & Xbox - 1-Year Rescue Service (STGX2000400)'
            price={29.99}
            image='https://images-na.ssl-images-amazon.com/images/I/81tjLksKixL._AC_SY355_.jpg'
            rating={4}
            key={5}
          />
        </div>
        <div className='home__row'>
          <Product
            id='2133412'
            title='LG 38WK95C-W 38-Inch Class 21:9 Curved UltraWide WQHD+ Monitor with HDR 10'
            price={1009.99}
            image='https://images-na.ssl-images-amazon.com/images/I/61TiYyagO9L._AC_SX355_.jpg'
            rating={4}
            key={6}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
