import React from 'react'
import '../Assets/css/header.css'
import { Link, NavLink } from 'react-router-dom'
import { BiSolidCat, BiSolidMoon, BiSolidSun } from 'react-icons/bi'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GoHomeFill } from 'react-icons/go'
import { IoIosSettings } from 'react-icons/io'
import { LuPenLine } from 'react-icons/lu'
import { TfiShoppingCart } from 'react-icons/tfi'


const Header = () => {
  return (
    <header>
      <Link to={'/'}><BiSolidCat className='logoHeader'/></Link>

      <nav className="iconsBox">
        <NavLink to={'/home'}><GoHomeFill className='iconStyle'/></NavLink>
        <NavLink to={'/cart'}><TfiShoppingCart className='iconStyle'/></NavLink>
        <NavLink to={'/contact'}><LuPenLine className='iconStyle'/></NavLink>
        <a href="#"><IoIosSettings className='iconStyle'/></a>
        <BiSolidMoon className='iconStyle iconMode'/>
        <BiSolidSun className='iconStyle iconMode'/>
        {/* <GiHamburgerMenu className='iconStyle iconMobile'/> */}
      </nav>
    </header>
  )
}

export default Header