import React from 'react';
import { useRoutes, matchRoutes, Route} from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import getStore from '../store/index.js';
import { Provider } from 'react-redux';
import  Routers from '../Routes.js';

export const render = (req, res) => {
  console.log('what is request in render', req.path);
  const matches = matchRoutes(Routers, req.path);
  console.log('matches11', matches[0]?.route,matches[0]?.element);
  const context = {};
  const promises = matches.map(({ route }) =>
    route.loadData ? route.loadData(dispatch) : null
  );
  console.log('server--promises', promises);
  //const Element = useRoutes(Routers);
  const Element = () => {
    const element = useRoutes(Routers);
    return (element);
  };
  // StaticRouter 可以用在ssr
  const content = renderToString(
    <Provider store={getStore()}>
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
    </head>
    <body>
      <div id="root">${content}</div>
      <script src="/index.js"></script>  
    </body>
  </html>
`);
};
