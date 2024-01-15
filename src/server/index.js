

import express from 'express';

// import { StaticRouter } from 'react-router-dom';
 import {render} from './render.js';

const path = require('path');
const app = express();
const publicPath = path.join(__dirname, '../public');
app.use(express.static(publicPath));
// renderToString renders a React tree to an HTML string. 
//const content = renderToString(<Home />);



app.get("*", (req, res,next) => {
  console.log("app.get", req.path);
  res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
   render(req, res);
 
  
});
app.listen(3000);
