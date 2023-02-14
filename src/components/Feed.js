import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Videos from "./Videos";

import { fetchFromAPI } from "../utils/fetchFromAPI";

const Feed = () => {
  const [selected, setSelected] = useState("New");

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selected}`).then((data) =>
      setVideos(data.items)
    );
  }, [selected]);

  return (
    <div className="feed">
      <Sidebar selected={selected} setSelected={setSelected} />
      <div className="main-feed">
        <h2>
          <span className="text-highlight">{selected}</span> videos
        </h2>
        <Videos videos={videos} />
      </div>
    </div>
  );
};

export default Feed;
