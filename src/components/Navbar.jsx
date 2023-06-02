import { Navbar } from "flowbite-react";
import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { gsap } from "gsap";

const LinkComp = ({ children, link }) => {
  return (
    <Link to={link}>
      <div className="rounded-md px-3 py-2 hover:bg-primary hover:text-white hover:duration-300">
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
        <span className="self-center whitespace-nowrap font-display text-xl dark:text-white">
          Level Up
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <LinkComp link="/" children="Home" />
        <LinkComp link="profile" children="Be a creator" />
        <LinkComp link="login" children="Find a gig" />
        <LinkComp link="register" children="Find a freelancer" />
      </Navbar.Collapse>
    </Navbar>
  );
};
