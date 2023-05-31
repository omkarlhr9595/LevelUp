import React, { useEffect, useRef } from "react";
import { Navbar, Button } from "flowbite-react";
import { useMatch } from "react-router-dom";
import { gsap } from "gsap";
import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../../state/freelancer.state";
import people1 from "../../assets/people1.svg";
import people2 from "../../assets/people2.svg";
const Home = () => {
  const tag = useRef(null);
  const button = useRef(null);
  const navigate = useNavigate();
  // useEffect(() => {
  //   const t1 = gsap.timeline();
  //   t1.fromTo(
  //     tag.current,
  //     {
  //       y: 100,
  //     },
  //     {
  //       y: 0,
  //       opacity: 1,
  //       stagger: 0.05,
  //       duration: 2,
  //       ease: "power4.out",
  //     }
  //   ).fromTo(
  //     button.current,
  //     {
  //       y: 100,
  //     },
  //     { y: 0, duration: 2, ease: "bounce" }
  //   );
  // }, []);
  const dispatch = useDispatch();
  const isFreelancerAuth = Boolean(
    useSelector((state) => state.freelancer.token)
  );
  return (
    <>
      <div className="w-full border-b-2  border-b-black bg-secondary h-96 flex items-end justify-evenly">
        <img src={people1} className="" alt="" />
        <div className="h-full flex flex-col items-center justify-evenly">
          <h1
            ref={tag}
            className="self-center font-display text-4xl ml-10 sm:text-6xl leading-tight sm:ml-10"
          >
            "Streamline Your <br /> Freelancing Business <br />
            with Level Up"
          </h1>
          <div className="w-full flex justify-around items-center">
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
    </>
  );
  // return (
  //   <>
  //     <div className="w-full bg-white border-b-black  border-b-2">
  //       <div className="bg-secondary w-full sm:h-96 aspect-video flex items-start flex-col justify-evenly  overflow-hidden">
  //         <h1
  //           ref={tag}
  //           className="font-display text-4xl ml-10 sm:text-6xl leading-tight sm:ml-10"
  //         >
  //           "Streamline Your <br /> Freelancing Business <br />
  //           with Level Up"
  //         </h1>
  //         <div>
  //           {/* <Button
  //             ref={button}
  //             onClick={() => {
  //               navigate("/freelancer");
  //             }}
  //             className="ml-10"
  //             color="dark"
  //             pill={true}
  //           >
  //             Get Started
  //           </Button> */}
  //         </div>
  //       </div>
  //     </div>
  //     <div className="single-child-center h-40 w-full">
  //       <button
  //         onClick={() => {
  //           console.log("clicked");
  //         }}
  //         className="custom-button ml-10"
  //       >
  //         New Product
  //       </button>
  //     </div>
  //   </>
  // );
};

export default Home;
