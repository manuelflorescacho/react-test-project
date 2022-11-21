import React, { useContext } from 'react';
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
    <Form style={{textAlign:"left", left:0}} >
      {(() => {
        let chks = [];
        mapList.forEach((value, key) => {
          chks.push(
            <Form.Check 
              type="checkbox"
              key={key}
              id={key}
              label={key.replace(/([A-Z])/g, ' $1').trim()}
              onChange={checkSelected}
              defaultChecked={value}
            />
          )
        })
        return chks;
      })()}
    </Form>
  );
}

export default QuestionsPage;
