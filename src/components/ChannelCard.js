import React from "react";

import { CiCircleCheck } from "react-icons/ci";

import { Link } from "react-router-dom";

import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channelDetail, margintop }) => {
  //   console.log(channelDetail);

  return (
    <div className="channelcard" style={{ marginTop: margintop }}>
      <Link
        style={{ textDecoration: "none" }}
        className="inner-channelcard"
        to={`/channel/${channelDetail?.id?.channelId}`}
      >
        <img
          src={
            channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture
          }
          alt={channelDetail?.snippet?.title}
        />
        <p className="channeltitle">
          {channelDetail?.snippet?.title}
          <CiCircleCheck className="checkmark" />
        </p>

        {channelDetail?.statistics?.subscriberCount && (
          <p className="subscribers">
            {parseInt(
              channelDetail?.statistics?.subscriberCount
            ).toLocaleString()}
            subscribers
          </p>
        )}
      </Link>
    </div>
  );
};

export default ChannelCard;
