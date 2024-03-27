import React, { useState } from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore, faTruck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Carte = () => {
  const product = {
    name: 'BOTTES CHELSEA ',
    description: '',
    price: ' 150 DT',
    image: 'https://static.zara.net/photos///2023/I/1/2/p/2009/221/709/2/w/375/2009221709_6_1_1.jpg?ts=1692630744180',
    smallImages: [
      'https://static.zara.net/photos///2023/I/1/2/p/2009/221/709/2/w/375/2009221709_6_1_1.jpg?ts=1692630744180',
      'https://static.zara.net/photos///2024/V/1/2/p/2034/220/800/2/w/375/2034220800_6_1_1.jpg?ts=1700147264998',
      'https://static.zara.net/photos///2024/V/1/2/p/2064/220/723/2/w/1920/2064220723_6_1_1.jpg?ts=1700145322723',
    ],
    colors: [
      { name: 'Black', class: 'bg-black', borderClass: 'border-gray-500 border-2' },
      { name: 'Gray', class: 'bg-gray', borderClass: 'border-gray-500 border-2' },
      { name: 'White', class: 'bg-white', borderClass: 'border-gray-500 border-2' },
    ],
    sizes: ['40', '41', '42', '43'],
  };

  const [mainImage, setMainImage] = useState(product.image);
  const [selectedSize, setSelectedSize] = useState('');

  const handleSmallImageClick = (smallImage) => {
    setMainImage(smallImage);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  return (
    <Container style={{ marginBottom: '80px' }}> 
     <h1 style={{ marginBottom: '80px' }}> carte</h1>
      <Row className="mt-4" >
        <Col xs={12} md={6}>
          <Row>
            <Col xs={12} md={8}>
              <Image src={mainImage} alt={product.name} fluid />
            </Col>
            <Col xs={12} md={4} className="ps-md-0"> {/* Réduisez la marge ici */}
              {product.smallImages.map((smallImage, index) => (
                <div key={index} className="mb-2" style={{ cursor: 'pointer' }} onClick={() => handleSmallImageClick(smallImage)}>
                  <Image src={smallImage} fluid style={{ width: '50%', height: 'auto' }} /> {/* Ajoutez une largeur fixe ici */}
                </div>
              ))}
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={6}>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>Price: {product.price}</p>
          <p>Available Colors:</p>
          <div>
            {product.colors.map((color, index) => (
              <Button
                key={index}
                variant="light"
                className={`me-2 mb-2 rounded-circle ${color.borderClass} ${color.class}`}
                style={{ width: '40px', height: '40px' }}
              />
            ))}
          </div>
          <p> Sizes</p>
          <div>
            {product.sizes.map((size, index) => (
              <Button
                key={index}
                variant={selectedSize === size ? "dark" : "outline-dark"}
                className="me-2 mb-2 rounded-circle"
                onClick={() => handleSizeSelect(size)}
                style={{ width: '40px', height: '40px' }} // Ajoutez cette ligne pour définir la taille du bouton
              >
                {size}
              </Button>
            ))}
          </div>
       <Link to={'/pay'}> <Button variant="outline-success" className="mt-2">Ajouter Au Panier </Button></Link>  

          <div className="mt-4">
            <div className="border p-3 mb-3">
              <FontAwesomeIcon icon={faStore} className="me-2" />
              <span>Enlèvement en magasin</span>
            </div>
            <div className="border p-3">
              <FontAwesomeIcon icon={faTruck} className="me-2" />
              <span>Livraison standard à domicile</span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Carte;
