import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../images/enfant1.jpg';
import img2 from '../images/enfant2.jpg';
import img3 from '../images/enfant3.jpg';
import img4 from '../images/enfant4.jpg';
import img5 from '../images/fille1.jpg';
import img6 from '../images/fille2.jpg';
import img7 from '../images/fille3.jpg';
import img8 from '../images/fille4.jpg';
import img9 from '../images/men1.jpg';
import img10 from '../images/men2.jpg';
import img11 from '../images/men3.jpg';
import img12 from '../images/men4.jpg';
import img13 from '../images/men5.jpg';
import img14 from '../images/men6.jpg';
import img15 from '../images/women1.jpg';
import img16 from '../images/women2.jpg';
import img17 from '../images/women3.jpg';
import img18 from '../images/women4.jpg';
import img19 from '../images/women5.jpg';
import img20 from '../images/women6.jpg';
import img21 from '../images/women11.jpg';
import img22 from '../images/women12.jpg';
import img23 from '../images/women21.jpg';
import img24 from '../images/women22.jpg';
import '../Pages/Css/product.css'; // Import the CSS file

const ImageToggleOnMouseOver = ({ primaryImg, secondaryImg, model, price }) => {
  const imageRef = useRef(null);

  return (
    <Link to={'/Carte'}>
      <div className="image-toggle-container">
        <img
          className="image-toggle"
          onMouseOver={() => {
            imageRef.current.src = secondaryImg;
          }}
          onMouseOut={() => {
            imageRef.current.src = primaryImg;
          }}
          src={primaryImg}
          alt=""
          ref={imageRef}
        />
        <div className="image-info">
          <p>{model}</p>
          <p>{price}</p>
        </div>
      </div>
    </Link>
  );
};

function ShapeExample() {
  return (
    <div className="product-container">
      <h1 className="product-title">Product</h1>
      <div className="image-row">
        <div className="image-group-1">
          <ImageToggleOnMouseOver primaryImg={img2} secondaryImg={img1} model="Model 1" price="price: $504" alt="" />
          &nbsp; &nbsp; &nbsp;
          <ImageToggleOnMouseOver primaryImg={img15} secondaryImg={img16} model="Model 2" price="price: $70" alt="" />
          &nbsp; &nbsp; &nbsp;
          <ImageToggleOnMouseOver primaryImg={img9} secondaryImg={img10} model="Model 3" price="price: $504" alt="" />
          &nbsp; &nbsp; &nbsp;
          <ImageToggleOnMouseOver primaryImg={img5} secondaryImg={img6} model="Model 4" price="price: $70" alt="" />
        </div>
        <div className="image-group-2">
          <ImageToggleOnMouseOver primaryImg={img17} secondaryImg={img18} model="Model 5" price="price: $504" alt="" />
          &nbsp; &nbsp; &nbsp;
          <ImageToggleOnMouseOver primaryImg={img11} secondaryImg={img12} model="Model 6" price="price: $70" alt="" />
          &nbsp; &nbsp; &nbsp;
          <ImageToggleOnMouseOver primaryImg={img7} secondaryImg={img8} model="Model 7" price="price: $504" alt="" />
          &nbsp; &nbsp; &nbsp;
          <ImageToggleOnMouseOver primaryImg={img3} secondaryImg={img4} model="Model 8" price="price: $70" alt="" />
        </div>
        
        <div className="image-group-3">
          <ImageToggleOnMouseOver primaryImg={img13} secondaryImg={img14} model="Model 9" price="$504" alt="" />
          &nbsp; &nbsp; &nbsp;
          <ImageToggleOnMouseOver primaryImg={img19} secondaryImg={img20} model="Model 10" price="$70" alt="" />
          &nbsp; &nbsp; &nbsp;
          <ImageToggleOnMouseOver primaryImg={img21} secondaryImg={img22} model="Model 11" price="$504" alt="" />
          &nbsp; &nbsp; &nbsp;
          <ImageToggleOnMouseOver primaryImg={img23} secondaryImg={img24} model="Model 12" price="$70" alt="" />
        </div>
      </div>
    </div>
  );
}

export default ShapeExample;
