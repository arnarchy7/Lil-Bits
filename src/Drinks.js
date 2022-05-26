import { React, useState, useEffect } from 'react';
import './App.css';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  flex-wrap: wrap;
  height: 100%;
  box-sizing: border-box;
`;

const Card = styled.div`
  border: 5px solid #3d6053;
  padding: 2rem;
  margin-bottom: 0.5rem;
  width: 50%;
`;

function Drinks() {
  const navigate = useNavigate();

  const [drinks, setDrinks] = useState([]);
  const getDrinks = async () => {
    const result = await axios.get('https://api.punkapi.com/v2/beers');
    setDrinks(result.data);
  };

  useEffect(() => {
    getDrinks();
  }, []);

  let drinkOrder = [];

  const drinksToStorage = () => {
    localStorage.setItem('drinks', JSON.stringify(drinkOrder));
  };

  const storeDrinksAndNavigate = () => {
    drinksToStorage();
    navigate('/date');
    localStorage.setItem('guests', JSON.stringify(1));
  };

  return (
    <Container>
      <Row>
        <Col sm={8}>
          <Wrapper>
            {/* eslint-disable-next-line camelcase */}
            {drinks.map(({ id, name, image_url }) => (
              <Card key={id}>
                <h5>{name}</h5>
                {/* eslint-disable-next-line camelcase */}
                <img src={image_url} alt="Drink thumb" height={200} />
                <Form>
                  {['checkbox'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        onChange={(e) => {
                          if (e.target.checked) {
                            drinkOrder.push({ id, name });
                          }
                        }}
                      />
                    </div>
                  ))}
                </Form>
              </Card>
            ))}
          </Wrapper>
        </Col>
        <Col sm={4} className="box2">
          <p>When you are happy with your choice click next</p>
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
            onClick={storeDrinksAndNavigate}
          >
            Next
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Drinks;
