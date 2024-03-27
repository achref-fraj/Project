import React from 'react';
import { Carousel } from 'react-bootstrap';


import bb from '../assets/bb.mp4';


function    AppCarousel() {
  return (
    <div>
      <Carousel> 
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.fashionnetwork.com/m/3a32/8a88/4d2c/ca1e/ad07/f55d/4863/9ff7/bb3f/7547/7547.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>Homme</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://mediaslide-europe.storage.googleapis.com/boutchou/pictures/2514/3273/large-1626437248-ad0545a81824f6e1555dbe2ae38d6544.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h1>Enfants</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://prcdn.freetls.fastly.net/release_image/58949/58/58949-58-6304997102e03ff4d9c38d26c4bbae56-3132x2100.jpg?format=jpeg&auto=webp&quality=85%2C65&width=1950&height=1350&fit=bounds"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h1>Femme</h1>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Fourth Section with Video */}
        <Carousel.Item>
          <video className="d-block w-100" autoPlay loop muted>
            <source src={bb} autoPlay loop muted  type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Carousel.Caption>
            <h1>Fourth Section</h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      
    </div>
  );
}

export default AppCarousel;
