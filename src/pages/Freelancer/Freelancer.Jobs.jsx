import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { FaCheckCircle, FaRegCheckCircle } from "react-icons/fa";
import moment from "moment";
const FreelancerJobs = () => {
  const token = useSelector((state) => state.freelancer.token);
  const userId = useSelector((state) => state.freelancer.information.user_id);
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    axios
      .get(
        "http://localhost:3000/freelancer/jobs",
        {
          userId,
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      ) // Assuming the API endpoint is '/api/jobs'
      .then((response) => {
        setJobs(response.data.jobs.reverse());
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
      });
  }, []);
  const handleApply = (jobId) => {
    axios
      .patch(
        `http://localhost:3000/freelancer/job/${jobId}/apply`,
        {
          userId,
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        const updatedJobs = jobs.map((job) => {
          if (job._id === jobId) {
            return { ...job, applicant: response.data.applicant };
          }
          return job;
        });
        setJobs(updatedJobs);
      })
      .catch((error) => {
        console.error("Error liking post:", error);
      });
  };
  return (
    <div className="">
      {jobs.map((job) => (
        <Job
          key={job._id}
          userId={userId}
          job={job}
          handleApply={handleApply}
        />
      ))}
    </div>
  );
};

const Job = ({ job, handleApply, userId }) => {
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
      </div>
      <button
        onClick={() => {
          handleApply(_id);
        }}
        className={`mt-2 flex items-center rounded-xl border bg-awhite p-2 font-semibold text-blue-700 focus:outline-none ${
          isApplied ? "liked" : ""
        }`}
      >
        {isApplied ? (
          <>
            <span className="mr-1">Applied</span>
            <FaCheckCircle size={25} />
          </>
        ) : (
          <>
            <span className="mr-1">Apply</span>
            <FaRegCheckCircle size={25} />
          </>
        )}
      </button>
    </div>
  );
};

export default FreelancerJobs;
