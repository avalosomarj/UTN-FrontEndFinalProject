import React from 'react'
import '../Assets/css/header.css'
import { Link, NavLink } from 'react-router-dom'
import { BiSolidCat, BiSolidMoon, BiSolidSun } from 'react-icons/bi'
import { VscHome } from 'react-icons/vsc'
import { LuPenLine, LuSettings } from 'react-icons/lu'
import { TfiShoppingCart } from 'react-icons/tfi'


const Header = () => {
  return (
    <header>
      <Link to={'/'}><BiSolidCat className='logoHeader'/></Link>

      <nav className="iconsBox">
        <NavLink to={'/home'}><VscHome className='iconStyle'/></NavLink>
        <NavLink to={'/cart'}><TfiShoppingCart className='iconStyle'/></NavLink>
        <NavLink to={'/contact'}><LuPenLine className='iconStyle'/></NavLink>
        <a href="#"><LuSettings className='iconStyle'/></a>
        <BiSolidMoon className='iconStyle iconMode'/>
        <BiSolidSun className='iconStyle iconMode'/>
      </nav>
    </header>
  )
}

export default Header