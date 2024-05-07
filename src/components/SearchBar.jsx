import React, { useState } from 'react';
import { IconButton, Paper } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { Search } from '@mui/icons-material';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const SearchBar = ({ onToggleDarkMode }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [clickCount, setClickCount] = useState(0);
  const [lastClickTime, setLastClickTime] = useState(0);
  const navigate = useNavigate();

  const handleClick = () => {
    const now = new Date().getTime();
    const timeSinceLastClick = now - lastClickTime;

    // If it's been less than 300ms since the last click, consider it a double-click
    if (timeSinceLastClick < 300) {
      handleDoubleClick();
    } else {
      // Otherwise, reset click count and time
      setClickCount(1);
      setLastClickTime(now);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  };

  const handleDoubleClick = () => {
    setIsDarkMode(!isDarkMode);
    if (onToggleDarkMode) {
      onToggleDarkMode(!isDarkMode);
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{ borderRadius: 20, border: '1px solid #e3e3e3', pl: 2, boxShadow: 'none', mr: { sm: 5 } }}
    >
      <input
        className='search-bar'
        placeholder='Search.../Double click icon'
        value={searchTerm}
        onChange={(e) => { setSearchTerm(e.target.value) }}
      />
      <IconButton onClick={handleClick} type="submit" sx={{ p: '10px', color: '#166AE4' }}>
        {isDarkMode ? <DarkModeIcon /> : <Search />}
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
