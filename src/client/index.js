import React from 'react';
import ReactDom from 'react-dom';
// import { BrowserRouter, useRoutes } from 'react-router-dom';
import Routes from '../Routes.js';
import { Provider } from 'react-redux';
import { getClientStore } from '../store/index.js';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { hydrateRoot,createRoot } from 'react-dom/client';
const App = () => {
  const router = createBrowserRouter(Routes);
  
  return (
    <Provider store={getClientStore()}>
      <RouterProvider router={router} />
      
    </Provider>
  );
};
const render = module.hot ? createRoot : hydrateRoot;
render(document.getElementById('root'),<App /> );
if (module.hot) {
  module.hot.accept();
}