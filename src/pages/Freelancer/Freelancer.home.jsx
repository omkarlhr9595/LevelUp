import { useDispatch, useSelector } from "react-redux";
import { NavbarComp } from "../../components/Navbar";
import { Button } from "flowbite-react";
import { setLogout } from "../../state/freelancer.state.js";

const FreelancerHome = () => {
  const fname = useSelector((state) => state.freelancer.data.firstName);
  const lname = useSelector((state) => state.freelancer.data.lastName);
  const dispatch = useDispatch();
  return (
    <div className="h-screen w-full flex-col flex items-center justify-center">
      <h1 className="mb-10 text-4xl">
        WELCOME {fname.toUpperCase()} {lname.toUpperCase()}
      </h1>
      <button className="custom-button"
        onClick={() => {
          dispatch(setLogout());
        }}
      >
        Log Out
      </button>
    </div>
  );
};
export default FreelancerHome;
