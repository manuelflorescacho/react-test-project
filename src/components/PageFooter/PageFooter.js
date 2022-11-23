import React from 'react';
import styles from './PageFooter.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pagination from 'react-bootstrap/Pagination';

const PageFooter = (props) => {
  return (
    <Row data-testid="PageFooter">
        <Col>
          <div>
            <Pagination className={styles.PageFooter} >
              {(() => {
                let items = [];
                for (let i = 0; i < props.pageCount; i++) {
                  if (i === props.index) {
                    items.push(<Pagination.Item key={i}> <h1 style={{fontWeight:900,color:"black"}}>.</h1></Pagination.Item>);
                  } else {
                    items.push(<Pagination.Item key={i} disabled ><h1>.</h1></Pagination.Item>);
                  }
                }
                return items;
              })()}
            </Pagination>
          </div>
        </Col>
    </Row>
        
  );
}

export default PageFooter;
