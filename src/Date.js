import React, { useState } from 'react';
import './App.css';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import DatePicker from 'react-datepicker';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';

import IncDecCounter from './IncDecCounter';

function DateAndTime() {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(null);
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate(0, 0, 0, 16, 0) + 1);

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
          <h5>How many people will be attending</h5>
          <IncDecCounter />
        </Col>
      </Row>
      <Row className="rowJustifyCenter">
        <Col lg={10} className="box2">
          <h5>Enter email address to save your order</h5>
          <InputGroup className="mb-3 w-50">
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
              onClick={() => navigate('/summary')}
            >
              Enter
            </Button>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default DateAndTime;
