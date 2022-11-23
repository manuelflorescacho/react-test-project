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
  const questionStyle = {borderRadius:"15px", textAlign:"center", width:"5%"};
  const questionMarkStyle={background:"#000080", color:"white", fontWeight:"bold",borderRadius:"100%", padding:"20%",textAlign:"center"}
  const linkStyle = { textDecoration: 'none', color:'#808080',display: 'inline-block'};
  const containCenterImage = {display: "flex",justifyContent: "center", alignItems: "center"}
  const navBarTextStyle = {height:"100%", width:"10%",textAlign:"right", display:"contents", width:"15%"}
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
    <Navbar justify expand={false} style={{height:"100%"}}>
      <Nav bg="light" data-testid="PageHeader" style={{display:"contents"}}>
      <Navbar.Toggle id="navbarContentToggle" style={{ display:"inline-block"}}/>
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
      <Nav style={{width:"30%", display:"inline-block"}}>
        <Navbar.Brand>
            <Link to={inComponents[0].path} id={inComponents[0].name} key = {inComponents[0].index}
              onClick={ event =>  setClickedLinkIndex(inComponents[0].index)}
              style={linkStyle} >
                <div style={containCenterImage}><img src={svgLogo} style={myLogoStyle}/></div>
            </Link>
        </Navbar.Brand>
      </Nav>
      <Navbar.Text style={navBarTextStyle}>
        <div style={questionStyle}>
          <span style={questionMarkStyle}>?</span>
        </div>
      </Navbar.Text>
      </Nav>
    </Navbar>
  );
}

export default PageHeader;
