import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { FaHeart, FaRegHeart } from "react-icons/fa";
const FreelancerContent = () => {
  const token = useSelector((state) => state.client.token);
  const userId = useSelector((state) => state.client.data._id);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/freelancer/content") // Assuming the API endpoint is '/api/posts'
      .then((response) => {
        setPosts(response.data.data.reverse());
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  const handleLike = (postId) => {
    axios
      .patch(
        `http://localhost:3000/client/content/${postId}/like`,
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
        const updatedPosts = posts.map((post) => {
          if (post._id === postId) {
            return { ...post, likes: response.data.likes };
          }
          return post;
        });
        setPosts(updatedPosts);
      })
      .catch((error) => {
        console.error("Error liking post:", error);
      });
  };

  return (
    <div className="border-2 border-dashed bg-black p-5">
      <h2 className="mb-4 font-lable text-lg font-semibold text-white ">
        Content by freelancers
      </h2>
      <div className="">
        {posts.map((post) => (
          <Post
            key={post._id}
            userId={userId}
            post={post}
            handleLike={handleLike}
          />
        ))}
      </div>
    </div>
  );
};

const Post = ({ post, handleLike, userId }) => {
  const { _id, user_id, title, content, image, likes, createdAt, updatedAt } =
    post;
  const isLiked = Object.keys(likes).includes(userId);
  const words = content.split(" ");
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

export default FreelancerContent;
