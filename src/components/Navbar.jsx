import { Navbar } from "flowbite-react";
import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { gsap } from "gsap";

const LinkComp = ({ children, link }) => {
  return (
    <Link to={link}>
      <div className="py-2 px-3 rounded-md hover:duration-300 hover:bg-primary hover:text-white">
        {children}
      </div>
    </Link>
  );
};

export const NavbarComp = () => {
  return (
    <Navbar fluid={true} rounded={false}>
      <Navbar.Brand>
        <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
        <span className="self-center whitespace-nowrap text-xl font-display dark:text-white">
          Level Up
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <LinkComp link="/" children="Home" />
        <LinkComp link="profile" children="Profile" />
        <LinkComp link="login" children="Login" />
        <LinkComp link="register" children="Register" />
      </Navbar.Collapse>
    </Navbar>
  );
};
