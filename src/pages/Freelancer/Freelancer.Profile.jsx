import { useEffect } from "react";
const FreelancerProfile = (data) => {
  const {
    fname,
    lname,
    state,
    email,
    profilePhoto,
    skills,
    budget,
    headline,
    scope,
  } = data.data;
  return (
    <div className="flex min-h-[300px] w-full flex-col items-center justify-center border-2 border-dashed border-white bg-black ">
      <img
        className="aspect-square w-1/2 rounded-full object-cover ring-2 ring-white"
        src={`http://localhost:3000/profilePhotos/${profilePhoto}`}
        alt=""
      />
      <h1 className="mt-4 text-lg text-awhite">{`${fname.toUpperCase()} ${lname.toUpperCase()}`}</h1>
      <h1 className="text-lg text-awhite">{`${headline.toUpperCase()}`}</h1>
    </div>
  );
};
export default FreelancerProfile;
