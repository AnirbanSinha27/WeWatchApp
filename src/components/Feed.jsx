import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { SideBar, Videos, Loader } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const Feed = ({ isDarkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState('Trending');
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items));
  }, [selectedCategory]);

  return (
    <>
      <Stack sx={{ position: { md: 'fixed' }, flexDirection: { sx: 'column', md: 'row' } }}>
        <Box sx={{ height: { sx: 'auto', md: '92vh' }, backgroundColor: isDarkMode ? '#fff' : 'black', borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 } }}>
          <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} isDarkMode={isDarkMode} />
          <Typography fontSize={10} variant="body2" sx={{ color: isDarkMode ? '#000' : '#fff', mt: 0 }} className='copyright'>
            Copyright © WeWatch 2024
          </Typography>
        </Box>

        <Box p={2} sx={{ overflowY: 'auto', backgroundColor: isDarkMode ? '#fff' : 'black', height: '90vh', flex: 2 }}>
          <Typography variant="h5" fontWeight="bold" mb={2} sx={{ color: isDarkMode ? '#000' : '#fff' }}>
            {selectedCategory} <span style={{ color: '#166AE4' }}>videos</span>
          </Typography>

          {videos ? <Videos videos={videos} isDarkMode={isDarkMode} /> : <Loader />}
        </Box>
      </Stack>
    </>
  );
};

export default Feed;
