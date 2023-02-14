import React, { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";

import ReactPlayer from "react-player";

import { CiCircleCheck } from "react-icons/ci";

import Videos from "./Videos";

import Loader from "./Loader";

import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);

  const [videos, setVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    fetchFromAPI(`search?part=snippet&relatedToVideoID=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  if (!videoDetail?.snippet) return <Loader />;

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  console.log(videos);
  return (
    <div className="video-detail">
      <div className="react-player">
        <ReactPlayer
          className="react-video-player"
          url={`https://www.youtube.com/watch?v=${id}`}
          controls
        />

        <p> {title}</p>
        <div className="name-likes-views">
          <Link
            style={{ textDecoration: "none" }}
            className="channel-title"
            to={`/channel/${channelId}`}
          >
            {channelTitle}
            <CiCircleCheck className="checkmark" />
          </Link>
          <div className="likes-views">
            <p>{parseInt(viewCount).toLocaleString()} views</p>
            <p>{parseInt(likeCount).toLocaleString()} likes</p>
          </div>
        </div>
      </div>
      <div className="related-videos-div">
        <h2>Related Videos</h2>
        <Videos videos={videos} direction="column" />
      </div>
    </div>
  );
};

export default VideoDetail;
