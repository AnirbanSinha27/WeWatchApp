import React from 'react';
import { Stack } from '@mui/material';
import { categories } from '../utils/constants';


const SideBar = ({ selectedCategory, setSelectedCategory, isDarkMode }) => {
  

  return (
    <Stack direction='row'
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" }
      }}

    >
      {categories.map((category) => (
        <button key={category.key}
          onClick={() => setSelectedCategory(category.name)}
          className={category.name === selectedCategory ? 'category-btn active' : 'category-btn'}
          style={{ color: isDarkMode ? "#fff" : "#2F78E4" }} // Update text color based on dark mode
        >
          < category.icon sx={{ color: category.name === selectedCategory ? "white" : "#2F78E4", marginRight: "15px" }} className='icon' />
          <span style={{ color: isDarkMode ? "#000" : "#fff" }}>{category.name}</span> {/* Update text color based on dark mode */}
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;
