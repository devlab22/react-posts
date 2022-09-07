import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import About from '../../pages/About';
import Posts from '../../pages/Posts';
import Home from '../../pages/Home';
import Post from '../../pages/Post';
import Error from '../../pages/Error';

export default function AppRouter() {
  return (
    <Routes>

          <Route exact path='/' element={
            <Home />
          } />

          <Route exact path='/about' element={
            <About />
          } />

          <Route exact path='/posts' element={
            <Posts />
          } />

          <Route exact path="/error" element={
            <Error message='Page not found'/>
          } />

          <Route path='/posts/*' element={
            <Post/>
          }/>

          <Route path='*' element={
            <Navigate to="/error" />
          }/>

        </Routes>
  )
}
