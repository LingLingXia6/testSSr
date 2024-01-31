import React from 'react';
 import ReactDom from 'react-dom';
// // import { BrowserRouter, useRoutes } from 'react-router-dom';
// import Routes from '../Routes.js';
// import { Provider } from 'react-redux';
import App  from './App';

import { hydrateRoot,createRoot } from 'react-dom/client';

// const render = module.hot ? createRoot : hydrateRoot;
const render = hydrateRoot;

render(document.getElementById('root'),<App /> );
// if (module.hot) {
//   console.log("hot build");
//   module.hot.accept("./App.js", () => {
//     render(document.getElementById('root'),<App /> );
//   });
// }
// if (module['hot']) {
//   console.log("hot build333");
//   module['hot'].accept('./App.js', function () {
//     const NewApp = require('./App').default;
//     render(document.getElementById('root'),<NewApp /> );
//   }, (err) => {
//     console.log("hmr-error", err);
//   });
// }
if (import.meta.webpackHot) {
  console.log("hot build222");
  import.meta.webpackHot.accept('./App.js', function () {
    const NewApp = require('./App');
    ReactDOM.render(document.getElementById('root'),<NewApp /> );
  }, (err) => {
    console.log("hmr-error", err);
  });
}