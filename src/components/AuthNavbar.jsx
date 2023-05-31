import { useNavigate } from "react-router-dom";
import logo from "../assets/logo-text-white.png";

const AuthNavbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex items-center justify-evenly h-24 w-full border-b-2 border-b-white  bg-[#242423]">
        <div className="">
          <img src={logo} className=" h-16" alt="" />
        </div>
        <div className="flex-grow flex justify-end">
          <button
            onClick={() => {
              navigate("/", { replace: true });
            }}
            className="custom-button-white mr-10"
          >
            Home
          </button>
          <button
            onClick={() => {
              navigate("/freelancer", { replace: true });
            }}
            className="custom-button-white mr-10"
          >
            Freelancer
          </button>
          <button
            onClick={() => {
              navigate("/client", { replace: true });
            }}
            className="custom-button-white mr-20"
          >
            Client
          </button>
        </div>
      </div>
    </>
  );
};
export default AuthNavbar;
