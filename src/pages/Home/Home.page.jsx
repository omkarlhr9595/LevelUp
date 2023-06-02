import { useNavigate } from "react-router-dom";
import people1 from "../../assets/people1.svg";
import people2 from "../../assets/people2.svg";
import logo from "../../assets/logo-text-black.png";
const Home = () => {
  const navigate = useNavigate();

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
