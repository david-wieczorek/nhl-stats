import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store';
import {Provider} from 'react-redux';

import 'normalize.css';
import './styles/index.scss';
import App from './layouts/App';
import * as serviceWorker from './serviceWorker';

import Firebase, {FirebaseContext} from './components/Firebase';

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <Provider store={configureStore()}>
      <App />
    </Provider>
  </FirebaseContext.Provider>,

  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
