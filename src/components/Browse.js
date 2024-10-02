import useNowPlaying from "../hooks/useNowPlaying";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopular from "../hooks/usePopular";

const Browse = () => {
  useNowPlaying();
  usePopular();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
