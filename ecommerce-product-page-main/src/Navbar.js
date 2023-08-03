import React from 'react'
import { ReactComponent as Logo } from './images/logo.svg';
import { ReactComponent as Cart } from './images/icon-cart.svg';
import avatar from './images/image-avatar.png'
import './Navbar.css'

export default function Navbar() {
  return (
      <div className='Navbar flex justify-between h-20'>
        <Logo />
        <div className='menu hidden md:inline-block'>
            <a href='/'>Collections</a>
            <a href='/'>Men</a>
            <a href='/'>Women</a>
            <a href='/'>About</a>
            <a href='/'>Contact</a>
        </div>
        <div className='flex'>
            < Cart />
            <img src={ avatar } alt='avatar image' />       
        </div>
    </div>
  )
}
