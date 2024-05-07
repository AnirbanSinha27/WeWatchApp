import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = ({ isDarkMode }) => {

  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]));

    fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`)
      .then((data) => setVideos(data?.items));
  }, [id]);

  return (
    <Box minHeight="95vh" sx={{ backgroundColor: isDarkMode ? '#fff' : '#000', color: isDarkMode ? '#FFF' : '#000' }}>
      <Box>
        <div style={{
          zIndex: 10,
          height: '300px',
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)'
        }} />
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" isDarkMode={isDarkMode} />
      </Box>
      <Box display="flex" p="2" m={2}>
        <Box sx={{ mr: {sm: '100px' } }} />
        <Videos videos={videos} isDarkMode={isDarkMode} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
