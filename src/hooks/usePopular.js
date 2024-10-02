import { useEffect } from "react";
import { OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addPopular } from "../utils/moviesSlice";

const usePopular = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      OPTIONS
    );
    const json = await data.json();
    dispatch(addPopular(json.results));
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
};
export default usePopular;
