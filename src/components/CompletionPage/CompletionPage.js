import React, { useContext } from 'react';
import { Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import AppContext from '../AppContext/AppContext';

const CompletionPage = () => {
  const myContext = useContext(AppContext);
  const keyStyle = { fontWeight:"900", fontSize:"100%"}
  const valueStyle = { fontWeight:"600", fontSize:"90%"}

  return (
    <div style={{textAlign: 'center'}} data-testid="CompletionPage">
      <Row>
        <Col>
          <span style={keyStyle}>Name: </span><span style={valueStyle}>{myContext.name}</span></Col>
      </Row>
      <Row>
        <Col>
          <span style={keyStyle}>Date: </span><span style={valueStyle}>{myContext.month} / {myContext.day} / {myContext.year}</span>
        </Col>
      </Row>
      <Row>
        <Col>
          <span style={keyStyle}>Selected:</span>
          <br></br>
          {(() => {
            let opts = []
            myContext.options.forEach(
              key => opts.push(<span key={key} style={valueStyle}> {key.replace(/([A-Z])/g, ' $1').trim()}</span>)
            )
            return opts;
          })()}
        </Col>
      </Row>
    </div>
  );
}

export default CompletionPage;
