import React, { useContext, useState, useEffect } from 'react';
import svgLogo from '../../assets/acme-1.svg';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AppContext from '../AppContext/AppContext';
import { Link } from 'react-router-dom'
import { NavItem } from 'react-bootstrap';

const PageHeader = (props) => {
  const myContext = useContext(AppContext);
  const inComponents = props.components;
  const myLogoStyle = { resizeMode: "contain",alignItems: "center",width: '100%'};
  const questionStyle = {borderRadius:"15px", textAlign:"center"};
  const linkStyle = { textDecoration: 'none', color:'#808080',display: 'inline-block'};
  const containCenterImage = {display: "flex",justifyContent: "center", alignItems: "center"}
  let navBarObjectToggle = document.getElementById('navbarContentToggle');
  const setClickedLinkIndex = (index) => {
    myContext.setIndexValue(index);
    toggleNav();
  }

  const toggleNav = () => {
    navBarObjectToggle.click();
  }

  const addSpace = (word) => {
    return word.replace(/([A-Z])/g, ' $1').trim();
  }

  const builtLinkFromComp= (comp) => {
    return (
      <Link to={comp.path} id={comp.name} 
        key = {comp.index} style={linkStyle}>
        {addSpace(comp.name)}
      </Link>
    );
  }

  useEffect(() => {
    navBarObjectToggle = document.getElementById('navbarContentToggle');
  }, []);

  return (
    <Navbar justify expand={false}>
      <Nav bg="light" data-testid="PageHeader" style={{display:"contents"}}>
      <Navbar.Toggle id="navbarContentToggle" style={{ display:"inline-block", width:"25%"}}/>
      <Navbar.Collapse id="navbarContent">
        <Nav className="text-center" defaultActiveKey="/" >
          {(() => {
            let components = [];
            inComponents.map((component, i) => { 
              components.push(
                <NavItem key = {i} onClick={ () => { setClickedLinkIndex(component.index) }}>
                    {builtLinkFromComp(component)}
                </NavItem>
              )
              return true;
            })
            return components;
          })()}
        </Nav>
      </Navbar.Collapse>
      <Nav style={{width:"25%", display:"inline-block", width:"25%"}}>
        <Navbar.Brand>
            <Link to={inComponents[0].path} id={inComponents[0].name} key = {inComponents[0].index}
              onClick={ event =>  setClickedLinkIndex(inComponents[0].index)}
              style={linkStyle} >
                <div style={containCenterImage}><img src={svgLogo} style={myLogoStyle}/></div>
            </Link>
        </Navbar.Brand>
      </Nav>
      <Navbar.Text style={{height:"10%", width:"10%",textAlign:"center", display:"inline-block", width:"25%"}}>
        <div style={questionStyle}>
          <span style={{background:"indigo", color:"white", fontWeight:"bold",borderRadius:"100%", padding:"5%",textAlign:"center"}}>?</span>
        </div>
      </Navbar.Text>
      </Nav>
    </Navbar>
  );
}

export default PageHeader;
