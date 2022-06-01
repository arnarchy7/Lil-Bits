import React from 'react';
import './App.css';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

import logo from './assets/logo.png';

function Header() {
  return (
    <Container>
      <Row>
        <Col sm>
          <img src={logo} className="App-logo" alt="logo" />
        </Col>
        <Col sm>
          <Nav justify variant="pills">
            <Nav.Item>
              <NavLink className="NavLink" to="/" activeclassname="active">
                Home
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink className="NavLink" to="/meals" activeclassname="active">
                Meals
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink className="NavLink" to="/drinks" activeclassname="active">
                Drinks
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink className="NavLink" to="/date" activeclassname="active">
                Date
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink className="NavLink" to="/summary" activeclassname="active">
                Summary
              </NavLink>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
