import React from "react";
import Search from "../Component/Search";
import "./HeaderMovie.css";

const HeaderMovie = () => {
  return (
    <div className="">
      <div className=" h-8 flex flex-row justify-between gap-[141px] items-center">
        <h4 className="font-bold text-4xl text-white">Anonime</h4>
        <p className="nav-bar">Home</p>
        <p className="nav-bar">List anime</p>
        <Search />
      </div>
    </div>
  );
};

export default HeaderMovie;
