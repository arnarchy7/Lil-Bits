import React from 'react';
import './App.css';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <Container>
      <Row>
        <Col sm={8}>
          <Carousel className="box">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://i.picsum.photos/id/344/800/400.jpg?hmac=INNxXLdAY1yEjPm4IbU4xfU-6LuVCk6s1CmA-GOd0gE"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://i.picsum.photos/id/780/800/400.jpg?hmac=I-i2NMqpy7s9PacAitvdN18gyKSF38HdEi4z5w2NG34"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://i.picsum.photos/id/215/800/400.jpg?hmac=ktn-8hxDCq51aLwJJSfc85O8HMRRffMspMAmFerlvkQ"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col sm={4}>
          <Row className="box">
            <p>Place an order</p>
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
              onClick={() => navigate('/meals')}
            >
              Order
            </Button>
          </Row>
          <Row className="box">
            <p>Change your order</p>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Your email address"
                aria-label="Your email address"
                aria-describedby="basic-addon2"
              />
              <Button
                block="true"
                style={{
                  backgroundColor: '#C16757',
                  color: '#3d6053',
                  borderBottomRightRadius: '10px',
                  borderTopRightRadius: '10px',
                  borderColor: '#3d6053',
                  border: '3px solid',
                  width: '100px',
                  fontWeight: '600',
                }}
                id="button-addon2"
                onClick={() => navigate('/meals')}
              >
                Enter
              </Button>
            </InputGroup>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
