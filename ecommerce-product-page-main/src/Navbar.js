import React from 'react'
import { useState } from 'react';
import { ReactComponent as Logo } from './images/logo.svg';
import { ReactComponent as CartImg } from './images/icon-cart.svg';
import { ReactComponent as Menu } from './images/icon-menu.svg';
import { ReactComponent as CloseMenu } from './images/icon-close.svg'

import avatar from './images/image-avatar.png'
import './Navbar.css'


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
      <div className='Navbar flex justify-between items-center h-20 px-3'>
      
      <div className='flex gap-4'>
        <div className='menuBar md:hidden pt-1'>
          {menuOpen ? (
            <>
            < CloseMenu onClick={handleMenu}/>
              <div className='flex flex-col absolute top-0 left-0 h-screen w-3/5 pt-9 pl-4 bg-white slide-in-left'>
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
        < CartImg className='h-8 w-8 pt-1 hover:cursor-pointer' />
            <img src={ avatar } alt='avatar' className='h-8 hover:cursor-pointer hover:border-2 hover:border-orange-500 rounded-full'/>       
        </div>
    </div>
  )
}
