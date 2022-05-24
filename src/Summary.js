import React from 'react';
import './App.css';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function Summary() {
  const navigate = useNavigate();

  return (
    <Container>
      <Row>
        <Col>
          <Button
            block="true"
            style={{
              backgroundColor: '#C16757',
              color: '#3d6053',
              borderRadius: '100px',
              borderColor: '#3d6053',
              border: '3px solid',
              width: '200px',
              fontWeight: '600',
            }}
            onClick={() => navigate('/')}
          >
            Order
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Summary;
