import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import { Provider } from 'mobx-react';
import AppStore from '../../src/stores/AppStore';
import App from '../../src/App';
import StyleContext from 'isomorphic-style-loader/StyleContext';

const router = express.Router();

router.get('/', async (req, res) => {
  const css = new Set();
  const context = {
    insertCss: (...styles) => styles.forEach(style => css.add(style._getCss())),
  };

  const appStore = new AppStore();
  await appStore.fetchData();

  const body = ReactDOM.renderToString(
    <Provider appStore={appStore}>
      <StyleContext.Provider value={context}>
        <App/>
      </StyleContext.Provider>
    </Provider>);

  const html = `<!doctype html>
      <html>
        <head>
          <title>React Mobx Ssr Starter</title>
          <style type="text/css">${[...css].join('')}</style>
          <script>
            window.__INITIAL_STATE__ = ${ JSON.stringify({ appStore: appStore.toJson() }) };
          </script>
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
