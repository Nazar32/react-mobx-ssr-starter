import React from 'react';
import { hydrate } from 'react-dom';
import App from './App';
import ContextProvider from './ContextProvider';

const css = new Set();
const context = {
  insertCss: (...styles) => styles.forEach(style => css.add(style._getCss())),
};

hydrate(<ContextProvider context={context}>
  <App/>
</ContextProvider>, document.getElementById('root'));
