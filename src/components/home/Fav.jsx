import React from "react";
import FavPlat from "../cards/FavPlat";
import FrameTitle from "../frames/FrameTitle";

const Fav = () => {
  return (
    <div
      // className="h-[500px]"
      style={{
        margin: " 25px 0",
      }}
    >
      <FrameTitle>الأكثر طلباً</FrameTitle>
      <div className="  center grid-container">
        <FavPlat item />
        <FavPlat item />
        <FavPlat item />
        <FavPlat item />
        <FavPlat item />
        <FavPlat item />
      </div>
    </div>
  );
};

export default Fav;
