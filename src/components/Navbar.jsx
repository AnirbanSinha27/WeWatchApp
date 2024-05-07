import React, { useState } from 'react';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { logo } from '../utils/constants';
import SearchBar from './SearchBar';

const Navbar = ({ onToggleDarkMode, isDarkMode }) => {

  const handleDoubleClick = () => {
    onToggleDarkMode(); // Call the function to toggle dark mode
  };

  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        p={1.12}
        sx={{
          position: 'sticky',
          background: isDarkMode ? '#fff' : '#000', // Toggle background color based on dark mode
          top: 0,
          justifyContent: 'space-between'
        }}
      >
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="logo" height={50} style={{ marginLeft: 15 }} />
        </Link>

        <SearchBar onToggleDarkMode={onToggleDarkMode} />
      </Stack>
    </>
  );
};

export default Navbar;
