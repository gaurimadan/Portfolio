import React from 'react'
import './Navbar.css';
import logo from '../../assets/ppf.jpg'
import Number from '../../assets/dialoguebox.png'

import {Link} from 'react-scroll'


const Navbar = () => {
  return (
   <nav className="navbar">
   <img src={logo} alt="logo" className='Logo'/>
   <div classname="desktopmenu">
   <Link className="deskMenuItem">Home</Link>
   <Link className="deskMenuItem">About</Link>
   <Link className="deskMenuItem">Projects</Link>
   <Link className="deskMenuItem">Experience</Link>

   </div>
    <button className="desktopmenubtn">
      <img src={Number} alt="contactme" className='deskImg'/>Contact me</button>
   </nav>
  )
}

export default Navbar
