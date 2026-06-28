import React from "react";

const FrameTitle = ({ children }) => {
  return (
    <div className="h-[100px] text-center center ">
      <div className="flex relative text-xl scale-200 ">
        {children}
        <img className="absolute scale-150" src="/src/assets/icons/Frame.svg" />
      </div>
    </div>
  );
};

export default FrameTitle;
