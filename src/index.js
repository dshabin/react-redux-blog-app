import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/app';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PostsIndex from './components/posts_index'
import promise from 'redux-promise'


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    <div>
      <Route path="/" component={PostsIndex} />
    </div>
    </BrowserRouter>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
