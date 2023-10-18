import React from 'react'
import logo from '../assets/Nikelogo.png'
import "./Nav.css"

const Nav = () => {
  return (
    <>
        <nav>
            <div className='img-logo'>
                <img src={logo} alt='logo_img'/>
            </div>
            <div className='navigation'>
                <ul>
                    <li href="#">HOME</li>
                    <li href="#">COLLECTION</li>
                    <li href="#">ABOUT</li>
                    <li href="#">CONTACT</li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Nav