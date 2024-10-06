import React from "react";
const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[30%] md:pt-[22%] md:px-24 px-5 absolute bg-gradient-to-r from-black text-white">
      <h1 className="text-xl md:text-4xl font-bold">{title}</h1>
      <p className="mt-5 text-lg w-72 hidden md:inline-block">{overview}</p>
      <div className="md:mt-5 mt-10 md:text-lg text-sm font-bold">
        <button className="bg-white p-1 mr-2 md:p-3 md:pr-5 md:mr-3 rounded-lg bg-opacity-55 border-2 hover:bg-opacity-30">
          &#9658; Play
        </button>
        <button className="bg-white p-1 mr-2 md:p-3 md:pr-5 md:mr-3 rounded-lg bg-opacity-55 border-2 hover:bg-opacity-30">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
