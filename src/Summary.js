import React from 'react';
import './App.css';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function Summary() {
  const navigate = useNavigate();

  const Meal = sessionStorage.getItem('meal');
  const sumMeal = JSON.parse(Meal);
  const Drinks = sessionStorage.getItem('drinks');
  const sumDrinks = JSON.parse(Drinks);
  const Date = sessionStorage.getItem('date');
  const Year = Date.slice(1, 5);
  const Month = Date.slice(6, 8);
  const Day = Date.slice(9, 11);
  const Time = Date.slice(12, 17);
  const Guests = sessionStorage.getItem('guests');
  const sumGuests = JSON.parse(Guests);
  const Email = sessionStorage.getItem('email');
  const sumEmail = JSON.parse(Email);

  const storeOrderAndNavigate = () => {
    navigate('/');
    localStorage.setItem(
      sumEmail,
      JSON.stringify([{ meal: Meal, drinks: Drinks, date: Date, guests: Guests, email: Email }])
    );
    sessionStorage.clear();
  };

  return (
    <Container>
      <Row>
        <Col className="boxSummary">
          <h3 className="summaryHeader">Dish:</h3>
          {sumMeal.map(({ idMeal, strMeal }) => (
            <p key={idMeal}>{strMeal}</p>
          ))}
          <h3 className="summaryHeader">Drinks:</h3>
          {sumDrinks.map(({ id, name }) => (
            <p key={id}>{name}</p>
          ))}
          <h3 className="summaryHeader">Date:</h3>
          <p>
            {Day}-{Month}-{Year}
          </p>
          <h3 className="summaryHeader">Time:</h3>
          <p>{Time}</p>
          <h4 className="summaryHeader">Number of Guests:</h4>
          <p>{sumGuests}</p>
          <h4 className="summaryHeader">Email</h4>
          <p>{sumEmail}</p>
        </Col>
      </Row>
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
            onClick={storeOrderAndNavigate}
          >
            Confirm Order
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Summary;
