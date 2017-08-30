import React from 'react';

import { render } from 'react-dom';

// Import Styles
import css from './styles/style.styl';



// Import Components
import App from './components/App';
import PhotoGrid from './components/photoGrid/PhotoGrid';
import Single from './components/single/Single';

// import React Router
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import { history, store } from './store'

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path='/view/:postId' component={Single}></Route>
      </Route>
    </Router>
  </Provider>

);

render( router, document.getElementById('root'));