import React from "react";
import { Modal } from "antd";

const MovieDetail = ({
  isModalOpen,
  handleOk,
  handleCancel,
  movieName,
  description,
  episode,
  img,
}) => {
  return (
    <>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={800}
        footer={null}
      >
        <div className="flex justify-between gap-5">
          <img src={img} alt="" />
          <div className="flex flex-col justify-between gap-0">
            <p className=" text-4xl font-black text-red-500">{movieName}</p>
            <p className="text-base">
              <span className="text-amber-700 font-bold text-xl">
                Description:
              </span>{" "}
              {description}
            </p>
            <p className="text-base">
              <span className="text-amber-700 font-bold text-xl">Episode:</span>{" "}
              {episode}
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default MovieDetail;
