import logo from './logo.svg';
import './App.css';
import React, { useState, Component, useContext } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route } from "react-router-dom";
import IntroPage from './components/IntroPage/IntroPage'
import QuestionsPage from "./components/QuestionsPage/QuestionsPage";
import DatePage from "./components/DatePage/DatePage";
import CompletionPage from "./components/CompletionPage/CompletionPage";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PageHeader from './components/PageHeader/PageHeader';
import PageFooter from './components/PageFooter/PageFooter';
import PageCardHolder from './components/PageCardHolder/PageCardHolder';
import AppContext from './components/AppContext/AppContext';

function App() {

  const routeComponents = [
    {index:0, path:"/", name:"IntroPage", component: <IntroPage/>},
    {index:1, path:"/QuestionsPage", name:"QuestionsPage", component: <QuestionsPage/>},
    {index:2, path:"/DatePage", name:"DatePage", component: <DatePage/>},
    {index:3, path:"/CompletionPage", name:"CompletionPage", component: <CompletionPage/>}
  ];

  const currentOptions = ["OptionsA", "OptionsB", "OptionsC", "OptionsD", ];

  const [nameValue, setNameValue] = useState("Name Pending");
  const [optionsValue, setOptionsValue] = useState(new Set());
  const [indexValue, setIndexValue] = useState(0);
  const [monthValue, setMonthValue] = useState(20);
  const [dayValue, setDayValue] = useState(20);
  const [yearValue, setYearValue] = useState(2022);

  const userInformation = {
    index: indexValue,
    currentOptionList: currentOptions,
    indexMax: (routeComponents.length),
    name: nameValue,
    options: optionsValue,
    month: monthValue,
    day: dayValue,
    year: yearValue,
    setNameValue,
    setOptionsValue,
    setIndexValue,
    setMonthValue,
    setDayValue,
    setYearValue
  }

  return (
    <div style={{height:"100%"}}>
      <AppContext.Provider value={userInformation}>
        <Router>
          <Container className='containerHeight' style={{height:"20%", minHeight:"20%"}}>
            <PageHeader components={routeComponents}/>
          </Container>
          <Container className='containerHeight' style={{height:"70%", minHeight:"70%"}}>
            <PageCardHolder components={routeComponents} index={userInformation.index}/>
          </Container>
          <Container style={{height:"10%", minHeight:"10%"}}>
            <PageFooter components={routeComponents} pageCount={userInformation.indexMax} index={userInformation.index}/>
          </Container>
        </Router>
      </AppContext.Provider>

    </div>
  );
}

export default App;