import React, { useState } from 'react';
import { Navbar, Nav, Offcanvas, Container, Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch ,faHeart } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Pages/Css/header.css';
import dress from '../assets/achref__1_-removebg.png'
import { Link } from 'react-router-dom';
import {FaShoppingCart} from "react-icons/fa"
import { useSelector } from "react-redux";



function SubList({ items, show }) {
  return (
    <ul style={{ listStyleType: 'none', paddingLeft: '0', backgroundColor: 'transparent', display: show ? 'block' : 'none' }}>
      {items.map((item, index) => (
        <li key={index} style={{ fontSize: '20px', color: '#000', padding: '8px', borderRadius: '5px', backgroundColor: 'transparent', textDecoration: 'none' }}>
          <a href={item.link} style={{ color: '#000' }}>{item.label}</a>
        </li>
      ))}
    </ul>
  );
}
function FloatingList({ title, categories }) {
  const [showList, setShowList] = useState(false);
  const handleShow = () => setShowList(true);
  const handleClose = () => setShowList(false);
  return (
    <div
  
      onMouseEnter={handleShow}
      onMouseLeave={handleClose}
      style={{ position: 'relative' }}
    >
      <Nav.Link style={{ fontSize: '20px', color: '#000' }}>{title}</Nav.Link>
      <Offcanvas show={showList} onHide={handleClose} placement="top" style={{ width: '100%', height: '400px' }}>
        <Offcanvas.Header closeButton>
        <Link to={'/home'}> <img src={dress}
         width="190"
         height="70"
         className="d-inline-block align-top"
         alt="Logo"
        /></Link>

          <Offcanvas.Title>{title}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Container>
            <Row>
              <Col xs={6} md={4}>
                <Row>
                  {
                    categories.map((category, index) => (
                      <div key={index} onMouseEnter={category.handleShow} onMouseLeave={category.handleClose}>
                        <h4>{category.title}</h4>
                        <SubList items={category.items} show={category.showList} />
                      </div>
                    ))}
                </Row>
              </Col>
              <Col className="text-right">
                <Row className="justify-content-end">
                  <Col className="text-center" xs={4} md={3}>
                    <Image src="https://static.zara.net/photos///2023/I/0/2/p/7545/517/403/2/w/404/7545517403_1_1_1.jpg?ts=1690540990406" rounded style={{ width: '150px', height: '180px' }} />
                    <h6 style={{ color: '#000' }}>Clasique</h6>
                  </Col>
                  <Col className="text-center" xs={4} md={3}>
                    <Image src="https://static.zara.net/photos///2024/V/T/1/p/0076/144/880/2/w/676/0076144880_1_1_1.jpg?ts=1707405802770" rounded style={{ width: '150px', height: '180px' }} />
                    <h6 style={{ color: '#000' }}>Streetware</h6>
                  </Col>
                  <Col className="text-center" xs={4} md={3}>
                    <Image src="https://static.zara.net/photos///2024/V/0/2/p/6674/405/800/2/w/563/6674405800_1_1_1.jpg?ts=1706111270418" rounded style={{ width: '150px', height: '180px' }} />
                    <h6 style={{ color: '#000' }}>Casual</h6>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

function AppNavbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const {cart} = useSelector((state) => state);

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const [hommeVetementsShowList, setHommeVetementsShowList] = useState(false);
  const [hommeChaussuresShowList, setHommeChaussuresShowList] = useState(false);
  const [hommeAccessoiresShowList, setHommeAccessoiresShowList] = useState(false);

  const [femmeVetementsShowList, setFemmeVetementsShowList] = useState(false);
  const [femmeChaussuresShowList, setFemmeChaussuresShowList] = useState(false);
  const [femmeAccessoiresShowList, setFemmeAccessoiresShowList] = useState(false);

  const [enfantVetementsShowList, setEnfantVetementsShowList] = useState(false);
  const [enfantChaussuresShowList, setEnfantChaussuresShowList] = useState(false);
  const [enfantAccessoiresShowList, setEnfantAccessoiresShowList] = useState(false);

  const hommeCategories = [
    { title: 'Vêtements', items: [{ label: 'T-shirts', link: '#action/3.1.1' }, { label: 'Pantalons', link: '#action/3.1.2' }], showList: hommeVetementsShowList, handleShow: () => setHommeVetementsShowList(true), handleClose: () => setHommeVetementsShowList(false) },
    { title: 'Chaussures', items: [{ label: 'Baskets', link: '#action/3.2.1' }, { label: 'Bottes', link: '#action/3.2.2' }], showList: hommeChaussuresShowList, handleShow: () => setHommeChaussuresShowList(true), handleClose: () => setHommeChaussuresShowList(false) },
    { title: 'Accessoires', items: [{ label: 'Sacs', link: '#action/3.3.1' }, { label: 'Ceintures', link: '#action/3.3.2' }], showList: hommeAccessoiresShowList, handleShow: () => setHommeAccessoiresShowList(true), handleClose: () => setHommeAccessoiresShowList(false) }
  ];

  const femmeCategories = [
    { title: 'Vêtements', items: [{ label: 'Robes', link: '#action/3.4.1' }, { label: 'Jupes', link: '#action/3.4.2' }], showList: femmeVetementsShowList, handleShow: () => setFemmeVetementsShowList(true), handleClose: () => setFemmeVetementsShowList(false) },
    { title: 'Chaussures', items: [{ label: 'Sandales', link: '#action/3.5.1' }, { label: 'Escarpins', link: '#action/3.5.2' }], showList: femmeChaussuresShowList, handleShow: () => setFemmeChaussuresShowList(true), handleClose: () => setFemmeChaussuresShowList(false) },
    { title: 'Accessoires', items: [{ label: 'Bijoux', link: '#action/3.6.1' }, { label: 'Écharpes', link: '#action/3.6.2' }], showList: femmeAccessoiresShowList, handleShow: () => setFemmeAccessoiresShowList(true), handleClose: () => setFemmeAccessoiresShowList(false) }
  ];

  const enfantCategories = [
    { title: 'Vêtements', items: [{ label: 'Robes', link: '#action/3.7.1' }, { label: 'Jupes', link: '#action/3.7.2' }], showList: enfantVetementsShowList, handleShow: () => setEnfantVetementsShowList(true), handleClose: () => setEnfantVetementsShowList(false) },
    { title: 'Chaussures', items: [{ label: 'Sandales', link: '#action/3.8.1' }, { label: 'Escarpins', link: '#action/3.8.2' }], showList: enfantChaussuresShowList, handleShow: () => setEnfantChaussuresShowList(true), handleClose: () => setEnfantChaussuresShowList(false) },
    { title: 'Accessoires', items: [{ label: 'Bijoux', link: '#action/3.9.1' }, { label: 'Écharpes', link: '#action/3.9.2' }], showList: enfantAccessoiresShowList, handleShow: () => setEnfantAccessoiresShowList(true), handleClose: () => setEnfantAccessoiresShowList(false) }
  ];

  
  
  return (
    <Navbar bg="transparent" expand="lg" variant="dark" style={{ backgroundColor: 'transparent', position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
      <Navbar.Brand href="#home">
      <Link to={'/home'}> <img
          src={dress}
          width="190"
          height="70"
          className="d-inline-block align-top"
          alt="Logo"
        /></Link>
       
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="ml-auto">
        <Nav className="mr-auto">
          <FloatingList title="Homme" categories={hommeCategories} />
          <FloatingList title="Femme" categories={femmeCategories} />
          <FloatingList title="Enfants" categories={enfantCategories} />
        </Nav>
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto', marginRight: '15px' }}>
        <div className={`search-container ${searchOpen ? 'search-open' : ''}`} >
          <input
            type="text"
            placeholder="Rechercher..."
            className={`search-input ${searchOpen ? 'search-open' : ''}`}
          />
          <button className="search-btn" onClick={toggleSearch}>
            {searchOpen ? 'X' : <FontAwesomeIcon icon={faSearch} style={{ color: '#000', fontSize: '22px', cursor: 'pointer' }}/>}
          </button>
        </div>
          <div > 
          <Link to={'/login'}>
           <FontAwesomeIcon icon={faUser} style={{ color: '#000', fontSize: '22px', cursor: 'pointer' }} />
           </Link> 

          </div>
          
   <div>
   
      <Link to={"/ca"}>  <div className="relative">
                  <FaShoppingCart className="text-2xl"/>
                  { cart.length > 0 &&
                    <span
                    className="absolute -top-1 -right-2 bg-red-600 text-xs w-5 h-5 flex 
                    justify-center items-center animate-bounce rounded-full text-white" 
                    >{cart.length}</span>
                  }
                  
              </div></Link>
  
</div>

          <div>
            <FontAwesomeIcon icon={faHeart} style={{ color: '#000', fontSize: '23px', cursor: 'pointer' }} /></div>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
} 

export default AppNavbar;