import { useNavigate } from "react-router-dom";
import logo from "../assets/logo-text-white.png";

const AuthNavbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex h-24 w-full flex-col items-center justify-evenly border-b-2 border-b-white bg-gblack sm:flex-row">
        <div className="">
          <img src={logo} className="h-16" alt="" />
        </div>
        <div className="hidden flex-grow justify-end sm:flex">
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
      <div className="flex h-20 items-center justify-evenly bg-gblack sm:hidden">
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
    <div className="flex h-24 w-full items-center justify-evenly border-b-2 border-b-white  bg-[#242423]">
      <div className="">
        <img src={logo} className=" h-16" alt="" />
      </div>
      <div className="flex flex-grow justify-end">
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
