import React from "react";
import { Route, Routes } from "react-router-dom";

import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Description from "./pages/description/Description";
import Home from "./pages/home/Home";
import Pictures from "./pages/pictures/Pictures";
import Welcome from "./pages/welcome/Welcome";
import NoOption from "./pages/welcome/noOption/NoOption";

import "./App.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/com-que-no" element={<NoOption />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/description" element={<Description />} />
      <Route path="/pictures" element={<Pictures />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
