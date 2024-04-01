import React from 'react'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Home.css'
import lower from '../Homepage/Frame 188.png'
// import logo from '../Asset/Layer 2.png'
// import ContainerFluidExample from '../Sample';


function ContainerExample() {
  return (
<div className='container-fluid body'>
  {/* <div className="container"> */}
        <Container>
      <Row className='row bby'>
        <Col xxl={7} className='colu'>
          <h1 className='heading'>Kevell’s online platform
will be accessible,<br /><span>when you want it.</span>
          </h1>


            <p className='para45' style={{color:'black'}}>A Best Platform to Get Trained from the Market Experts and Shine in the IT Industry<br /> IT Services and  IT Consulting.</p>
            {/* <i class="fa-solid fa-magnifying-glass "></i> */}
            {/* <input className='search' type='search' /> */}
            <Link  to='/register'><button className='sear'>Get Start</button></Link>  
            <img className='momo' src={lower} alt='' />

        </Col>
        <Col xxl={4}>
        {/* /* <img className='img23' src={logo} alt="" /> */}
        </Col>
      </Row>
    </Container>
    </div>
    // {/* </div> */}

  );
}



export default ContainerExample;




