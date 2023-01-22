import React from "react";
import { useLoaderData } from "react-router-dom";
import Friend from "./Friend";

const Friends = () => {
  const friends = useLoaderData();
  console.log(friends);

  return (
    <div>
      <h1>I have many Friends. :{friends.length}</h1>
      <div className="friends-parent">
        {friends.map((friend) => (
          <Friend key={friend.id} friend={friend}></Friend>
        ))}
      </div>
    </div>
  );
};

export default Friends;
