import React from 'react'
import './Trainer.css'
import twiter from '../Trainerloginpage/twitter.png'
import facebook from '../Trainerloginpage/facebook.png'
import linkdin from '../Trainerloginpage/linkedin.png'
import { Link } from 'react-router-dom'

function Logintr() {
  return (
    <div className='container-fluid rrr1'>
      <div className="container rrr">
        <div className="row bbb">
          <div className="col-5">

<h5 className='moad'>Welcome Back!</h5>
<p className='part123'>To keep connected with us plase <br /> login with your personal info</p>
{/* <button className='design1'>SIGN UP</button> */}
<Link to='/trainer'><button className='design1'>SIGNUP</button></Link>
          </div>







          <div className="col-6">
            <h4 className='font1'>Trainer Login Account</h4>

            <div className="div34 d-flex">

              <img className='size' src={twiter} alt='error' />

              <img className='size' src={facebook} alt='error' />

              <img className='size' src={linkdin} alt='error' />


            </div>

            <p className='parat'> or use your email for registration</p>

            <div className="contex">
              {/* <i class="fa-regular mmm34 fa-user"></i>
              <input className='int' type="text" placeholder='Name' /><br /> */}

              <i class="fa-regular mmm35 fa-envelope"></i>
              <input className='int' type="text" placeholder='Email' /><br />
              <i class="fa-solid mmm36 fa-lock"></i>
              <input className='int' type="text" placeholder='Password' />

            </div>

            <button className='design'>LOGIN</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Logintr