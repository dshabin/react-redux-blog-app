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
import PostsNew from './components/posts_new'
import PostsShow from './components/post_show'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

//the most specific router in the top
// :id -> passed using props to postshow

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    <div>
    <Switch>
      <Route path="/posts/new" component={PostsNew} />
      <Route path="/posts/:id" component={PostsShow} />
      <Route path="/" component={PostsIndex} />
    </Switch>

    </div>
    </BrowserRouter>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
