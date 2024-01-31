import React from 'react';
import ReactDom from 'react-dom';
// import { BrowserRouter, useRoutes } from 'react-router-dom';
import Routes from '../Routes.js';
import { Provider } from 'react-redux';
import { hydrateRoot, createRoot } from 'react-dom/client';
import { getClientStore } from '../store/index.js';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const App = () => {
  const router = createBrowserRouter(Routes);
  
  return (
    <Provider store={getClientStore()}>
      <RouterProvider router={router} />
      
    </Provider>
  );
};

export default App