import FreelancerForm from "./FreelancerForm";
import AuthNavbar from "../../components/AuthNavbar";
import { useEffect } from "react";

const AuthPage = () => {
  return (
    <main
      className="flex min-h-screen flex-col"
      data-barba="container"
      data-barba-namespace="freelancerAuth"
    >
      <AuthNavbar />
      <div className="single-child-center w-full grow bg-[#242423] ">
        <FreelancerForm />
      </div>
    </main>
  );
};
export default AuthPage;
