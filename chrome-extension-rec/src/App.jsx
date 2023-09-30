import { Routes, Route, 
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements } from "react-router-dom";
import React from "react";
import Home from './home'
import Videos from "./vids";
import Login from './login'
import './App.css'
import Preview from "./preview";
import Layout from "./Layout"
const router = createBrowserRouter(createRoutesFromElements(
          
          <Route path="/"  element={<Layout />} >
            <Route index  element={<Home />} />
            <Route path="videos" element={<Videos />}  />
            <Route path="videos/:id" element={<Preview />}  />
            <Route path="/login" element={<Login />}  />
            
          </Route>
         
       
))

export default function App() {

  return (
    <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>

  )
}