// Bar.js
//import React from "react";
import { BsList } from "react-icons/bs";
import { useState } from "react";

const Bar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClick = () => {
    setMenuOpen(false);
  };
  return (
    
      <header>
        <a href="#" className="logo">
          FOOD <span className="hub">Hub</span>
        
 
          </a>
         
        
        <div
          className={`bx bx-menu ${menuOpen ? "open" : ""}`}
          id="menu-icon"
          onClick={toggleMenu}
        >
          <BsList />
        </div>
        <ul className={`navbar ${menuOpen ? "open" : ""}`}>
          <li>
            <a href="#" onClick={handleMenuClick}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={handleMenuClick}>
              About
            </a>
          </li>
          <li>
            <a href="#menu" onClick={handleMenuClick}>
              Menu
            </a>
          </li>
          <li>
            <a href="#order" onClick={handleMenuClick}>
              Order
            </a>
          </li>
          <li>
            <a href="#service" onClick={handleMenuClick}>
              Service
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleMenuClick}>
              Contact
            </a>
          </li>
          <li>
            <a href="Login" onClick={handleMenuClick}>
             Log In / Register
             
            </a>
          </li>
        </ul>
      </header>
  )
}
export default Bar