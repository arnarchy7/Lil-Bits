import { React, useState, useEffect } from 'react';
import './App.css';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Meals() {
  const navigate = useNavigate();

  const [meals, setMeals] = useState([]);
  const getMeals = async () => {
    const result = await axios.get('https://themealdb.com/api/json/v1/1/random.php');
    setMeals(result.data.meals);
    // console.log(result.data.meals);
  };

  useEffect(() => {
    getMeals();
  }, []);

  const mealToStorage = () => {
    localStorage.setItem('meal', JSON.stringify(meals));
  };

  const storeAndNavigate = () => {
    mealToStorage();
    navigate('/drinks');
  };
  return (
    <Container>
      <Row>
        <Col sm={8}>
          <Row className="box">
            {meals.map(({ idMeal, strMeal, strMealThumb }) => (
              <Col key={idMeal}>
                <div>
                  <p>{strMeal}</p>
                </div>
                <div>
                  <img src={strMealThumb} alt="Meal thumb" width="500" />
                </div>
              </Col>
            ))}
          </Row>
          <Row className="box">
            <Button
              block="true"
              style={{
                backgroundColor: '#C16757',
                color: '#3d6053',
                borderRadius: '100px',
                borderColor: '#3d6053',
                border: '3px solid',
                width: '300px',
                fontWeight: '600',
              }}
              onClick={() => getMeals()}
            >
              Generate random meal
            </Button>
          </Row>
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
            onClick={storeAndNavigate}
          >
            Next
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Meals;
