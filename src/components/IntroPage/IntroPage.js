import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import AppContext from '../AppContext/AppContext';

const IntroPage = () => {
  const myContext = useContext(AppContext);
  const updateGlobalText= (event) => {
    myContext.setNameValue(event.target.value);
  }

  return (
    <Form data-testid="IntroPage">
      <Form.Group className="mb-3" style={{textAlign:"center"}}>
        <h3><Form.Label>What is your name?</Form.Label></h3>
        <Form.Control 
          type="name" data-testid="NameInput"
          placeholder={myContext.name} onChange={updateGlobalText}/>
      </Form.Group>
    </Form>
  );
}
export default IntroPage;
