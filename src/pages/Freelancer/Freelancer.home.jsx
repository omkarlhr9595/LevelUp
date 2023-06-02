import logo from "../../assets/logo-text-white.png";
import { useDispatch, useSelector } from "react-redux";
import { NavbarComp } from "../../components/Navbar";
import { Button } from "flowbite-react";
import { setLogout } from "../../state/freelancer.state.js";

const FreelancerHome = () => {
  const fname = useSelector((state) => state.freelancer.data.firstName);
  const lname = useSelector((state) => state.freelancer.data.lastName);
  const information = useSelector((state) => state.freelancer.information);
  const dispatch = useDispatch();

  return (
    <>
      <div className="min-h-screen  bg-gblack w-full">
        {information ? (
          <div className="h-screen bg-gblack w-full"></div>
        ) : (
          <div className="">
            <LogoDiv />
         
            <div className=" h-24 bg-secondary w-full single-child-center">
              <h1 className="text-3xl font-lable">
                WELCOME {fname.toUpperCase()} {lname.toUpperCase()}
              </h1>
            </div>
            <div className="h-24 w-full single-child-center">
              <h1 className="text-white text-3xl font-lable">
                Please Fill Below Form
              </h1>
            </div>
            <div className="h-24 w-full single-child-center">
              <h1 className="text-white text-3xl font-lable">
                Please Fill Below Form
              </h1>
            </div>
                <button
        className="custom-button"
        onClick={() => {
          dispatch(setLogout());
        }}
      >
        Log Out
      </button>
            <div className="h-24 w-full single-child-center">
              <h1 className="text-white text-3xl font-lable">
                Please Fill Below Form
              </h1>
            </div>
            <div className="h-24 w-full single-child-center">
              <h1 className="text-white text-3xl font-lable">
                Please Fill Below Form
              </h1>
            </div>
            <div className="h-24 w-full single-child-center">
              <h1 className="text-white text-3xl font-lable">
                Please Fill Below Form
              </h1>
            </div>
            <div className="h-24 w-full single-child-center">
              <h1 className="text-white text-3xl font-lable">
                Please Fill Below Form
              </h1>
            </div>
            <div className="h-24 w-full single-child-center">
              <h1 className="text-white text-3xl font-lable">
                Please Fill Below Form
              </h1>
            </div>
            <div className="h-24 w-full single-child-center">
              <h1 className="text-white text-3xl font-lable">
                Please Fill Below Form
              </h1>
            </div>
            <div className="h-24 w-full single-child-center">
              <h1 className="text-white text-3xl font-lable">
                Please Fill Below Form
              </h1>
            </div>
            <div className=""></div>
          </div>
        )}
      </div>
    </>
  );
};
export default FreelancerHome;

const LogoDiv = () => {
  return (
    <div className="sticky top-0 bg-gblack z-10 h-24 w-full border-b-2 border-b-black flex items-center justify-evenly">
      <div className="z-10">
        <img src={logo} className="h-16 z-10" alt="" />
      </div>
    </div>
  );
};

const jsx = () => {
  return (
    <div className="h-screen w-full flex-col flex items-center justify-center">
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
