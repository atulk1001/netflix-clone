import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'

const MovieCard = ({poster, title}) => {
  return (
    <div className='w-44 ml-2 mr-2 mb-20 h-32'>
        <img className= "w-44 h-48 rounded-md" alt={title} src={IMG_CDN_URL+poster}/>
    </div>
  )
}

export default MovieCard