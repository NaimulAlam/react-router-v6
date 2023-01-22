import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
  const postDetail = useLoaderData();
  const { title, body, userId } = postDetail;
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/friend/${userId}`);
  };

  console.log(postDetail);
  return (
    <div className="container">
      <div className="post">
        <p>{title}</p>
        <p>
          <small>{body}</small>
        </p>
        <button onClick={handleNavigate}>Author Details</button>
      </div>
    </div>
  );
};

export default PostDetails;
