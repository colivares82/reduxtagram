import Raven from 'raven-js';

const sentry_key = '918f021559eb49829963475e16872320';
const sentry_app = '211128';
export const sentry_url = `https://${sentry_key}@app.getsentry.com/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
