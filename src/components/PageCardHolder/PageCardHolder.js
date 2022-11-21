import React, { useContext, useEffect } from 'react'
import svgProfile from '../../assets/profile.svg';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AppContext from '../AppContext/AppContext';
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const PageCardHolder = (props) => {
  const myContext = useContext(AppContext);
  let navigate = useNavigate();
  const imageContainer = {
    display: "flex",
    border:"solid",
    width: '100%', height: '100%',
    flexDirection: "vertical",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  }
  const myLogoStyle = { resizeMode: "contain",alignItems: "center",width: '100%', height: '100%' };
  const inComponents = props.components;
  const buttonStyles = {
    height: '100%',
    width:'100%',
    color:'#B8B8B8',
    background:"#F8F8F8",
    border:"none"
  }
  function navigateToRoute () {
    navigate(inComponents[myContext.index].path);
  }
  function nextIndex() {
    if (myContext.index < (myContext.indexMax-1)) {
      myContext.setIndexValue(++myContext.index);
      navigateToRoute();
    }
  }

  function prevIndex() {
    if (myContext.index > 0) {
      myContext.setIndexValue(--myContext.index);
      navigateToRoute();
    }
  }

  useEffect(() => {
    navigateToRoute();
  }, []);

  function leftSelector() {
    if(myContext.index === 0) return <span></span>;
    return (
      <Button onClick={prevIndex} style={buttonStyles}>{'<'}</Button>
    )
  }
  function rightSelector() {
    if(myContext.index === (inComponents.length - 1)) return <span></span>;
    return (
      <Button onClick={nextIndex} style={buttonStyles}>{'>'}</Button>
    )
  }

  return (
    <Card className="border-0">
      <Card.Body>
        <Row>
          <Col xs={1}>{leftSelector()}</Col>
          <Col>
            <Row style={{justifyContent: 'center'}}>
              <Col xs={4} style={{justifyContent: 'center'}}>
                <img src={svgProfile} style={myLogoStyle} />
              </Col>
            </Row>
          </Col>
          <Col xs={1}>{rightSelector()}</Col>
        </Row>
        <Row style={{justifyContent: 'center'}}>
          <Col xs={4}>
            <Routes>
              {(() => {
                let routes = []
                for(var i=0; i < inComponents.length; i++) {
                  routes.push(
                    <Route
                      key={inComponents[i].index}
                      path={inComponents[i].path} 
                      element= {inComponents[i].component} 
                    />
                  )
                }
                return routes;
              })()}
            </Routes>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default PageCardHolder;