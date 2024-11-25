import React from "react";
import HeaderMovie from "./HeaderMovie";
import NewMovies from "./NewMovies";
import "./HeaderMovie.css";

const WebMovie = () => {
  return (
    <div className="flex flex-col items-start gap-[29px] mt-4">
      <HeaderMovie />
      <p className="font-bold text-3xl text-white">Explore</p>
      <p className="nav-bar">What are you gonna watch today ?</p>
      <img
        src="./Image/carousel.png"
        alt="Banner"
        className="w-full h-[400px]"
      />
      <NewMovies />
    </div>
  );
};

export default WebMovie;
