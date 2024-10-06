import React from "react";
import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ poster, title }) => {
  return (
    <div className="md:w-44 w-36 ml-3 md:mr-4 md:ml-4 mr-3 mt-2 mb-20 h-32 font-mono text-white">
      <img
        className="w-full h-48 rounded-md"
        alt={title}
        src={IMG_CDN_URL + poster}
      />
    </div>
  );
};

export default MovieCard;
