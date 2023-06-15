import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

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
          <div
            key={job._id}
            className="mb-4 flex rounded-lg border-2 bg-ablack p-4 shadow-md"
          >
            <h2 className="text-xl font-semibold text-white">
              {job.title.toUpperCase()}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Jobs;
