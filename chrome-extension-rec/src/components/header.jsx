import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import React from 'react'
import iconh from '../images/iconH.png'
export default function Header() {
   
  
  return (
    <>
      <div className='header'>
          <div className='left'>
          <img src={iconh} alt="" />
          <h2>HelpMeOut</h2>
          </div> 
          <div className='mid'>
            
              <a href='features'>Features</a>
  
              <a href='works'>How it Works</a>
            </div>
            <div className='right'>
            <h2>Get Started</h2>
            </div>
           
      </div>
    </>
  )
}


