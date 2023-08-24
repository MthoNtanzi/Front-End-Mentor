import './App.css';
import Navbar from './Navbar';
import { Sneakers } from './Sneakers';
import { useState } from 'react';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const deleteItems = () => {
    setCartItems([]);
  };

  const getTotalItemCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className='md:px-24'>
      < Navbar itemCount={getTotalItemCount()} totalPrice={getTotalPrice()} deleteItems={deleteItems}/>
      < Sneakers cartProducts={addToCart} />
    </div>
    
  );
}

export default App;
