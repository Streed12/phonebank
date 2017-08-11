import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Grid } from 'react-bootstrap';
import { Header } from './index';
import { logoutUser } from '../actions/login';

class App extends Component {
  render() {
    const { account_info, auth: { id }, history, logoutUser: logoutUserAction } = this.props;
    return (
      <div>
        <Header
          userId={id}
          userInfo={account_info}
          logout={logoutUserAction}
          history={history}
        />
        <section id="content">
          <Grid>
            {this.props.children}
          </Grid>
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    account_info: state.account_info
  };
}

export default withRouter(
  connect(mapStateToProps, { logoutUser })(App)
);
