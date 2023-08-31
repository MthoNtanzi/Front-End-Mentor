import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { ReactComponent as Logo } from './images/logo.svg';
import { ReactComponent as CartImg } from './images/icon-cart.svg';
import { ReactComponent as Menu } from './images/icon-menu.svg';
import { ReactComponent as CloseMenu } from './images/icon-close.svg'
import { ReactComponent as DeleteImg } from './images/icon-delete.svg'
import { Sneakers } from './Sneakers';

import avatar from './images/image-avatar.png'
import './Navbar.css'


export default function Navbar({itemCount, deleteItems}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  const [display, setDisplay] = useState('hidden');
  const [totalPrice, setTotalPrice] = useState(0);

  const cartRef = useRef(null);

  useEffect(() => {
    const getTotalPrice = () => { setTotalPrice(125 * itemCount) };
    getTotalPrice();
  },[itemCount])

  const showCart = () => {
    setDisplay('block');
  }
  const hideCart = () => {
    setDisplay('hidden')
  }
  const checkout = () => {
    window.alert('Purchase Successful');
    deleteItems();   
  }
  
  useEffect(() => {
    const handleClickOut = (e) => {
      if (cartRef.current && !cartRef.current.contains(e.target)) {
        hideCart();
      }
    };
    document.addEventListener('mousedown', handleClickOut);
    return () => {
      document.removeEventListener('mousedown', handleClickOut);
    }
  }, []);

  return (
      <div className='Navbar flex justify-between items-center h-20 px-3'>
      
      <div className='flex gap-4'>
        <div className='menuBar md:hidden pt-1'>
          {menuOpen ? (
            <>
            < CloseMenu onClick={handleMenu}/>
              <div className='flex flex-col fixed top-0 left-0 z-50 h-screen w-3/5 pt-9 pl-4 bg-white slide-in-left'>
              < CloseMenu onClick={handleMenu}/>
                <a href='/' className='py-3 font-bold'>Collections</a>
                <a href='/' className='py-3 font-bold'>Men</a>
                <a href='/' className='py-3 font-bold'>Women</a>
                <a href='/' className='py-3 font-bold'>About</a>
                <a href='/' className='py-3 font-bold'>Contact</a>
              </div>
            </>
          ) : <Menu onClick={handleMenu}/>}
        </div>
        <Logo />
        <div className='menu hidden md:inline-block'>
            <a href='/' className='px-3 menuTitles'>Collections</a>
            <a href='/' className='px-3 menuTitles'>Men</a>
            <a href='/' className='px-3 menuTitles'>Women</a>
            <a href='/' className='px-3 menuTitles'>About</a>
            <a href='/' className='px-3 menuTitles'>Contact</a>
        </div>      
      </div>
        
      <div className='flex gap-1 p-3'>
        <div>
          < CartImg className='h-8 w-8 pt-1 hover:cursor-pointer' onClick={showCart} />
          {itemCount>0&& <p className='absolute top-4 ml-3 bg-orange-500 text-white rounded-full w-4 h-3 px-2 text-center text-xs flex justify-center content-center'>{itemCount}</p>}
         
        </div>
        <img src={avatar} alt='avatar' className='h-8 hover:cursor-pointer hover:border-2 hover:border-orange-500 rounded-full' />
        <div ref={cartRef} className={`z-10 absolute top-14 md:right-20 shadow-2xl rounded-xl w-4/5 right-3.5  md:w-72 bg-white ${display}`}>
          <h1 className='p-4'>Cart</h1>
          <div className='border-t flex items-center justify-center h-36'>
            {itemCount == 0?(<p>Your cart is empty</p>):(
            <div>
              <div className='flex justify-between'>
                <img src='./images/image-product-1-thumbnail.jpg'  className=' rounded w-10'/>
                <div className='px-2'>
                  <p className='text-sm font-semibold text-gray-500'>Fall Limited Edition Sneakers</p>
                  <p className='text-sm'>{`$125.00 x ${itemCount}`} <span className='font-bold'>${totalPrice}</span></p>
                </div>
                <DeleteImg className='justify-self-center self-center hover:cursor-pointer' onClick={deleteItems}/>
              </div>
              <button className='button bg-orange-500 text-white w-full p-2 mt-3 font-medium rounded-md text-lg hover:opacity-75' onClick={checkout}>Checkout</button>
            </div>)}
          </div>
        </div>
        </div>
    </div>
  )
}
