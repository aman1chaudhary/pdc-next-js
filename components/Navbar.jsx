import React, { useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from "../public/assets/images/logo.png"
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <div className="navbar">
        <div className="nav-phone">
          <div className="nav-logo">
            <Link href="/" className="logo-image">
              <Image src={Logo} alt="logo" className='logo-image-img'/>
            </Link>
          </div>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>

        <ul className={click ? "nav-menu nav-menu-active" : "nav-menu"}>
          <li className="nav-item">
            <Link href="/" className="nav-links" onClick={handleClick}  >
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link href="/about" className="nav-links" onClick={handleClick} >
              About
            </Link>
          </li>

          <li className="nav-item">
            <Link href="/blog" className="nav-links" onClick={handleClick} >
              Blog
            </Link>
          </li>

          <li className="nav-item">
            <Link href="/contact" className="nav-links" onClick={handleClick} >
              Contact Us
            </Link>
          </li>
        </ul>



      </div>
    </>

  )
}

export default Navbar