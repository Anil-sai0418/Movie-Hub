import React from "react";
import { Routes, Route } from "react-router-dom";



import Home from "../pages/Home";
import MovieDetails from "../pages/MovieDetails";
import NotFound from "../chunks/NotFound";


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
