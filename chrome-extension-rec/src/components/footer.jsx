import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import React from 'react'
import iconF from '../images/iconF.png'
export default function Footer() {
   
  
  return (
    <>
      <div className='footer'>
        <div className='left'>
          <img src={iconF} alt="" />
          <h3>HelpMeOut</h3>
          </div> 
        <div className='right'>

            <div className='menu'>
            <h4>Menu</h4>
              <a href='#'>Home</a>
              <a href='#'>Converter</a>
              <a href='#'>How it Works</a>
            </div>
            <div className='about us'>
              <h4>About us</h4>
              <a href='#'>About</a>
              <a href='#'>Contact Us</a>
              <a href='#'>Privacy Policy</a>
            </div>
          
            <div className='screen record'>
            <h4>Screen Record</h4>
              <a href='#'>Browser Window</a>
              <a href='#'>Desktop</a>
              <a href='#'>Application</a>
            </div>
        </div>
       
      </div>
    </>
  )
}


