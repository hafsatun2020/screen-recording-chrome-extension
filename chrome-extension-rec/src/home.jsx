import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import React from 'react'
import grayDot from './images/gdot.png'
import greendot from './images/greenDot.png'
import Frame1 from './images/f-1.png'
import Frame2 from './images/f-2.png'
import Frame3 from './images/f-3.png'
import target from './images/target.png'
import arrowhead from './images/arrowhead.png'
import recycle from './images/recycle.png'
import vidrepo from './images/vid-repo.png'
import recimg from './images/rec.png'
import icon1 from './images/1-icon.png'
import icon2 from './images/2-icon.png'
import icon3 from './images/3-icon.png'

export default function Home() {
   
  
  return (
    <>
      <div className='hero'>
        <div  className='left'>
        <h1>Show Them Don’t Just Tell</h1>
        <p>Help your friends and loved ones by creating and sending videos on how to get things done on a website.</p>
        <button>Install HelpMeOut</button>
        </div>
        <div className="right">
          
          <div className='dots'>
            <img src={greendot} alt="" id='green-dot' />
            <img src={grayDot} alt="" id='gray-dot' />
          </div>
            <div className='image-grid'>
              <img src={Frame1} alt="" id='img-1'/>
              <img src={Frame2} alt="" id='img-2'/>
              <img src={Frame3} alt="" id='img-3'/>
              </div>
       

        </div>
      </div>
      
      <section id="features">
        <div className='top'>
        <h1>Features</h1>
          <p>Key Highlights of Our Extension</p>
        </div>
      <div className='container'>
        <div className='left'>
          <div className='desc'>
          <img src={target} alt="" />
            <div className='text'>
              <h2>Simple Screen Recording</h2>
              <p>Effortless screen recording for everyone. Record with ease, no tech expertise required.</p>
            </div>
          </div>
          <div className='desc'>
          <img src={arrowhead} alt="" />
            <div className='text'>
              <h2>Easy-to-Share URL</h2>
              <p>Share your recordings instantly with a single link. No attachments, no downloads.</p>
            </div>
          </div>
          <div className='desc'>
          <img src={recycle} alt="" />
            <div className='text'>
              <h2>Revisit Recordings</h2>
              <p>Access and review your past content effortlessly. Your recordings, always at your fingertips.</p>
            </div>
          </div>
        </div>
        <img src={vidrepo} alt="" />
      </div>
      </section>
      <section id="works">
        <h1>How it works</h1>
        <div className='container'>
          <div className='card'>
          <img src={icon1} alt="" />
          <h2>Revisit Recordings</h2>
          <p>We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.</p>
          <img src={recimg} alt="" id='rec-img' />
          </div>
          <div className='card'>
          <img src={icon2} alt="" />
          <h2>Share Your Recording</h2>
          <p>We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.</p>
          <img src={recimg} alt="" id='rec-img' />
          </div>
          <div className='card'>
          <img src={icon3} alt="" />
          <h2>Learn Effortlessly</h2>
          <p>Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.</p>
          <img src={recimg} alt="" id='rec-img' />
          </div>
        </div>
      </section>
    </>
  )
}


