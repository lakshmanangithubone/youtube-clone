import React from "react";

import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link style={{ textDecoration: "none" }} to="/">
        <img src={logo} alt="logo" />
      </Link>
      <SearchBar />
    </div>
  );
};

export default Navbar;
