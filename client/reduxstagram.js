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

/****************************
 * Sentry Config and install
 ****************************/

import Raven from 'raven-js';
import { sentry_url, logException } from './data/config'

Raven.config(sentry_url, {
  tags: {
    personalTag: 'This Tag is traced on Sentry now'
  }
}).install();
// This can be in a Catch
/*
logException(new Error('Something failed'), {
  email: 'carlos@gmail.com'
});
*/

// You can also capture the message but not display the error
//Raven.captureMessage('Error Message');

// Or even show a Dialog error where you can ask for error to the user, But this comes after the captureMessage
//Raven.showReportDialog();
/***************************
 * Until Here comes Sentry
 ***************************/


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