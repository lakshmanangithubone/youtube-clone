import React from "react";
import { Link } from "react-router-dom";

import { CiCircleCheck } from "react-icons/ci";

import {
  demoVideoUrl,
  demoThumbnailUrl,
  demoChannelTitle,
  demoChannelUrl,
  demoVideoTitle,
} from "../utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  //   console.log(videoId, snippet);
  return (
    <div className="videocard">
      <Link
        style={{ textDecoration: "none" }}
        className="inner-video-card"
        to={videoId ? `/video/${videoId}` : demoVideoUrl}
      >
        <img
          src={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title}
        />
        <div className="videocard-content">
          <Link
            style={{ textDecoration: "none" }}
            className="videotitle"
            to={videoId ? `/video/${videoId}` : demoVideoUrl}
          >
            {/* {readMore ? info : `${info.substring(0, 200)}...`} */}
            {snippet?.title.length > 70
              ? `${snippet?.title.slice(0, 70)}...`
              : snippet?.title}

            {/* {`${snippet?.title.slice(0, 90)}...` || demoVideoTitle.slice(0, 40)} */}
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            className="channeltitle"
            to={
              snippet?.channelId
                ? `/channel/${snippet?.channelId}`
                : demoChannelUrl
            }
          >
            {snippet?.channelTitle || demoChannelTitle}
            <CiCircleCheck className="checkmark" />
          </Link>
        </div>
      </Link>
    </div>
  );
};

export default VideoCard;
