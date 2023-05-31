import ClientForm from "./ClientForm";
import AuthNavbar from "../../components/AuthNavbar";
const AuthPage = () => {
  return (
    <div className="h-screen flex flex-col ">
      <AuthNavbar />
      <div className="w-full bg-[#242423] grow grid place-items-center ">
        <ClientForm />
      </div>
    </div>
  );
};
export default AuthPage;
