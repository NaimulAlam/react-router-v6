import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <a href="/home">Home</a> <a href="/about">About</a>
      <br />
      <Link to="/home">Home</Link>{" "}<Link to="/about">About</Link>{" "}
      <Link to="/products">Products</Link>
    </div>
  );
};

export default Header;
