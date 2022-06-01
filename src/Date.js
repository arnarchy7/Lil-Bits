import React, { useState } from 'react';
import './App.css';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import IncDecCounter from './components/IncDecCounter';
import EmailComponent from './components/EmailComponent';

function DateAndTime() {
  const navigate = useNavigate();

  const [startDate, setStartDate] = useState(null);
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate(0, 0, 0, 16, 0) + 1);

  const storeDateNavigate = () => {
    sessionStorage.setItem('date', JSON.stringify(startDate));
    const foo = sessionStorage.getItem('email');

    if (startDate !== null && foo !== null) {
      navigate('/summary');
    } else {
      // eslint-disable-next-line no-alert
      alert('Please pick a time and save your email');
    }
  };

  return (
    <Container>
      <Row className="rowJustifyEvenly">
        <Col lg={5} className="box2">
          <h5>Pick a date and time</h5>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            minDate={tomorrow}
            dateFormat="dd/MM/yyyy HH:mm"
            timeFormat="HH:mm"
            filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
            showTimeSelect
            minTime={new Date(0, 0, 0, 16, 0)}
            maxTime={new Date(0, 0, 0, 23, 0)}
          />
        </Col>
        <Col lg={5} className="box2">
          <h5>How many people</h5>
          <IncDecCounter />
        </Col>
      </Row>
      <Row className="rowJustifyCenter">
        <Col lg={10} className="box2">
          <EmailComponent />
          <br />
          <Button
            block="true"
            style={{
              backgroundColor: '#C16757',
              color: '#3d6053',
              borderRadius: '10px',
              borderColor: '#3d6053',
              border: '3px solid',
              width: '100px',
              fontWeight: '600',
            }}
            id="button-addon2"
            onClick={storeDateNavigate}
          >
            Proceed
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default DateAndTime;
