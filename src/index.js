import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Filter from './components/filter/Filter';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from 'store/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Filter />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
