import React from "react";
import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";

const Videos = ({ videos, direction }) => {
  // console.log(videos);

  // if (videos?.length) return "loading...";

  return (
    <div
      className="videos-div"
      // style={{ flexDirection: direction || "row" }}
    >
      {videos.map((item, idx) => (
        <div className="video-div" key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </div>
      ))}
    </div>
  );
};

export default Videos;
