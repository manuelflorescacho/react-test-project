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
  const hrStyle = { alignSelf: "center", background: "black",width: "90%", height: "1px"}
  const profileContainerStyle = {width: "45%", padding: "10px", textAlign: "center"}
  const myLogoStyle = { resizeMode: "contain",alignItems: "center",width: '100%', height: '100%' };
  const selectorContainerStyle={display: "flex", alignItems: "center", paddingLeft:"0px", paddingRight:"0px"};
  const inComponents = props.components;
  const buttonStyles = {color:'#B8B8B8', background:"#778899", border:"none", borderRadius:"50%"}
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
    <Card className="border-0" data-testid="PageCardHolder">
      <Card.Body>
        <Row style={{marginRight:"0px",marginLeft:"0px"}}>
          <Col xs={1} style={selectorContainerStyle}>{leftSelector()}</Col>
          <Col>
            <Row >
              <Col xs={4} style={{width:"100%"}}>
                <div style={{display:"flex"}}>
                  <hr style={hrStyle} />
                    <div style={profileContainerStyle}>
                      <div>
                        <img src={svgProfile} style={myLogoStyle} />
                      </div>
                    </div>
                  <hr style={hrStyle} />
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs={1} style={selectorContainerStyle}>{rightSelector()}</Col>
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