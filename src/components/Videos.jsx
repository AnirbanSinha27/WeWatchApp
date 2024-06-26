import React from 'react'
import { Stack,Box } from '@mui/material';
import {VideoCard,ChannelCard,Loader} from './';

const Videos = ({videos,direction,isDarkMode}) => {

if(!videos?.length) return <Loader/>;

  return (
    <>
      <Stack direction={direction||"row"} flexWrap="wrap" justifyContent="start" gap={2}>
        {videos.map((item, idx) => (
          <Box key={idx} sx={{ml:{md:1.2}}}>
            {item.id.videoId && <VideoCard isDarkMode={isDarkMode} video={item} /> }
            {item.id.channelId && <ChannelCard isDarkMode={isDarkMode} channelDetail={item} />}
          </Box>
        ))}
      </Stack>
    </>
  )
}

export default Videos
