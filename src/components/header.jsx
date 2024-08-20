import React, { useState } from 'react'
import Navbar from './navbar'

export default function Header() {

  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className='relative h-20 flex items-center md:h-36'>
        <figure className='ml-6'>
            <img src="logo.svg" alt="" />
        </figure>
        <div className='flex justify-end w-full mr-6'>
            <button className='md:hidden' onClick={toggleMenu}>
                <img src="icon-menu.svg" alt="" />
            </button>
            <Navbar toggleMenu={toggleMenu}  openMenu={openMenu}/>
        </div>
    </div>
  )
}
