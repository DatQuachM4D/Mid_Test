import React, { useState } from "react";
import MovieDetail from "./MovieDetail";

const EachMovie = ({ movieName, description, img, imageURL, episode }) => {
  const onClickMovie = () => {
    showModal();
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <img src={imageURL} alt="" onClick={() => onClickMovie()} />
      <MovieDetail
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
        handleOk={handleOk}
        movieName={movieName}
        description={description}
        episode={episode}
        img={img}
      />
    </>
  );
};

export default EachMovie;
