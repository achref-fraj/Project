import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './Css/panier.css';
import {  Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Panier = () => {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Product 1', price: 20, image: 'https://static.zara.net/photos///2024/V/1/2/p/2064/220/723/2/w/1920/2064220723_6_1_1.jpg?ts=1700145322723', quantity: 1 },
        { id: 2, name: 'Product 2', price: 30, image: 'https://static.zara.net/photos///2024/V/1/1/p/6009/310/800/4/w/824/6009310800_6_1_1.jpg?ts=1707471323192', quantity: 1 },
        { id: 3, name: 'Product 3', price: 25, image: 'https://static.zara.net/photos///2023/I/0/2/p/0761/362/803/2/w/300/0761362803_6_1_1.jpg?ts=1693470218642', quantity: 1 },
        { id: 4, name: 'Product 4', price: 25, image: 'https://static.zara.net/photos///2023/I/0/2/p/6985/450/800/2/w/824/6985450800_6_1_1.jpg?ts=1691076765248', quantity: 1 },
        { id: 5, name: 'Product 5', price: 25, image: 'https://static.zara.net/photos///2023/I/0/2/p/0761/360/803/2/w/300/0761360803_6_1_1.jpg?ts=1693470622605', quantity: 1 }
    ]); 

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const removeFromCart = (id) => {
        const updatedCart = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCart);
    };

    const increaseQuantity = (id) => {
        const updatedCart = cartItems.map(item => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        setCartItems(updatedCart);
    };

    const decreaseQuantity = (id) => {
        const updatedCart = cartItems.map(item => {
            if (item.id === id && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        });
        setCartItems(updatedCart);
    };

    const handlePayment = () => {
        // Add logic to handle payment
        console.log('Payment handled');
    };

    return (
        <div className="cart-container" style={{ marginTop: '150px' }}>
            <div className="cart-header">
                <h1 className="cart-title">Mon Panier</h1>
                <div className="total">Total: {calculateTotal()} $</div>

           <Link to={"/Paiement"}> <Button  variant="dark" className="mt-2" onClick={handlePayment}>Payer</Button></Link>   
            </div>
            <div className="cart-items">
                {cartItems.map(item => (
                    <div key={item.id} className="cart-item">
                        <div className="item-details">
                            <p className="item-name">{item.name}</p>
                            <p className="item-price">{item.price} $</p>
                            <div className="quantity-controls">
                                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => increaseQuantity(item.id)}>+</button>
                            </div>
                        </div>
                        <div className="item-image">
                            <img src={item.image} alt={item.name} />
                            <FontAwesomeIcon icon={faTimes} className="delete-icon" onClick={() => removeFromCart(item.id)} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Panier;
