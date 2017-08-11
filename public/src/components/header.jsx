import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Row, Col } from 'react-bootstrap';
import { Navigation } from './index';

export default class Header extends Component {
  constructor(props) {
    super(props);
    // Bind
    this.getLinks = this.getLinks.bind(this);
  }
  getLinks(userId = null) {
    // links to pass into the navigation based on session info
    // user is logged in aka id present
    if (userId) {
      return [
        { title: 'Account', href: `/account/${userId}` },
        { title: 'Logout', href: '/logout' }
      ];
    }
    return [
      { title: 'Register', href: '/registration' },
      { title: 'Login', href: '/login' }
    ];
  }
  render() {
    const { history, logout, userId, userInfo: { first_name } } = this.props;
    return (
      <Navbar>
        <Row>
          <Col md={4}>
            <Navbar.Brand>
              <Link to="/">Phonebank</Link>
            </Navbar.Brand>
          </Col>
          <Col md={4} id="navigation">
            <Navigation
              title={!userId ? 'Menu' : first_name}
              links={this.getLinks(userId)}
              logout={logout}
              history={history}
            />
          </Col>
        </Row>
      </Navbar>
    );
  }
}
