import FreelancerForm from "./FreelancerForm";
import AuthNavbar from "../../components/AuthNavbar";
const AuthPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <AuthNavbar />
      <div className="w-full bg-[#242423] grow single-child-center ">
        <FreelancerForm />
      </div>
    </div>
  );
};
export default AuthPage;
