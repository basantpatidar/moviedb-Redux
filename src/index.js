import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import searchReducer from './reducers';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const middlewares = [];
middlewares.push(thunk);

const loggerMiddleware = createLogger({
  predicate: () => process.env.NODE_ENV === 'development'
});
middlewares.push(loggerMiddleware);
// middlewares.push(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const store = createStore(
  searchReducer,
  compose(applyMiddleware(...middlewares))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
