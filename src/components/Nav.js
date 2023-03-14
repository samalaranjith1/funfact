import React from 'react'
import logo from '../images/logo.svg';

function Nav() {
  

  return (
    <header>  
        <nav className='nav'>
            <img src={logo} alt="image" className='nav-img'></img>
            <ul className='nav-items'>
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    </header>

  )
}

export default Nav