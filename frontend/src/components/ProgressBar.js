import React from "react";

const ProgressBar = ({ completed }) => {
  return (
    <div className="absolute h-6 w-full bg-amber-600 rounded-lg m-50 ">
      <div className="h-full bg-amber-300 rounded-lg transition-all ease-in-out duration-700 text-right" style={{width: completed + "%"}}>
      </div>
    </div>
  );
};

export default ProgressBar;
