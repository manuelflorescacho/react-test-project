import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AppContext from '../AppContext/AppContext';

const DatePage = () => {
  const myContext = useContext(AppContext);
  const updateGlobalMonth= (event) => {
    myContext.setMonthValue(event.target.value);
  }
  const updateGlobalDay= (event) => {
    myContext.setDayValue(event.target.value);
  }
  const updateGlobalYear= (event) => {
    myContext.setYearValue(event.target.value);
  }
  return (
    <Form data-testid="DatePage">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Row style={{textAlign:"center"}}>
          <Col><Form.Label>Month</Form.Label></Col>
          <Col><Form.Label>Day</Form.Label></Col>
          <Col><Form.Label>Year</Form.Label></Col>
        </Row>
        <Row>
          <Col><Form.Control type="text" placeholder={myContext.month} onChange={updateGlobalMonth} /></Col>
          <Col><Form.Control type="text" placeholder={myContext.day} onChange={updateGlobalDay} /></Col>
          <Col><Form.Control type="text" placeholder={myContext.year} onChange={updateGlobalYear} /></Col>
        </Row>
      </Form.Group>
    </Form>
  );
}

export default DatePage;