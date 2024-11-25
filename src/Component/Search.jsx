import React from "react";

const Search = () => {
  return (
    <>
      <input
        className="border-solid rounded-full border-2 pl-2 font-semibold text-lg"
        style={{ width: "374px", height: "48px" }}
        type="text"
        placeholder="Search anime or movie"
      />
    </>
  );
};

export default Search;
