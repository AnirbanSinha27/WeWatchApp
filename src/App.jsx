import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import {
  ChannelDetail,
  VideoDetail,
  SearchFeed,
  Navbar,
  Feed,
} from "./components";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: isDarkMode ? "#fff" : "#000" }}>
        <Navbar onToggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        <Routes>
          <Route exact path="/" element={<Feed isDarkMode={isDarkMode} />} />
          <Route
            path="/video/:id"
            element={<VideoDetail isDarkMode={isDarkMode} />}
          />
          <Route
            path="/channel/:id"
            element={<ChannelDetail isDarkMode={isDarkMode} />}
          />
          <Route
            path="/search/:searchTerm"
            element={<SearchFeed isDarkMode={isDarkMode} />}
          />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
