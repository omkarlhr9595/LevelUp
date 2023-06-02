import ClientForm from "./ClientForm";
import AuthNavbar from "../../components/AuthNavbar";
const AuthPage = () => {
  return (
    <div className="flex min-h-screen flex-col ">
      <AuthNavbar />
      <div className="single-child-center w-full grow bg-[#242423]">
        <ClientForm />
      </div>
    </div>
  );
};
export default AuthPage;
