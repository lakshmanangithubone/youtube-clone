import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

// import { SearchIcon } from "@mui/icons-material";

import { BsSearch } from "react-icons/bs";
// import { BiAlignLeft } from "react-icons/bi";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm("");
    }
  };
  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <input
          className="search-bar"
          placeholder="search..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />

        <button type="submit" className="btn">
          <BsSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
