import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { title, body, id } = post;
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/posts/${id}`);
  };
  return (
    <div className="post">
      <p>{title}</p>
      <p>
        <small>{body}</small>
      </p>
      <Link to={`/posts/${id}`}>
        <button>Show Details</button>
      </Link>
      <button onClick={handleNavigate}>Navigate link</button>
    </div>
  );
};

export default Post;
