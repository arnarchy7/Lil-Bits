import React from 'react';
import './App.css';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

import logo from './assets/logo.png';

function Header() {
  return (
    <Container>
      <Row>
        <Col sm>
          <img src={logo} className="App-logo" alt="logo" />
        </Col>
        <Col sm>
          <Nav justify variant="pills" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="meals" disabled>
                Meals
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="drinks" disabled>
                Drinks
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="date" disabled>
                Date
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="summary" disabled>
                Summary
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
