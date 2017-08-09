import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { saveStatus } from './helpers/localStorage';
store.subscribe(() => {
  saveStatus(store.getState());
})

import '../stylesheets/app.less';

// Components
import { App, LogInForm } from './components';

// Routes
import GenerateRoute from './routes/generateRoutes';

// Actions
import { authTransition } from './actions/login';

const Root = () => {
  // checks if user id !==null and if authToken exists in localStorage;
  // will refactor to separate concerns;
  const isLoggedIn = authTransition.bind(null, store);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App>
          <Switch>
            <Route path="/login" component={LogInForm} />
            <GenerateRoute path="/" authed={() => isLoggedIn()} />
          </Switch>
        </App>
      </BrowserRouter>
    </Provider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));