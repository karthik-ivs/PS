import React, { useState } from 'react';
import CartDetails from './CartDetails';
import './CartDetails.css';

const fruits = [
  { id: 1, name: 'Apple', price: '₹250/kg', img: './apple.jpeg' },
  { id: 2, name: 'Banana', price: '₹50/kg', img: './banana.jpeg' },
  { id: 3, name: 'Mango', price: '₹200/kg', img: './mango.jpeg' },
  { id: 4, name: 'Orange', price: '₹120/kg', img: './org.jpeg' },
  { id: 5, name: 'Grapes', price: '₹180/kg', img: './grapes.jpeg' },
  { id: 6, name: 'Pineapple', price: '₹45/kg', img: './pine.jpeg' },
  { id: 7, name: 'Watermelon', price: '₹40/kg', img: './water.jpeg' },
  { id: 8, name: 'Papaya', price: '₹60/kg', img: './papaya.jpeg' },
];

function FruitStore() {
  const [cart, setCart] = useState([]);

  const addToCart = (fruit) => {
    const exists = cart.find(item => item.id === fruit.id);
    if (exists) {
      setCart(cart.map(item =>
        item.id === fruit.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...fruit, quantity: 1 }]);
    }
  };

  return (
    <div className="container">
      <h1>Fresh Fruits Store</h1>

      <div className="grid">
        {fruits.map(fruit => (
          <div key={fruit.id} className="card">
            <img src={fruit.img} alt={fruit.name} />
            <div className="card-content">
              <p>{fruit.name}</p>
              <p>{fruit.price}</p>
              <button onClick={() => addToCart(fruit)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <CartDetails cart={cart} setCart={setCart} />
    </div>
  );
}

export default FruitStore;