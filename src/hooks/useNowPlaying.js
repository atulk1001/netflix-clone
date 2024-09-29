import {useEffect} from 'react'
import { OPTIONS } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addNowPlaying } from '../utils/moviesSlice';

const useNowPlaying = () => {
    const dispatch = useDispatch();
    const getNowPalyingMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', OPTIONS);
      const json = await data.json();
      dispatch(addNowPlaying(json.results))
    }
    useEffect(() => {
      getNowPalyingMovies()
    },[])
}
export default useNowPlaying;