import React, {lazy} from 'react';
import {Route, Routes} from "react-router-dom";

const HomePage = lazy(() => import('../pages/HomePage'))
const Details = lazy(() => import('../pages/Details'))
const NotFound = lazy(() => import('../pages/NotFound'))

export const AppRouter = () => (
  <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/country/:name' element={<Details/>}/>
    <Route path='*' element={<NotFound/>}/>
  </Routes>
);

