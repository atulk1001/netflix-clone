import React from 'react'
const VideoTitle = ({title , overview}) => {
  return (
    <div className='w-screen aspect-video pt-[22%] px-24 absolute bg-gradient-to-r from-black text-white'>
        <h1 className='text-4xl font-bold'>{title}</h1>
        <p className="mt-5 text-lg w-72">{overview}</p>
        <div className='mt-5 text-lg font-bold'> <button className="bg-white p-3 pr-5 mr-3 rounded-lg bg-opacity-55 border-2 hover:bg-opacity-30"> &#9658; Play</button>
        <button className="bg-white p-3 mr-3 rounded-lg bg-opacity-55 border-2 hover:bg-opacity-30">More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle