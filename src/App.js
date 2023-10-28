import React, { useState } from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Posts from './Components/Posts';

export default function App() {


  return (

    <>
     
      {/*ROUTING PART*/}
      <div>
        <BrowserRouter><Routes>

          <Route path='/' element={<Posts />} />
        </Routes></BrowserRouter>
      </div>
    </>
  )
}
