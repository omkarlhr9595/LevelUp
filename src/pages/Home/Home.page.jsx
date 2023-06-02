import React, { useEffect, useRef } from "react";
import { Navbar, Button } from "flowbite-react";
import { useMatch } from "react-router-dom";
import { gsap } from "gsap";
import { Power3, Power4 } from "gsap/all";
import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../../state/freelancer.state";
import people1 from "../../assets/people1.svg";
import people2 from "../../assets/people2.svg";
import logo from "../../assets/logo-text-black.png";
import barba from "@barba/core";
const Home = () => {
  const tag = useRef(null);
  const button = useRef(null);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const isFreelancerAuth = Boolean(
    useSelector((state) => state.freelancer.token)
  );

  return (
    <main
      data-barba="container"
      data-barba-namespace="home"
      className="bg-white"
    >
      <div className="flex h-screen w-full flex-col">
        <div className="flex h-40 items-center justify-center border-b-2 border-b-black sm:h-60">
          <img src={logo} className="sm:h-[90%]" alt="" />
        </div>
        <div className="flex flex-grow flex-col sm:flex-row">
          <div className="flex h-1/2 w-full items-center justify-evenly border-b-2  border-b-black bg-fuchsia sm:h-full sm:border-r-2 sm:border-r-black">
            <img src={people1} className="w-[40%] self-end" alt="" />
            <button
              onClick={() => {
                navigate("/freelancer");
              }}
              className="custom-button bg-secondary"
            >
              I AM A FREELANCER
            </button>
          </div>
          <div className="flex h-1/2 w-full items-center justify-evenly border-b-2 border-b-black  bg-secondary sm:h-full">
            <button
              onClick={() => {
                navigate("/client");
              }}
              className="custom-button "
            >
              I AM A CLIENT
            </button>
            <img src={people2} className="w-[40%] self-end" alt="" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;

const jsx = () => {
  return (
    <div className="flex h-96  w-full items-end justify-evenly border-b-2 border-b-black bg-secondary">
      <img src={people1} className="" alt="" />
      <div className="flex h-full flex-col items-center justify-evenly">
        <h1
          ref={tag}
          className="ml-10 self-center font-display text-4xl leading-tight sm:ml-10 sm:text-6xl"
        >
          "Streamline Your <br /> Freelancing Business <br />
          with Level Up"
        </h1>
        <div className="flex w-full items-center justify-around">
          <button
            onClick={() => {
              navigate("/freelancer");
            }}
            className="custom-button self-center"
          >
            I AM A FREELANCER
          </button>
          <button
            onClick={() => {
              navigate("/client");
            }}
            className="custom-button self-center"
          >
            I AM A CLIENT
          </button>
        </div>
      </div>
      <img src={people2} className="" alt="" />
    </div>
  );
};
