import React, { useEffect, useState } from "react";

import Videos from "./Videos";

import { fetchFromAPI } from "../utils/fetchFromAPI";

import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);

  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <div className="search-feed">
      <h2>
        <span className="text-highlight">Search results for: {searchTerm}</span>
        videos
      </h2>
      <Videos videos={videos} />
    </div>
  );
};

export default SearchFeed;
