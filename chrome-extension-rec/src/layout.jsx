import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import React from 'react'
import Footer from './components/footer'
import Header from './components/header'

export default function Layout() {
   
  
  return (
    <>
      <div>
      
        <Header />
        <main>
        <Outlet />
        </main>
      
        <Footer />
      </div>
    </>
  )
}


