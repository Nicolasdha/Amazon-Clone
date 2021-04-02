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
            title='Crucial Conversations Tools for Talking When Stakes Are High, Second Edition Paperback'
            price={15.61}
            image='book.jpg'
            rating={5}
            key={1}
          />
          <Product
            id='2176312'
            title='Kuccu Stand Mixer, 6 Qt 660W, 6-Speed Tilt-Head Kitchen Electric Mixer with Stainless Steel Bowl'
            price={145.99}
            image='mixer.jpg'
            rating={4}
            key={2}
          />
          <Product
            id='2156312'
            title='All-new Echo (4th Gen) | With premium sound, smart home hub, and Alexa | Charcoal'
            price={79.99}
            image='https://images-na.ssl-images-amazon.com/images/I/71JB6hM6Z6L._AC_SY355_.jpg'
            rating={4}
            key={4}
          />

          <Product
            id='33'
            title='Hydro Flask Water Bottle - Stainless Steel & Vacuum Insulated - Wide Mouth 2.0 with Leak Proof Flex Cap - 20 oz, Black'
            price={37.95}
            image='bottle.jpg'
            rating={4}
            key={43}
          />
        </div>
        <div className='home__row'>
          <Product
            id='2156312'
            title='MOON LENCE Instant Pop Up Camping Tent 4-5 Person Portable Tent Waterproof Windproof for Camping Hiking Mountaineering'
            price={99.99}
            image='/tent.jpg'
            rating={4}
            key={3}
          />
          <Product
            id='216677312'
            title='Daybetter 16.4ft 5m Led Strip Lights, Flexible Color Changing 5050 RGB 150 LEDs Light Strips Kit Work with App'
            price={16.99}
            image='https://images-na.ssl-images-amazon.com/images/I/7170G4unQOL._AC_SY355_.jpg'
            rating={4}
            key={5}
          />
          <Product
            id='2133412'
            title='
          Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PS4, & Xbox - 1-Year Rescue Service (STGX2000400)'
            price={29.99}
            image='https://images-na.ssl-images-amazon.com/images/I/81tjLksKixL._AC_SY355_.jpg'
            rating={4}
            key={6}
          />
        </div>
        <div className='home__row'>
          <Product
            id='2133412'
            title='LG 38WK95C-W 38-Inch Class 21:9 Curved UltraWide WQHD+ Monitor with HDR 10'
            price={1009.99}
            image='https://images-na.ssl-images-amazon.com/images/I/61TiYyagO9L._AC_SX355_.jpg'
            rating={4}
            key={7}
          />
          <Product
            id='43243'
            title='Echo Show 8 -- HD smart display with Alexa – stay connected with video calling - Charcoal'
            price={74.99}
            image='screen.jpg'
            rating={4}
            key={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
