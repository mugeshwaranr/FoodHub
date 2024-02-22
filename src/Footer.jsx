// Footer.js
//import React from "react";
import { BsGithub, BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import "./index.css"
const Footer = () => {
  return (
    <section id="contact">
    <div className="footer">
      <div className="main">
        <div className="col">
          <h4>Menu Links</h4>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#order">Order</a>
            </li>
            <li>
              <a href="#service">Service</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="col">
          <h4>Our Services</h4>
          <ul>
            <li>
              <a href="#">Web Development</a>
            </li>
            <li>
              <a href="#">Product Management</a>
            </li>
            <li>
              <a href="#">Food Delivery</a>
            </li>
            <li>
              <a href="#">Quality Food</a>
            </li>
            <li>
              <a href="#">Cart Service</a>
            </li>
          </ul>
        </div>

        <div className="col">
          <h4>Information</h4>
          <ul>
            <li>
              <a href="#about">About US</a>
            </li>
            <li>
              <a href="#">Delivery Information</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
          </ul>
        </div>

        <div className="col">
          <h4>Contact Us</h4>
          <div className="social-icons">
            <a href="">
              <BsFacebook />
            </a>
            <a href="">
              <BsTwitter />
            </a>
            <a href="https://www.instagram.com/m_xe_x">
              <BsInstagram />
            </a>
            <a href="https://www.youtube.com">
              <BsYoutube />
            </a>
            <a href="https://github.com/mugeshwaranr">
              <BsGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
    <li>
            <h4 className="rights"> © 2024 Mugeshwaran INDIA ,Inc . All rights reserved </h4>
            </li>
  </section>
  )
}
export default Footer;
