import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Courceabout/Cource.css';
// import side from '../Courceabout/MERN-stack.png'
import card1 from '../Courceabout/card 1.png'
import card2 from '../Courceabout/card 6.png'

import card3 from '../Courceabout/card 4.png'
import card4 from '../Courceabout/card 7.png'
import card5 from '../Courceabout/card 8.png'
import card6 from '../Courceabout/card 9.png'


function Cource() {
  return (
    <Container className='main25'>
       <h1 className='heading1'>Popular Courses</h1>
    <Row className='row ccd'>
        <Col xxl={3} className='colu1'>
           <img src={card1} alt="" />
       
          </Col>
          <Col xxl={3} className='colu1'>
          <img src={card2} alt="" />
       
          </Col>
          <Col xxl={3} className='colu1'>
          <img src={card3} alt="" />
       
          </Col>
    </Row>
    <Row className='row ccd'>
        <Col xxl={3} className='colu1'>
           <img src={card4} alt="" />
       
          </Col>
          <Col xxl={3} className='colu1'>
          <img src={card5} alt="" />
       
          </Col>
          <Col xxl={3} className='colu1'>
          <img src={card6} alt="" />
       
          </Col>
    </Row>

</Container>

  )
}

export default Cource