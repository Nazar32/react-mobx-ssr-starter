import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'mobx-react';
import App from './App';
import AppStore from './stores/AppStore';
import ContextProvider from './ContextProvider';

const css = new Set();
const context = {
  insertCss: (...styles) => styles.forEach(style => css.add(style._getCss())),
};

const appStore = new AppStore(window.__INITIAL_STATE__);

hydrate((
  <Provider appStore={appStore}>
    <ContextProvider context={context}>
      <App/>
    </ContextProvider>
  </Provider>
  ),
  document.getElementById('root')
);
