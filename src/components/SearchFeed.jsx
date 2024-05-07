import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Videos, Loader } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { useParams } from 'react-router-dom';

const SearchFeed = ({ isDarkMode }) => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items));
  }, [searchTerm]);

  return (
    <Stack direction="column" sx={{ height: '100%', backgroundColor: isDarkMode ? '#fff' : '#000', color: isDarkMode ? '#000' : '#fff' }}>
      <Typography variant="h5" fontWeight="bold" sx={{ml:{xs:2,sm:2,md:3},mb:2}}>
        Search Results for: <span style={{ color: '#FC1503' }}>{searchTerm}</span> videos
      </Typography>
      <Box sx={{ overflowY: 'auto', flexGrow: 1,margin:2 }}>
        {videos.length > 0 ? (
          <Videos videos={videos} isDarkMode={isDarkMode} />
        ) : (
          <Loader />
        )}
      </Box>
    </Stack>
  );
};

export default SearchFeed;
