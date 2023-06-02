import { useDispatch, useSelector } from "react-redux";
import { NavbarComp } from "../../components/Navbar";
import { Button } from "flowbite-react";
import { setLogout } from "../../state/client.state.js";

const ClientHome = () => {
  const fname = useSelector((state) => state.client.data.firstName);
  const lname = useSelector((state) => state.client.data.lastName);
  const dispatch = useDispatch();
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <h1 className="mb-10 text-4xl">
        WELCOME {fname.toUpperCase()} {lname.toUpperCase()} TO CLIENT PAGE
      </h1>
      <Button
        onClick={() => {
          dispatch(setLogout());
        }}
      >
        Log Out
      </Button>
    </div>
  );
};
export default ClientHome;
