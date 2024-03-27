import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import { BsCheck, BsFilter } from 'react-icons/bs';

const options = [
  {
    name: 'Filter ',
    scroll: true,
    backdrop: false,
  },
];

const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple']; // Couleurs disponibles

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL']; // Tailles disponibles

const productTypes = ['Category 1', 'Category 2', 'Category 3']; // Catégories de produits disponibles

const CustomRangeSlider = ({ value, onChange }) => {
  return (
    <input
      type="range"
      min={0}
      max={1000}
      value={value}
      onChange={onChange}
      style={{
        width: '100%',
        height: '8px',
        borderRadius: '5px',
        appearance: 'none',
        backgroundColor: '#343a40',
        outline: 'none',
        opacity: '0.7',
        transition: 'opacity .15s ease-in-out',
        cursor: 'pointer',
      }}
    />
  );
};

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null); // Couleur sélectionnée
  const [selectedSize, setSelectedSize] = useState(null); // Taille sélectionnée
  const [selectedProductType, setSelectedProductType] = useState(null); // Catégorie de produit sélectionnée
  const [priceRange, setPriceRange] = useState(1000); // Plage de prix sélectionnée

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  const handleColorSelect = (color) => {
    if (selectedColor === color) {
      setSelectedColor(null); // Désélectionner si déjà sélectionné
    } else {
      setSelectedColor(color); // Sélectionner la couleur
    }
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size); // Sélectionner la taille
  };

  const handleProductTypeSelect = (type) => {
    setSelectedProductType(type); // Sélectionner la catégorie de produit
  };

  const handlePriceChange = (event) => {
    setPriceRange(+event.target.value);
  };

  const handleResetFilter = () => {
    setSelectedColor(null);
    setSelectedSize(null);
    setSelectedProductType(null);
    setPriceRange(1000);
  };

  const handleApplyFilter = () => {
    // Appliquer le filtre (vous pouvez implémenter cette fonction selon vos besoins)
    console.log('Filtre appliqué:', {
      selectedColor,
      selectedSize,
      selectedProductType,
      priceRange,
    });
  };

  return (
    <>
      <Button
  variant="outline-secondary"
  onClick={toggleShow}
  className="me-2"
  style={{ fontSize: '16px', width: '90px', height: '50px', float: 'right' }}
>
  <BsFilter /> {name}
</Button>

      <Offcanvas show={show} onHide={handleClose} placement="end" {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>FILTER</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form>
            <Form.Group controlId="colour">
              <Form.Label>COLOUR</Form.Label>
              <div>
                {colors.map((color, index) => (
                  <Button
                    key={index}
                    variant="outline-primary"
                    className="me-2 mb-2"
                    onClick={() => handleColorSelect(color)}
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      backgroundColor: color,
                      border: selectedColor === color ? '2px solid black' : '2px solid transparent',
                    }}
                  >
                    {selectedColor === color && <BsCheck color="black" />}
                  </Button>
                ))}
              </div>
            </Form.Group>

            <Form.Group controlId="size">
              <Form.Label>SIZE</Form.Label>
              <div>
                {sizes.map((size, index) => (
                  <Button
                    key={index}
                    variant={selectedSize === size ? "dark" : "outline-dark"}
                    className="me-2 mb-2 rounded-pill"
                    onClick={() => handleSizeSelect(size)}
                    style={{ width: '90px', height: '40px' }}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </Form.Group>

            <Form.Group controlId="productType">
              <Form.Label>PRODUCT TYPE</Form.Label>
              <div>
                {productTypes.map((type, index) => (
                  <Button
                    key={index}
                    variant={selectedProductType === type ? "dark" : "outline-dark"}
                    className="me-2 mb-2 rounded-pill"
                    onClick={() => handleProductTypeSelect(type)}
                    style={{ width: '130px', height: '40px' }}
                  >
                    {type}
                  </Button>
                ))}
              </div>
            </Form.Group>

            <Form.Group controlId="price">
              <Form.Label>PRICE</Form.Label>
              <CustomRangeSlider value={priceRange} onChange={handlePriceChange} />
              <Form.Label>
                {priceRange} TND - 1000 TND
              </Form.Label>
            </Form.Group>

            <div style={{ textAlign: 'center' }}>
              <Button   variant="secondary" className="me-2" onClick={handleResetFilter} style={{width:'120px',height:'50px'}} >    Reset Filter</Button>
              
              <Button variant="outline-dark"  onClick={handleApplyFilter} style={{width:'120px',height:'50px'}} >Apply Filter</Button>
            </div>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Example() {
  return (
    <>
      {options.map((props, idx) => (
        <OffCanvasExample key={idx} {...props} />
      ))}
    </>
  );
}

export default Example;
