import React from "react";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import { Route, Routes } from "react-router-dom";
import Upcoming from "./components/Upcoming";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/upcoming" element={<Upcoming />} />
      </Routes>
    </div>
  );
};

export default App;
