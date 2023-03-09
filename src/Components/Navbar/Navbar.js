import React, { useState, useEffect } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import './Navbar.css';
import { FaHome, FaBriefcase, FaTools } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';
import { AiFillPhone } from 'react-icons/ai';


const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 860);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const handleMobileMenuItemClick = () => {
    setShowMobileMenu(false);
  };

  return (
    <div>
      <nav>
        <a className="logo" href="#home">giorgi<span className="github">.me</span></a>
        {isMobile && (
          <div className="mobile-menu">
            <HamburgerMenu
              isOpen={showMobileMenu}
              menuClicked={toggleMobileMenu}
              width={18}
              height={15}
              strokeWidth={2}
              rotate={0}
              color='white'
              borderRadius={0}
              animationDuration={0.5}
            />
            <div className={`mobile-menu-items ${showMobileMenu ? 'show' : ''}`}>
              <ul>
                <li>
                  <a href="#home" onClick={handleMobileMenuItemClick}><FaHome /> Home</a>
                </li>
                <li>
                  <a href="#about" onClick={handleMobileMenuItemClick}><BsFillPersonFill /> About</a>
                </li>
                <li>
                  <a href="#experience" onClick={handleMobileMenuItemClick}><FaBriefcase /> Experience</a>
                </li>
                <li>
                  <a href="#services" onClick={handleMobileMenuItemClick}><FaTools /> Services</a>
                </li>
                <li>
                  <a href="#contact" onClick={handleMobileMenuItemClick}><AiFillPhone /> Contact</a>
                </li>
              </ul>
            </div>
          </div>
        )}
        {!isMobile && (
          <ul className="desktop-menu">
            <li>
              <a href="#home"><FaHome /> Home</a>
            </li>
            <li>
              <a href="#about"><BsFillPersonFill /> About</a>
            </li>
            <li>
              <a href="#experience"><FaBriefcase /> Experience</a>
            </li>
            <li>
              <a href="#services"><FaTools /> Services</a>
            </li>
            <li>
              <a href="#contact"><AiFillPhone /> Contact</a>
            </li>
          </ul>
        )}
      </nav>
    </div>
  )
}

export default Navbar;
