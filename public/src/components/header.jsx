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
    let links = [];
    if (userId) { // user is logged in aka id present
      links = [
        { title: 'Account', href: `/account/${userId}` },
        { title: 'Logout', href: '/logout' }
      ];
    } else {
      links = [
        { title: 'Register', href: '/registration' },
        { title: 'Login', href: '/login' }
      ];
    }
    return links;
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
