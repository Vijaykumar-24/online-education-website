import React from 'react'
// import Head from './Asset/Group 512839.png'
import logo from './logo23.png'


// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import {Link} from 'react-router-dom';
// import Home from './Homepage/Home'
// import { Route } from 'react-router-dom';
// import Home from './Homepage/Home'
import './Sample.css';
import { Link } from 'react-router-dom';

function ContainerFluidExample() {
  return (

    <>
   <div className='Container fluid Main2' >
    <div className="container">
    <div className="row  main">
      <div className="col d-flex mm">
        <img className='pic' src={logo} alt="" /><h4>Kevell Guru</h4>
      </div>
      <div className="col">

      <ul className="nav">
    <li className="nav-item">
    <Link className='link' to='/home' >Home</Link>
    <Link className='link' to='/cource' >Course</Link>
    <Link className='link' to='/about' >About</Link>
    <Link className='link' to='/contact' >Contact</Link>
    



    </li>
    </ul>
  
  
      </div>

      <div className="col colm">
     


    {/* <Link className='btn' to='/register' >Register</Link> */}

        {/* <button className='btn'>Register Now</button> */}
        <Link to='/signup' className='btn'>User Login</Link>  

<Link className='btn' to='/trainer'>Trainer Login</Link>

      <Link to='/admin' className='btn'>Admin</Link>  

      {/* <Link className='btn34' to='*' ><i class="fa-solid fa-arrow-right-from-bracket"></i></Link> */}
      </div>
    </div>
    </div>





   </div>

   
  
   
    </>
   

  );
}

export default ContainerFluidExample;
