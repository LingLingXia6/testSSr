import React from 'react';
import { useRoutes, matchRoutes, Routes, Route  } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import getStore from '../store/index.js';
import { Provider } from 'react-redux';
import Routers from '../Routes.js';

export const render = (req, res) => {
  console.log('what is request in render', req.path);
  const matches = matchRoutes(Routers, req.path);
  console.log('matches11', matches[0]?.route);
  const context = {};
  const store = getStore();
  const promises = matches.map(({ route }) =>
    
    route?.element?.type?.getInitialData
      ? route?.element?.type?.getInitialData(store)
      : null
  );
  console.log('server--promises--1', promises);
  Promise.all(promises).then(() => {
    console.log("state---data", Array.isArray(store.getState().hotMusic));
    console.log('server--promises----2', promises);
   
    //const Element = useRoutes(Routers);
    const Element = () => {
      const element = useRoutes(Routers);
      return element;
    };
    console.log("ele", Element);
    // StaticRouter 可以用在ssr
    const content = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.path} context={context}>
          <Element />
        </StaticRouter>
      </Provider>
    );
    res.send(`<!doctype html>
  <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport"
              content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>SSR</title>
        <link rel="stylesheet" type="text/css" href="/main.css">
    </head>
    <body>
      <div id="root">${content}</div>
      <script src="https://unpkg.com/prop-types/prop-types.min.js"></script>
      <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // https://redux.js.org/usage/server-rendering#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState()).replace(
            /</g,
            '\\u003c'
          )}
        </script>
      <script src="/index.js"></script>  
    </body>
  </html>
`);
  });
};
