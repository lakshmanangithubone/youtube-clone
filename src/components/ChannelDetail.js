import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import ChannelCard from "./ChannelCard";
import Videos from "./Videos";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);

  const [selected, setSelected] = useState("New");

  const [videos, setVideos] = useState([]);

  const { id } = useParams();

  // console.log(channelDetail);
  // console.log(videos);
  useEffect(() => {
    fetchFromAPI(`channels?part="snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);
  return (
    <div className="channel-detail">
      <img
        src={channelDetail?.brandingSettings?.image?.bannerExternalUrl}
        alt=""
        className="cover-pic"
      />
      <ChannelCard channelDetail={channelDetail} margintop="-100px" />
      <div className="channel-videos">
        <Videos videos={videos} />
      </div>
    </div>
  );
};

export default ChannelDetail;
