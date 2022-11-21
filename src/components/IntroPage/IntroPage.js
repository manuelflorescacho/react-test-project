import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import AppContext from '../AppContext/AppContext';

const IntroPage = () => {
  const myContext = useContext(AppContext);
  const updateGlobalText= (event) => {
    myContext.setNameValue(event.target.value);
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <h3><Form.Label>What is your name?</Form.Label></h3>
        <Form.Control type="name" placeholder={myContext.name} onChange={updateGlobalText}/>
      </Form.Group>
    </Form>
  );
}
export default IntroPage;
