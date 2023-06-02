import logo from "../../assets/logo-text-white.png";
import { useDispatch, useSelector } from "react-redux";
import { NavbarComp } from "../../components/Navbar";
import { Button } from "flowbite-react";
import { setLogout } from "../../state/freelancer.state.js";
import { Navigate, useNavigate } from "react-router-dom";
import InformationForm from "./InformationForm";
const FreelancerHome = () => {
  const fname = useSelector((state) => state.freelancer.data.firstName);
  const lname = useSelector((state) => state.freelancer.data.lastName);
  const information = useSelector((state) => state.freelancer.information);
  const dispatch = useDispatch();
  return (
    <>
      <div className="min-h-screen w-full bg-gblack">
        {information ? (
          <div className="h-screen w-full bg-gblack"></div>
        ) : (
          <div className="">
            <LogoDiv />
            <div className="single-child-center  h-24 w-full bg-secondary">
              <h1 className="font-lable text-3xl">
                WELCOME {fname.toUpperCase()} {lname.toUpperCase()}
              </h1>
            </div>
            <div className="single-child-center w-full">
              <InformationForm />
            </div>
            <div className="single-child-center h-24 w-full">
              <button
                className="custom-button"
                onClick={() => {
                  dispatch(setLogout());
                }}
              >
                Log Out
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default FreelancerHome;

const LogoDiv = () => {
  const navigate = useNavigate();
  return (
    <div className=" z-10 flex h-24 w-full items-center justify-evenly border-b-2 border-b-black bg-gblack">
      <div className="z-10">
        <img
          src={logo}
          className="z-10 h-16"
          alt=""
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
    </div>
  );
};

const jsx = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <h1 className="mb-10 text-4xl">
        WELCOME {fname.toUpperCase()} {lname.toUpperCase()}
      </h1>
      <button
        className="custom-button"
        onClick={() => {
          dispatch(setLogout());
        }}
      >
        Log Out
      </button>
    </div>
  );
};
