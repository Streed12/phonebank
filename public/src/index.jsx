import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { saveStatus } from './helpers/localStorage';

import '../stylesheets/app.less';

// Components
import { App } from './components';

// Routes
import GenerateRoute from './routes/generateRoutes';

// User Auth Action
import { authTransition } from './actions/login';

store.subscribe(() => {
  saveStatus(store.getState());
});

const Root = () => {
  // checks if user id !==null and if authToken exists in localStorage;
  // will refactor to separate concerns;
  const isLoggedIn = authTransition.bind(null, store);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App>
          <GenerateRoute path="/" authed={() => isLoggedIn()} />
        </App>
      </BrowserRouter>
    </Provider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
