import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import dress from '../assets/achref__1_-removebg.png'
import { Link } from 'react-router-dom';

const AppFooter = () => {
  return (
    <footer className="shadow" style={{ marginTop: '220px' }}>
      <Container className="mx-auto py-5" style={{ width: '90%' }}>
        <Row className="justify-content-between flex-wrap">
          <Col md={2}>
            <a href="/" className="d-flex align-items-center p-0 text-dark">
              <img alt="logo" src={dress} width="150px" />
              <span className="ms-3 h5 font-weight-bold"></span>
            </a>
            <div className="mt-5 d-flex">
              <button className="btn btn-dark p-2 me-4">
                <i className="fab fa-facebook-f"></i>
              </button>
              <button className="btn btn-dark p-2 me-4">
                <i className="fab fa-twitter"></i>
              </button>
              <button className="btn btn-dark p-2 me-4">
                <i className="fab fa-instagram"></i>
              </button>
            </div>
          </Col>
          <Col md={2}>
            <h5 className="mb-4" style={{ fontWeight: '550' }}>We are Dress-Up</h5>
            <ul className="list-unstyled" style={{ cursor: 'pointer' }}>
              <li><a href="/" className="text-dark">À propos de Dress-Up</a></li>
              <li><a href="/" className="text-dark">Durabilité</a></li>
              <li><a href="/" className="text-dark">About Us</a></li>
              <li><a href="/" className="text-dark">Contact</a></li>
            </ul>
          </Col>
          <Col md={2}>
            <h5 className="mb-4" style={{ fontWeight: '550' }}>Product</h5>
            <ul className="list-unstyled" style={{ cursor: 'pointer' }}>
              <li><a href="/" className="text-dark">Personnalistion </a></li>
              <li><a href="/" className="text-dark">recommandation</a></li>
            <Link to={'/chat'}> <li><a href="/" className="text-dark">chatbot</a></li></Link> 
            </ul>
          </Col>
          <Col md={2}>
            <h5 className="mb-4" style={{ fontWeight: '550' }}>Aide</h5>
            <ul className="list-unstyled" style={{ cursor: 'pointer' }}>
              <li><a href="/" className="text-dark">Acheter en linge </a></li>
              <li><a href="/" className="text-dark">Paienment </a></li>
              <li><a href="/" className="text-dark">Livraison</a></li>
              <li><a href="/" className="text-dark">Retoure </a></li>
            </ul>
          </Col>
        </Row>
        <small className="text-center mt-5">&copy; Dress-Up, 2024. All rights reserved.</small>
      </Container>
    </footer>
  );
};

export default AppFooter;
