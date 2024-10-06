import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import { BACKGROUND_IMG } from "../utils/constant";

const GPTSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={BACKGROUND_IMG} alt="background" />
      </div>
      <GPTSearchBar />
    </div>
  );
};

export default GPTSearch;
