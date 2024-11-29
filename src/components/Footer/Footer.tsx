"use client";
import "./footer.css";
import Image from "next/image";
import Logo from "../../../public/logo.svg";
import Vector1 from "../../../public/Vector1.svg";

export default function Footer() {
  return (
    <div className="footer-container">
      <Image 
        src={Logo} 
        alt="Yatri Cabs Logo" 
        className="footer-logo"
        width={185}
        height={60}
      />
      
      <div className="nav-links">
        <div className="nav-item">Home</div>
        <div className="nav-item">About</div>
        <div className="nav-item">Services</div>
        <div className="nav-item">News</div>
        <div className="nav-item">Contact</div>
        <div className="nav-item">Privacy Policy</div>
      </div>

      <div className="newsletter-section">
        <div className="newsletter-title">Newsletter</div>
        <div className="newsletter-form">
          <div className="input-wrapper">
            <div className="input-container">
              <input 
                type="email" 
                placeholder="Email" 
                className="email-input"
              />
            </div>
            <button className="submit-button">
              <Image 
                src={Vector1} 
                alt="Submit" 
                width={20}
                height={12}
              />
            </button>
          </div>
        </div>
      </div>

      <div className="copyright">
        All Copyrights are reserved by YATRI CABS
      </div>
    </div>
  );
}