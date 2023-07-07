import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import logo from "../../assets/WhatsAppButtonGreenLarge.svg";

const Jobs = () => {
  const user_id = useSelector((state) => state.client.data._id);
  const token = useSelector((state) => state.client.token);
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    let body = {
      user_id: user_id,
    };
    axios
      .get(`http://localhost:3000/client/jobsById/${user_id}`, {
        user_id: user_id,
      }) // Assuming the API endpoint is '/api/posts'
      .then((response) => {
        setJobs(response.data.jobs.reverse());
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);
  useEffect(() => {
    return () => {
      //   document.location.reload();
    };
  }, [jobs]);
  return (
    <div className="my-5 w-full border-2  border-dashed bg-black  p-5 shadow">
      <div className="">
        <h1 className="mb-4 font-lable text-lg font-semibold text-white ">
          Jobs By You
        </h1>
        {jobs.map((job) => (
          <Job key={job._id} userId={user_id} job={job} />
        ))}
      </div>
    </div>
  );
};
const Job = ({ job, userId }) => {
  const {
    _id,
    user_id,
    title,
    description,
    applicant,
    createdAt,
    budget,
    skills,
    updatedAt,
  } = job;
  const [whatsappNumbers, setWhatsappNumbers] = useState([]);
  const [names, setNames] = useState([]);
  const isApplied = Object.keys(applicant).includes(userId);
  const words = description.split(" ");
  const length = words.length;
  const truncatedWords = words.slice(0, 75);
  const truncatedString = truncatedWords.join(" ");
  function convertToReadableDate(dateString) {
    const date = moment(dateString);
    if (date.isValid()) {
      return date.format("MMMM DD, YYYY");
    } else {
      return ""; // Return an empty string if the date is invalid
    }
  }
  useEffect(() => {
    const fetchWhatsAppNumbers = async () => {
      const promises = Object.keys(applicant).map((freelancerId) => {
        const getFreelancerName = axios.get(
          `http://localhost:3000/freelancer/data/${freelancerId}`
        );
        const getFreelancerWhatsApp = axios.get(
          `http://localhost:3000/freelancer/information/${freelancerId}`
        );

        return Promise.all([getFreelancerName, getFreelancerWhatsApp])
          .then(([nameResponse, whatsappResponse]) => {
            const name =
              nameResponse.data.data.firstName +
              " " +
              nameResponse.data.data.lastName;
            const whatsappNo = whatsappResponse.data.data.whatsappNo;
            return { whatsappNo, name };
          })
          .catch((error) => {
            console.error("Error fetching freelancer details:", error);
            return null;
          });
      });

      const results = await Promise.all(promises);
      const filteredResults = results.filter((result) => result !== null);

      setWhatsappNumbers(filteredResults.map((result) => result.whatsappNo));
      setNames(filteredResults.map((result) => result.name));
    };

    fetchWhatsAppNumbers();
  }, [applicant]);

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    // creating a new order
    const result = await axios.post("http://localhost:3000/client/orders");

    if (!result) {
      alert("Server error. Are you online?");
      return;
    }

    // Getting the order details back
    const { amount, id: order_id, currency } = result.data;
    const options = {
      key: import.meta.env.RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
      amount: amount,
      currency: currency,
      name: "LEVEL UP",
      description: "PAY FREELANCER",
      image:
        "https://raw.githubusercontent.com/omkarlhr9595/LevelUp/main/src/assets/logo.png",
      order_id: order_id,
      handler: async function (response) {
        // const data = {
        //   orderCreationId: order_id,
        //   razorpayPaymentId: response.razorpay_payment_id,
        //   razorpayOrderId: response.razorpay_order_id,
        //   razorpaySignature: response.razorpay_signature,
        // };
        // const result = await axios.post(
        //   "http://localhost:5000/payment/success",
        //   data
        // );
      },
      prefill: {
        name: "VSN",
        email: "VSN@imcc.com",
        contact: "9999999999",
      },
      notes: {
        address: "IMCC COLLEGE PUNE",
      },
      theme: {
        color: "#1a56db",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }
  return (
    <div className="mb-4  rounded-lg border-2 bg-ablack p-4 shadow-md">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-awhite">
          {title.toUpperCase()}
        </h2>
        <h4 className="text-sm text-awhite">
          start date:
          <br /> {convertToReadableDate(createdAt)}
        </h4>
      </div>
      <div className="">
        <h3 className="text-base text-awhite">{description}</h3>
        <h3 className="text-lg font-medium text-awhite">Required Skills:</h3>
        {skills.map((skill, index) => (
          <h3 key={index} className="text-base text-awhite">
            {skill}
          </h3>
        ))}
        <h3 className="text-lg font-medium text-awhite">Budget: {budget}</h3>
        <h3 className="text-lg font-medium text-awhite">Applicants:</h3>
        <div className="flex flex-col">
          {whatsappNumbers.length > 0 && (
            <div className="">
              {whatsappNumbers.map((number, index) => (
                <div
                  key={index}
                  className="mt-3 flex items-center justify-evenly"
                >
                  <h2 key={index} className="text-base text-awhite">
                    {names[index]}
                  </h2>
                  <a
                    aria-label="Chat on WhatsApp"
                    href={`https://wa.me/+91${number}`}
                    target="_"
                  >
                    <img className="h-10" alt="Chat on WhatsApp" src={logo} />
                  </a>
                  <button
                    className="custom-button-white"
                    onClick={displayRazorpay}
                  >
                    PAY FREELANCER
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Jobs;
