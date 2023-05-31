import { useNavigate } from "react-router-dom";
import logo from "../assets/logo-text-white.png";

const AuthNavbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="h-24 bg-gblack w-full border-b-2 border-b-white flex flex-col sm:flex-row items-center justify-evenly">
        <div className="">
          <img src={logo} className="h-16" alt="" />
        </div>
        <div className="hidden flex-grow sm:flex justify-end">
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
      <div className="sm:hidden flex justify-evenly items-center h-20 bg-gblack">
        <button
          onClick={() => {
            navigate("/", { replace: true });
          }}
          className="custom-button-white "
        >
          Home
        </button>
        <button
          onClick={() => {
            navigate("/freelancer", { replace: true });
          }}
          className="custom-button-white "
        >
          Freelancer
        </button>
        <button
          onClick={() => {
            navigate("/client", { replace: true });
          }}
          className="custom-button-white "
        >
          Client
        </button>
      </div>
    </>
  );
};
export default AuthNavbar;
const jsx = () => {
  return (
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
  );
};
