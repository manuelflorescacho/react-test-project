import React, { useContext } from 'react';
import svgLogo from '../../assets/acme-1.svg';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AppContext from '../AppContext/AppContext';
import { Link } from 'react-router-dom'

const PageHeader = (props) => {
  const myContext = useContext(AppContext);
  const inComponents = props.components;
  const myLogoStyle = { resizeMode: "contain",alignItems: "center",width: '100%', height: '100%' };
  const setClickedLinkIndex = (index) => {
    myContext.setIndexValue(index);
  }
  return (
    <Navbar bg="light" expand={false} data-testid="PageHeader">
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="text-center" defaultActiveKey="/">
          {(() => {
            let components = [];
            inComponents.map((component, i) => { 
              components.push(
                <Link 
                  to={component.path} 
                  id={component.name} 
                  key = {i}
                  onClick={ event =>  setClickedLinkIndex(component.index)}
                  style={{ textDecoration: 'none', color:'#808080'}}
                >
                  {component.name.replace(/([A-Z])/g, ' $1').trim()}
                </Link>
              )
              return true;
            })
            return components;
          })()}
        </Nav>
      </Navbar.Collapse>
      <Navbar.Brand>
        <img src={svgLogo} style={myLogoStyle} />
      </Navbar.Brand>
      <Navbar.Text style={{height:"10%", width:"10%"}}>
        <div style={{background:"indigo", color:"white", height:"25%", width:"25%", fontWeight:"bold",borderRadius:"15px", textAlign:"center"}}>
          ?
        </div>
      </Navbar.Text>
    </Navbar>
  );
}

export default PageHeader;
