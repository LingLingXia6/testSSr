import React from 'react';
import Home from './container/Home/Home.js';
import Login from './container/Login.js';
import PlayListPage from './container/playList';
export default [
  {
    element: <Home />,
    path: '/',
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'playList',
    element:<PlayListPage/>
  }
];
