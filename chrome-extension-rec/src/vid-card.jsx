import { useState } from 'react'
import { Link } from 'react-router-dom';
import React from 'react'

export default function VideoCard() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'hafsat'
        }
    };
    //gets rendered in vid.jsx
  React.useEffect(() =>
  {fetch("https://mbakara-chrome-extension-backend.onrender.com/videos/", options)
  .then(res => res.json())
  .then(data => console.log(data))}, [])
  //1. fetch videos 2. create videoa card component with link then render on page
  return (
    <>
      <div>
       <Link to='/videos/id' >
       <div className='videoCard'>
           <div className='video'></div>
           <h1>Video preview</h1>
        </div>
       
       </Link>
      </div>
    </>
  )
}


