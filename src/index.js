import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Filter from './components/filter/Filter';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Filter />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
