import React from 'react';
import ReactDom from 'react-dom';
// import { BrowserRouter, useRoutes } from 'react-router-dom';
import Routes from '../Routes.js';
import { Provider } from 'react-redux';
import getStore from '../store/index.js';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { hydrateRoot } from 'react-dom/client';
const App = () => {
  const router = createBrowserRouter(Routes);
  
  return (
    <Provider store={getStore()}>
      <RouterProvider router={router} />
      
    </Provider>
  );
};
hydrateRoot(document.getElementById('root'),<App /> );
