"use client";

import Image from "next/image";
import Logo from "../../public/logo.svg";
import Contact from "../../public/contacts.svg";
import React from "react";
import "../styles/navbar.css";
import { ProfileCircle } from "iconsax-react";
import Arrow from "../../public/arrow.svg";

const Navbar = () => {
  return (
    <header className="navbar">
      <nav className="nav">
        <ul className="nav_list">
          <li className="nav_item1">
            <Image src={Logo} alt="logo" />
          </li>
          <li className="nav_item2">
            <Image src={Contact} alt="contact" />
          </li>
          <li className="nav_item3">
            <Image src={Arrow} alt="arrow" />
            {/* <p className="text">Download App</p> */}
          </li>
          <li className="nav_item4">
            <ProfileCircle color="black" variant="Outline" size={30} />
            {/* <p className="text">Hi Ravi!</p> */}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
