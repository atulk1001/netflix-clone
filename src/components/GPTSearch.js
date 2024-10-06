import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import { BACKGROUND_IMG } from "../utils/constant";

const GPTSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img
          src={BACKGROUND_IMG}
          alt="background"
          className="h-screen sm:h-screen md:h-auto sm:object-cover object-cover md:object-none"
        />
      </div>
      <GPTSearchBar />
    </div>
  );
};

export default GPTSearch;
