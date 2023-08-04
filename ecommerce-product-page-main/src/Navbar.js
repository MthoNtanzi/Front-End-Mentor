import React from 'react'
import { ReactComponent as Logo } from './images/logo.svg';
import { ReactComponent as Cart } from './images/icon-cart.svg';
import { ReactComponent as Menu } from './images/icon-menu.svg';

import avatar from './images/image-avatar.png'
import './Navbar.css'

export default function Navbar() {
  return (
      <div className='Navbar flex justify-between items-center h-20 px-2'>
      
      <div className='flex gap-4'>
        <div className='menuBar md:hidden'>
          <Menu />
        </div>
        <Logo />
        <div className='menu hidden md:inline-block'>
            <a href='/' className='px-3'>Collections</a>
            <a href='/' className='px-3'>Men</a>
            <a href='/' className='px-3'>Women</a>
            <a href='/' className='px-3'>About</a>
            <a href='/' className='px-3'>Contact</a>
        </div>      
      </div>
        
        <div className='flex'>
            < Cart />
            <img src={ avatar } alt='avatar' className='h-12'/>       
        </div>
    </div>
  )
}
