import { AnimatePresence } from "framer-motion";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Post from "../Components/Post";
import App from "../App";
import Home from "../Pages/Home";
import Gallery from "../Pages/Gallery";
import Test from "../Pages/Test";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes key={location.key} location={location}>
        <Route path="/" element={<App />} />
        <Route path="/post" element={<Post />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/test" element={<Test/>} />
        
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
