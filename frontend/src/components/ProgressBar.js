import React from "react";
import rocket from "../assets/rocketicon-02.svg"

const ProgressBar = ({ completed }) => {
  return (
    <div className="absolute h-6 w-full bg-white rounded-lg m-50 ">
      <div className="h-full bg-black rounded-lg transition-all ease-in-out duration-700" style={{width: completed + "%"}}>
      </div>
    </div>
  );
};

export default ProgressBar;
