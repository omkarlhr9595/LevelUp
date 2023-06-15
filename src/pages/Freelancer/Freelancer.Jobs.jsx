import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const FreelancerJobs = () => {
  const token = useSelector((state) => state.freelancer.token);
  const userId = useSelector((state) => state.freelancer.information.user_id);
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/freelancer/jobs") // Assuming the API endpoint is '/api/jobs'
      .then((response) => {
        setJobs(response.data.data.reverse());
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
      });
  }, []);
  return <div className=""></div>;
};

const Job = ({ job, handleLike, userId }) => {
  const { _id, user_id, title, description, applicant, createdAt, updatedAt } =
    job;
  const isLiked = Object.keys(likes).includes(userId);
  const words = description.split(" ");
  const length = words.length;
  const truncatedWords = words.slice(0, 75);
  const truncatedString = truncatedWords.join(" ");
  function convertToReadableDate(dateString) {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString(undefined, options);
  }
  return (
    <div className="mb-4 flex rounded-lg border-2 bg-ablack p-4 shadow-md">
      <div className="h-full w-2/3">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">
            {title.toUpperCase()}
          </h2>
          <p className="text-sm text-white">
            {convertToReadableDate(createdAt)}
          </p>
        </div>
        <p className="mt-3 text-white">
          {truncatedString}{" "}
          {length > 75 ? (
            <span className="cursor-pointer text-blue-600">Read More....</span>
          ) : (
            ""
          )}
        </p>
      </div>
      <div className="flex w-1/3 flex-col items-center justify-evenly">
        <div className="single-child-center">
          <img
            src={`http://localhost:3000/profilePhotos/${image}`}
            alt="Post Image"
            className="mt-2 h-32 border border-white"
          />
        </div>
        <div className="m-5 flex w-full items-center justify-center">
          <button
            className={`flex items-center text-red-500 focus:outline-none ${
              isLiked ? "liked" : ""
            }`}
            onClick={() => {
              handleLike(_id);
            }}
          >
            {isLiked ? <FaHeart size={25} /> : <FaRegHeart size={25} />}
          </button>
          <p className="ml-5 text-sm text-white">
            {Object.keys(likes).length} Likes
          </p>
        </div>
      </div>
    </div>
  );
};

export default FreelancerJobs;
