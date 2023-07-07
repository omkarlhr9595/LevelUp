import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import people1 from "../../assets/people1.svg";
import people2 from "../../assets/people2.svg";
import logo from "../../assets/logo-text-black.png";
import gsap from "gsap";
import axios from "axios";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Home = () => {
  const navigate = useNavigate();
  const typedRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  gsap.core.globals("ScrollTrigger", ScrollTrigger);
  useEffect(() => {
    const revealAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: typedRef.current,
        start: "top 100%", // Adjust this value to determine when the reveal animation should start
        end: "bottom 10%", // Adjust this value to determine when the reveal animation should end
        scrub: 1, // Adjust this value to control the smoothness of the animation
        // markers: true, // Set to true to visualize the scroll trigger for debugging purposes
      },
    });
    revealAnimation.fromTo(
      typedRef.current,
      { opacity: 1, x: -90 },
      { opacity: 1, x: 0, duration: 1 }
    );
    fetchFreelancerCount();
    fetchClientCount();
    fetchContentCount();
    fetchJobCount();
    fetchLikesCount();
    fetchApplicationCount();
  }, []);

  const [report, setReport] = useState([
    {
      text: `TOTAL FREELANCERS <br/>0`,
      color: "secondary",
    },
    {
      text: "TOTAL CLIENTS <br/>0",
      color: "fuchsia",
    },
    {
      text: "TOTAL CONTENT POSTED <br/>0",
      color: "secondary",
    },
    {
      text: "TOTAL JOBS POSTED <br/>0",
      color: "fuchsia",
    },
    {
      text: "TOTAL LIKES<br/>0",
      color: "secondary",
    },
    {
      text: "TOTAL APPLICATION<br/>0",
      color: "fuchsia",
    },
  ]);

  const fetchFreelancerCount = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/freelancer/getfreelancercount"
      );
      const freelancerCount = response.data.count; // Assuming the API response contains the count of freelancers
      const updatedReport = [...report]; // Create a copy of the existing report array
      updatedReport[0].text = `TOTAL FREELANCERS <br/>${freelancerCount}`; // Update the text property of the first item in the report array
      setReport(updatedReport); // Update the 'report' state with the modified array
    } catch (error) {
      console.error("Error fetching freelancer count:", error);
    }
  };
  const fetchContentCount = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/freelancer/contentcount"
      );
      const contentCount = response.data.count; // Assuming the API response contains the count of freelancers
      const updatedReport = [...report]; // Create a copy of the existing report array
      updatedReport[2].text = `TOTAL CONTENT POSTED <br/>${contentCount}`; // Update the text property of the first item in the report array
      setReport(updatedReport); // Update the 'report' state with the modified array
    } catch (error) {
      console.error("Error fetching freelancer count:", error);
    }
  };

  const fetchClientCount = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/client/clientccount"
      );
      const clientCount = response.data.count; // Assuming the API response contains the count of clients
      const updatedReport = [...report]; // Create a copy of the existing report array
      updatedReport[1].text = `TOTAL CLIENTS <br/>${clientCount}`; // Update the text property of the second item in the report array
      setReport(updatedReport); // Update the 'report' state with the modified array
    } catch (error) {
      console.error("Error fetching client count:", error);
    }
  };
  const fetchLikesCount = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/freelancer/likescount"
      );
      const likesCount = response.data.count; // Assuming the API response contains the count of clients
      const updatedReport = [...report]; // Create a copy of the existing report array
      updatedReport[4].text = `TOTAL LIKES <br/>${likesCount}`; // Update the text property of the second item in the report array
      setReport(updatedReport); // Update the 'report' state with the modified array
    } catch (error) {
      console.error("Error fetching client count:", error);
    }
  };
  const fetchJobCount = async () => {
    try {
      const response = await axios.get("http://localhost:3000/client/jobcount");
      const jobCount = response.data.count; // Assuming the API response contains the count of clients
      const updatedReport = [...report]; // Create a copy of the existing report array
      updatedReport[3].text = `TOTAL JOBS POSTED <br/>${jobCount}`; // Update the text property of the second item in the report array
      setReport(updatedReport); // Update the 'report' state with the modified array
    } catch (error) {
      console.error("Error fetching client count:", error);
    }
  };
  const fetchApplicationCount = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/client/applicantcount"
      );
      const jobCount = response.data.count; // Assuming the API response contains the count of clients
      const updatedReport = [...report]; // Create a copy of the existing report array
      updatedReport[5].text = `TOTAL APPLICATION <br/>${jobCount}`; // Update the text property of the second item in the report array
      setReport(updatedReport); // Update the 'report' state with the modified array
    } catch (error) {
      console.error("Error fetching client count:", error);
    }
  };
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
            <img
              src={people2}
              className="w-[40%] -scale-x-100 self-end"
              alt=""
            />
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
            <img
              src={people1}
              className=" w-[40%] -scale-x-100 self-end"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="single-child-center h-screen">
        <h1 className="text-6xl">REPORTS</h1>
        <div
          ref={typedRef}
          className="grid w-full grid-cols-3 grid-rows-2 place-content-center place-items-center gap-7 "
        >
          {report.map((v) => {
            return <Card color={v.color} text={v.text} key={v.text} />;
          })}
        </div>
      </div>
    </main>
  );
};

const Card = (props) => {
  const { color, text } = props;
  return (
    <div
      className={`single-child-center aspect-video w-80 rounded shadow-[0_14px_28px_rgba(0,0,0,0.25),0_10px_10px_rgba(0,0,0,0.22)] bg-${color} border-2 border-black`}
    >
      <h1
        className="text-center text-2xl"
        dangerouslySetInnerHTML={{ __html: text }}
      ></h1>
    </div>
  );
};

export default Home;
