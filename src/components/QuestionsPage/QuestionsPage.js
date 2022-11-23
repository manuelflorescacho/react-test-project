import React, { useContext } from 'react';
import { FormCheck } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import AppContext from '../AppContext/AppContext';

const QuestionsPage = () => {
  const myContext = useContext(AppContext);
  const optionsSelectionList = myContext.options;
  const mapList= new Map();
  const checkSelected = (event) => {
    if (optionsSelectionList.has(event.target.id)) {
      optionsSelectionList.delete(event.target.id);
    } else {
      optionsSelectionList.add(event.target.id)
    }
    myContext.setOptionsValue(optionsSelectionList);
  }
  myContext.currentOptionList.forEach(
    key => { 
      mapList.set(key, optionsSelectionList.has(key));
    }
  )
  return (
    <Form style={{textAlign:"center", left:0}} data-testid="QuestionsPage">
      {(() => {
        let chks = [];
        mapList.forEach((value, key) => {
          chks.push(
            <FormCheck  key={key} id={key} onChange={checkSelected} defaultChecked={value}>
              <FormCheck.Label>{key.replace(/([A-Z])/g, ' $1').trim()}
                <FormCheck.Input type="checkbox" />
              </FormCheck.Label>
            </FormCheck >
            // <Form.Check 
            //   type="checkbox" key={key} id={key}
            //   label={key.replace(/([A-Z])/g, ' $1').trim()}
            //   onChange={checkSelected} defaultChecked={value}
            //   style={{float:"none"}}
            // />
          )
        })
        return chks;
      })()}
    </Form>
  );
}

export default QuestionsPage;
