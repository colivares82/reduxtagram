import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// Import the root reducer

import rootReducer from './reducers/index';

// Import Data
import comments from './data/comments';
import posts from './data/posts';

// Create an object for the default data

const defaultState = {
  posts, comments
};


// This is only to enable the  Redux DevTool
const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

export const store = createStore(rootReducer, defaultState, enhancers);
export const history = syncHistoryWithStore(browserHistory, store);


// This is just to hot changes for reducers without refresh
if(module.hot) {
  module.hot.accept('./reducers/',() => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}
