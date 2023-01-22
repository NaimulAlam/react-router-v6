import React from "react";
import { useLoaderData } from "react-router-dom";

const FriendDeatails = () => {
  const friendDetails = useLoaderData();
  const { name, email, phone, website } = friendDetails;

  return (
    <div className="container">
      <div className="friend_details">
        <h2>Deatils About: {name}</h2>
        <p>Email: {email}</p>
        <p>Call: {phone}</p>
        <p>
          <small>{website}</small>
        </p>
      </div>
    </div>
  );
};

export default FriendDeatails;
