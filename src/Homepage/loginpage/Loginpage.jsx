import React, { useState } from 'react';
import '../signuppage/Signup.css'
import { Link , useNavigate  } from 'react-router-dom';
// import {  } from 'react-router-dom';
import axios from 'axios';
import mamy from '../signuppage/mamy.png'

const Loginpage = () => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  // const history = useHistory(); 
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  const handleemailChange = (e) => {
    setemail(e.target.value);
  };

  const handlePassChange = (e) => {
    setPassword(e.target.value);
  };
  const handleerrorChange = (e) => {
    setErrorMessage(e.target.value);
  };


 

  const handleLogin = (e) => {
    e.preventDefault();

    
    // if(!email || !password) {
    //   alert('enter crt mail password')
    // }else{
    //   navigator("/")
    // }

    axios.post('http://localhost:6001/user/signin', {
      email,
      password
    })
    
    .then((response) => {
      console.log(response);

      if (response.data.msg === "User Loggedin Successfully!") {
        // window.history.back()
        alert( 'Login Sucessfully..')
        navigate('*');
        window.location.reload(true);
    }
      // Redirect to next page after successful login
      // Navigate('/admin');
      // history.push('/admin');
    })
    .catch((error) => {
      console.error('Error:', error);
      setErrorMessage('Invalid email or password');
    });

    

    
  };

  return (
    <div className='container-fluid np1'>

        <div className="container ddy1">
          <div className="row  cdd123">
            <div className="col-6">
           
      
      <form onSubmit={handleLogin} className='mm2345'>

      <h4 className='center234'> User Login</h4>
        <div className='move'>


        <i class="fa-solid tty1 fa-envelope"></i>
          <input className='name1' type="email" id="email" value={email} onChange={handleemailChange} placeholder='Email' />
          {/* You can add an icon symbol input here */}
        </div>
        <div className='move'>
        <i class="fa-solid tty1 fa-lock"></i>
          <input  className='name2' type="password" id="password" value={password} onChange={handlePassChange} placeholder='Password' />
          {errorMessage && <div style={{ color: 'red' }} value={errorMessage} onChange={handleerrorChange}>{errorMessage}</div>}
        </div>
        
        <button type="submit" className='curd1'>Login</button>
      </form>
      <p className='paragr1'>Don't have an account Register Here?</p>
      <Link to='/signup'><a className='anch1' href="">Signup</a></Link>
      </div>
      <div className="col-5">
      <img className='mamy1' src={mamy} alt='error' />
      </div>
     
      </div>
    </div>
    </div>
  );
};

export default Loginpage;
