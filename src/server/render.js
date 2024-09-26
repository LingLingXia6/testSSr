import React from 'react';
import { useRoutes, matchRoutes, Routes, Route } from 'react-router-dom';
import { dehydrate, Hydrate, QueryClient, QueryClientProvider } from 'react-query';

import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import getStore from '../store/index.js';
import { Provider } from 'react-redux';
import Routers from '../Routes.js';
import fetch from '../fetcher.js';
import { ChunkExtractor, ChunkExtractorManager } from "@loadable/server";
const path = require('path');
const filePath = path.resolve(__dirname, '/src/public', 'index.js');
export const render = async (req, res) => {
  const queryClient = new QueryClient();
  const loadableJson = path.resolve(__dirname, "../public/loadable-stats.json");
const extractor = new ChunkExtractor({
  statsFile: loadableJson,
});

  const matches = matchRoutes(Routers, req.path);
 
  const context = {};

  let preloadState = {};
 
  const initDate = await Promise.allSettled([fetch.get('/banner?type=2'), fetch.get('/personalized/newsong')]);
  const [bannerInfo, songsInfo] = initDate;

  if (bannerInfo && bannerInfo.value && bannerInfo.value.data) {
    // console.log("bannerInfo---initData", bannerInfo.value.data);
    const { banners } = bannerInfo.value.data;
    preloadState = { banners };
  }
  if (songsInfo && songsInfo.value && songsInfo.value.data) {
    const { result } = songsInfo.value.data;
    console.log("fffffff", result);
    preloadState = { ...preloadState, songs:result };
  }
  const store = getStore(preloadState);
  // console.log("preloadState", preloadState);
  console.log("store.getState()", store.getState());
  const Element = () => {
    const element = useRoutes(Routers);
    return element;
  };
   // StaticRouter 可以用在ssr
  const content = renderToString(
    
    <QueryClientProvider client={queryClient}>
      <Hydrate state={{}}>
      <ChunkExtractorManager>

    
<Provider store={store}>
  <StaticRouter location={req.path} context={context}>
    <Element />
  </StaticRouter>
  </Provider>
  </ChunkExtractorManager>
      </Hydrate>
    </QueryClientProvider>


   
   );
  res.send(
    `<html lang="en">
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
       <script>
           // WARNING: See the following for security issues around embedding JSON in HTML:
           // https://redux.js.org/usage/server-rendering#security-considerations
           window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState()).replace(
             /</g,
             '\\u003c'
           )}
         </script>
         ${extractor.getScriptTags()}
     </body>
     </html>
 `);
  queryClient.clear();
};
