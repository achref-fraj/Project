import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const AppContact = () => {
  const [emailClicked, setEmailClicked] = useState(false);

  const handleEmailClick = () => {
    setEmailClicked(true);
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center" >
        <Col md={8}>
          <h2 className="text-center mb-4"style={{ marginBottom: '60px' }} >Contactez-nous</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Entrez votre email"
                onClick={handleEmailClick}
                onFocus={handleEmailClick}
              />
            </Form.Group>

            {emailClicked && (
              <>
                <Form.Group className="mb-3" controlId="formBasicSubject">
                  <Form.Label>Sujet</Form.Label>
                  <Form.Control type="text" placeholder="Entrez le sujet" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={5} placeholder="Entrez votre message" />
                </Form.Group>
              </>
            )}

            <Button variant="dark" type="submit" className="w-100">
              Envoyer
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AppContact;
