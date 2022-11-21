import React, { useContext } from 'react';
import { Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import AppContext from '../AppContext/AppContext';

const CompletionPage = () => {
  const myContext = useContext(AppContext);
  return (
    <div style={{textAlign: 'center'}} data-testid="CompletionPage">
      <Row>
        <Col>
          <h2>Name:</h2>
          <h3>{myContext.name}</h3></Col>
      </Row>
      <Row>
        <Col>
          <h2>Date:</h2>
          <h3>{myContext.month} / {myContext.day} / {myContext.year}</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Selected:</h2>
          {(() => {
            let opts = []
            myContext.options.forEach(
              key => opts.push(<h3 key={key}> {key.replace(/([A-Z])/g, ' $1').trim()}</h3>)
            )
            return opts;
          })()}
        </Col>
      </Row>
    </div>
  );
}

export default CompletionPage;
