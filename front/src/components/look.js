import React, { useRef, useState } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const images = [
  { id: 1, src: 'https://static.zara.net/photos///2023/I/0/2/p/6985/450/800/2/w/824/6985450800_6_1_1.jpg?ts=1691076765248', alt: 'Image 1', model: 'Model 1', price: '$504' },
  { id: 2, src: 'https://static.zara.net/photos///2023/I/0/2/p/5070/301/800/2/w/824/5070301800_6_1_1.jpg?ts=1690811173233', alt: 'Image 2', model: 'Model 2', price: '$60' },
  { id: 3, src: 'https://static.zara.net/photos///2023/I/1/2/p/2009/221/709/2/w/375/2009221709_6_1_1.jpg?ts=1692630744180', alt: 'Image 3', model: 'Model 3', price: '$70' },
  { id: 4, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFzDoeAEFhNp0rz1eGp_YXUNUC4DnRk1OuBK48J2O1Dnhu3dx8AEJu0kR2ftUW5SYjceM&usqp=CAU', alt: 'Image 4', model: 'Model 4', price: '$80' },
  { id: 5, src: 'https://static.zara.net/photos///2024/V/1/2/p/2064/220/723/2/w/1920/2064220723_6_1_1.jpg?ts=1700145322723', alt: 'Image 5', model: 'Model 5', price: '$90' },
  { id: 6, src: 'https://static.zara.net/photos///2024/V/1/2/p/2034/220/800/2/w/375/2034220800_6_1_1.jpg?ts=1700147264998', alt: 'Image 6', model: 'Model 6', price: '$100' },
  { id: 7, src: 'https://static.zara.net/photos///2023/I/0/2/p/0304/300/803/2/w/744/0304300803_6_1_1.jpg?ts=1695712849755', alt: 'Image 7', model: 'Model 7', price: '$110' },
  { id: 8, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5nKSmSeMCrvpIupRGpXxGNWimGJnsIINO-ThfNtvB1KZwHrZgr2Z0SVIcK3wETwyyDrQ&usqp=CAU', alt: 'Image 8', model: 'Model 8', price: '$120' },
  { id: 9, src: 'https://static.zara.net/photos///2023/I/0/2/p/0761/360/803/2/w/300/0761360803_6_1_1.jpg?ts=1693470622605', alt: 'Image 9', model: 'Model 9', price: '$130' },
  { id: 10, src: 'https://static.zara.net/photos///2023/I/1/1/p/5004/110/800/2/w/1920/5004110800_6_1_1.jpg?ts=1703688511291', alt: 'Image 10', model: 'Model 10', price: '$140' },
  { id: 11, src: 'https://static.zara.net/photos///2023/I/0/2/p/0761/362/803/2/w/300/0761362803_6_1_1.jpg?ts=1693470218642', alt: 'Image 11', model: 'Model 11', price: '$150' },
  { id: 12, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw3pAODKfPfUXQR-npzRxzGcdf1kOqgRcuirRFleukIa1T1jdvRW5vvWyaHzfTDUGJQ7I&usqp=CAU', alt: 'Image 12', model: 'Model 12', price: '$160' },
  { id: 13, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb7OHlfIF8uEHX-6e0KjNRJ1bTFPNPB4sEBm2gvsTelMXkq4FlhPtzYD8Z4mxzXZYoFQQ&usqp=CAU', alt: 'Image 13', model: 'Model 13', price: '$170' },
  // Ajout de 3 images supplémentaires
  { id: 14, src: 'https://static.zara.net/photos///2024/V/1/1/p/6009/310/800/4/w/824/6009310800_6_1_1.jpg?ts=1707471323192', alt: 'Image 14', model: 'Model 14', price: '$180' },
  { id: 15, src: 'https://static.zara.net/photos///2023/V/0/1/p/2157/065/800/2/w/1920/2157065800_6_1_1.jpg?ts=1681984053708', alt: 'Image 15', model: 'Model 15', price: '$190' },
  { id: 16, src: 'https://static.zara.net/photos///2024/V/1/1/p/6270/310/719/3/w/824/6270310719_6_1_1.jpg?ts=1707478150794', alt: 'Image 16', model: 'Model 16', price: '$200' },
  // Vos données d'images
];

const AppLook = () => {
  const carouselRef = useRef(null);
  const [hoveredImage, setHoveredImage] = useState(null);

  const repeatImages = (arr, repeatCount) => {
    let repeatedImages = [];
    for (let i = 0; i < repeatCount; i++) {
      repeatedImages = repeatedImages.concat(arr);
    }
    return repeatedImages;
  };

  const repeatedImages = repeatImages(images, 3);

  const groupImages = (arr, size) => {
    return arr.reduce((acc, _, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), []);
  };

  const imageGroups = groupImages(repeatedImages, 6);

  const handleImageHover = (src) => {
    setHoveredImage(src);
  };

  return (
    <Container fluid className="mt-3">
      <h1 style={{ marginBottom: '30px' }}>MEILLEURE SÉLECTION POUR VOUS</h1>
      <div style={{ position: 'relative' }}>
        <Carousel
          interval={null}
          controls={false}
          ref={carouselRef}
          indicators={false}
          touch={false}
          keyboard={false}
        >
          {imageGroups.map((group, index) => (
            <Carousel.Item key={index}>
              <Row className="gx-2">
                {group.map((image) => (
                  <Col xs={2} key={image.id}>
                    <Link to="/Carte"> {/* Add Link component here */}
                      <div style={{ cursor: 'pointer' }}>
                        <img
                          className="d-block w-100"
                          src={hoveredImage === image.src ?'https://static.zara.net/photos///2024/V/1/2/p/2034/220/800/2/w/375/2034220800_6_1_1.jpg?ts=1700147264998'  : image.src}
                          alt={image.alt}
                          style={{ height: '300px' }}
                          onMouseEnter={() => handleImageHover(image.src)}
                        />
                      </div>
                    </Link>
                    <h3>{image.model}</h3>
                    <p>{image.price}</p>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
        <div
          className="carousel-control-prev"
          onClick={() => carouselRef.current.prev()}
          style={{ cursor: 'pointer', left: '0', position: 'absolute', top: '50%', transform: 'translateY(-50%)' }}
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
            style={{ backgroundColor: 'black' }}
          ></span>
          <span className="visually-hidden">Previous</span>
        </div>
        <div
          className="carousel-control-next"
          onClick={() => carouselRef.current.next()}
          style={{ cursor: 'pointer', right: '0', position: 'absolute', top: '50%', transform: 'translateY(-50%)' }}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
            style={{ backgroundColor: 'black' }}
          ></span>
          <span className="visually-hidden">Next</span>
        </div>
      </div>
    </Container>
  );
};

export default AppLook;
