import { useState } from 'react'
import { Link } from 'react-router-dom';
import React from 'react'
import VideoCard from './vid-card'

function Videos() {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'hafsat'
          
      }
    };
    
  React.useEffect(() =>
  {fetch(`https://codebee.pythonanywhere.com/api/video/`)
  .then(res => res.json())
  .then(data => console.log(data))}, [])
  //shows mulitple videos with a link to preview 1. fetch videos and store them iin loader function 2. map the videos in array while passing vidcard compenent. 3. render videos on page
  return (
    <>
      <div>
       <div className='videoCard'>
           <div className='video'></div>
           <p>title</p>
        </div>
       
      
      </div>
    </>
  )
}

export default Videos
