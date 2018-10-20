import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import App from '../../client/App';
import ContextProvider from '../../client/ContextProvider';

const router = express.Router();

router.get('/', function(req, res) {
  const css = new Set();
  const context = {
    insertCss: (...styles) => styles.forEach(style => css.add(style._getCss())),
  };

  const body = ReactDOM.renderToString(
    <ContextProvider context={context}>
      <App/>
    </ContextProvider>);

  const html = `<!doctype html>
      <html>
        <head>
          <title>React Mobx Ssr Starter</title>
          <style type="text/css">${[...css].join('')}</style>
        </head>
        <body>
          <div id="root">${body}</div>
          <script type="application/javascript" src="client.js"></script>
        </body>
      </html>`;
  res.send(html);
  res.end();
});

export default router;
