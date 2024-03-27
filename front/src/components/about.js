import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function AppAbout() {
  return (
    <div style={{ marginTop: '30px' }}>
      <h2 style={{ marginBottom: '30px' }}>Avoir le look</h2>
      <Container style={{ border: '', padding: '30px', backgroundColor: '#e9ecef', maxWidth: '1600px' }}>
        <Row className="justify-content-between">
          <Col xs={6} sm={3} className="mb-4 position-relative">
            <div className="image-container">
              <Image src="https://static.zara.net/photos///2023/I/0/2/p/0706/215/710/2/w/364/0706215710_1_1_1.jpg?ts=1692959816178" rounded fluid />
            </div>
            <div className="text-overlay">
              <div className="text-left" style={{ color: 'black', fontSize: '14px', fontWeight: 'bold', position: 'absolute', bottom: '10px', left: '10px' }}>
                TRENDY
              </div>
            </div>
          </Col>
          <Col xs={6} sm={3} className="mb-4 position-relative">
            <div className="image-container">
              <Image src="https://static.zara.net/photos///2024/V/0/2/p/4092/410/251/2/w/375/4092410251_1_1_1.jpg?ts=1706087336418" rounded fluid />
            </div>
            <div className="text-overlay">
              <div className="text-left" style={{ color: 'black', fontSize: '14px', fontWeight: 'bold', position: 'absolute', bottom: '10px', left: '10px' }}>
                Basic 
              </div>
            </div>
          </Col>
          <Col xs={6} sm={3} className="mb-4 position-relative">
            <div className="image-container">
              <Image src="https://static.zara.net/photos///2024/V/0/2/p/5070/435/802/2/w/364/5070435802_1_1_1.jpg?ts=1704205346674" rounded fluid />
            </div>
            <div className="text-overlay">
              <div className="text-left" style={{ color: 'black', fontSize: '14px', fontWeight: 'bold', position: 'absolute', bottom: '10px', left: '10px' }}>
                Casual
              </div>
            </div>
          </Col>
          <Col xs={6} sm={3} className="mb-4 position-relative">
            <div className="image-container">
              <Image src="https://static.zara.net/photos///2024/V/0/2/p/6985/450/800/2/w/375/6985450800_1_1_1.jpg?ts=1703243922805" rounded fluid />
            </div>
            <div className="text-overlay">
              <div className="text-left" style={{ color: 'black', fontSize: '14px', fontWeight: 'bold', position: 'absolute', bottom: '10px', left: '10px' }}>
              Streetwear
              </div>
            </div>
          </Col>
          {/* Répéter le même schéma pour les autres images */}
          {/* ... */}
        </Row>
        {/* Ajouter la vidéo YouTube */}
      </Container>
    </div>
  );
}

export default AppAbout;
