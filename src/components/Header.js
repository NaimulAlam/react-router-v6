import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <NavLink
        className={({ isActive }) => (isActive ? "active" : undefined)}
        to="/home"
      >
        Home
      </NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/friends">Friends</NavLink>
      <NavLink to="/posts">Posts</NavLink>
    </div>
  );
};

export default Header;
