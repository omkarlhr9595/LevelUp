import FreelancerForm from "./FreelancerForm";
import AuthNavbar from "../../components/AuthNavbar";
import { useEffect } from "react";
import barba from "@barba/core";

const AuthPage = () => {
  useEffect(() => {
    barba.init({
      transitions: [
        {
          name: "default-transition",
          leave() {
            console.log("ahsdk");
            // create your stunning leave animation here
          },
          enter() {
            console.log("ahsdasdsk");
            // create your amazing enter animation here
          },
        },
      ],
    });
    return () => {
      barba.destroy();
    };
  }, []);
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
