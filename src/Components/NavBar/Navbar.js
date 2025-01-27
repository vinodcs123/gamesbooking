import React from 'react';
import icon from '../../assets/icons8-menu-bar-50.png'


function Navbar() {
  return (
<nav className='navbar-container'>
  <img className='navbar-logo' src='../../public/logo192.png' alt='logo'/>
  <ul className='navbar-list'>
  <li className='lists'>Home</li>
  <li className='lists'>Contact</li>
  <li className='lists'>History</li>
  </ul>
  <button className='navbar-button'>Get Started</button>
<img src={icon} alt='menu'/>
</nav>
  
  );
}

export default Navbar;
