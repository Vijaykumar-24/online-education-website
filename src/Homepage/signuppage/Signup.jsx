


import React, { useState } from 'react';
import '../signuppage/Signup.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import mamy from '../signuppage/mamy.png'
// import { useEffect } from 'react'
// import { useLocation } from 'react-router-dom'

import axios from 'axios'; // Import axios for making HTTP requests

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPwd, setConfirmPwd] = useState('')

  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPwd(e.target.value);
  };


  
//   const handleSubmit1 =  data => {

// console.log(data,"data")    // event.preventDefault();
//     // const formData1 = new FormData();
//     // console.log(formData1,"****");
//     // formData1.append("username", username);
//     // formData1.append("email", email);
//     // formData1.append("password", password);
//     // formData1.append("confirmPassword", confirmPassword);

    
//      axios.post("http://localhost:6001/user/signup", data,
//       {
//         headers: {
//           'Content-Type': 'application/json',
//           "Access-Control-Allow-Origin": "*",
//       }
//       })
//       .then((response) => {
//         console.log(response.data, "Posted data");
//         navigate("")
//       })
//       .catch((data) => {
//         console.log(data.response.data)
//       });

  // const handleSubmit1 = async (e) => {
  //   e.preventDefault();

  //   // Check if passwords match
  //   if (password !== confirmPassword) {
  //     alert('Passwords do not match!');
  //     return;
  //   }

  //   // Send the form data to the backend
  //   try {
  //     const response = await axios.post('http://localhost:6001/user/signup', {
  //       username,
  //       email,
  //       password,
  //       // confirmPassword,
  //     });
      
  //     // Handle success response from the server
  //     console.log('Response from server:', response.data);
  //   } catch (error) {
  //     // Handle error response from the server
  //     console.error('Error occurred:', error.response.data);
  //     alert('Error occurred while signing up');
  //   }
  // };


const handleSubmit1 = (e) => {
  e.preventDefault()

 

    // Email validation
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Username validation: starts with a letter, can contain letters, numbers, underscores, and hyphens
    // const usernameRegex = /^[a-zA-Z][a-zA-Z0-9_-]+$/;

    // if (!usernameRegex.test(name)) {
    //   alert('Username should have at least one capital letter.');
    //   return;
    // }

    if (!/^[A-Z]/.test(name)) {
      alert('Name should start with a capital letter.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[!@#$%^&*])(?=.*\d)(?=.*[A-Z]).{8,}$/;

    if (!emailRegex.test(email)) {
      alert('Invalid email format');
      return;
    }else if(!passwordRegex.test(password)) {
      alert('Password should contain at least one symbol, one number, one capital letter, and be at least 8 characters long.');
      return;
    }else if(password !== confirmPwd) {
      alert('Passwords do not match!');
      return;
    }
    else {
      navigate('/login');

    }


// let data = {};
//   data.name = name;
//   data.email = email;
//   data.password = password;
//   data.confirmPassword = confirmPassword;
//   console.log(data,"data");

  if (password !== confirmPwd) {
        alert('Passwords do not match!');
        return;
      }
  axios.post('http://localhost:6001/user/signup', {
name,
email,
password,
confirmPwd
  },
          // data,
          {
              headers: {
                  'Content-Type': 'application/json',
                  "Access-Control-Allow-Origin": "*",
              }
          }
      )
      .then((response) => {
          console.log(response.data)
          // window.history.back()
          window.location.reload(false);
      })
      // .catch((error) => {
      //   console.log('Error:', error);
      //   alert('Error occurred while signing up. Please try again.');
      // });
      
      .catch((data) => { 
                console.log(data.response.data) 
                alert("Already this email has been registered!",data.response.data)
            });

      // .then((response) => {
      //   console.log(response.data);
      //   alert('Signup successful!');
      //   navigate('/login'); // Navigate to login page
      // })
      // .catch((error) => {
      //   console.error('Error:', error.response.data);
      //   alert('Error occurred while signing up. Please try again.');
      // });
            
    };









        

  return (
    <div className='container-fluid np'>
      <div className="container ddy">
        <div className="row cdd123">
          <div className="col-6">
          
        <form onSubmit={handleSubmit1} className='mm23'>
          <h4 className='center23'>Sign Up</h4>
          <div className='move'>
            <i className="fa-solid tty fa-user"></i>
            <input className='name1' type="text" id="username" value={name} onChange={handleUsernameChange} placeholder='Username' required />
          </div>
          <div className='move'>
            <i className="fa-solid tty1 fa-envelope"></i>
            <input className='name2' type="email" id="email" value={email} onChange={handleEmailChange} placeholder='Email' required />
          </div>
          <div className='move'>
            <i className="fa-solid tty1 fa-lock"></i>
            <input className='name2' type="password" id="password" value={password} onChange={handlePasswordChange} placeholder='Password' required />
          </div>
          <div className='move'>
            <i className="fa-solid tty2 fa-unlock"></i>
            <input className='name3' type="password" id="confirmPassword" value={confirmPwd} onChange={handleConfirmPasswordChange} placeholder='Confirm Password' required />
            <p className='paragraph'>Minimum 8 Characters</p>
          </div>
          <button type="submit" className='curd'>Sign Up</button>
        </form>
        <p className='paragr'>Already have an account? <Link to='/Login'>Login</Link></p>
      </div>
      <div className="col-5">
<img className='mamy' src={mamy} alt='error' />
      </div>
    </div>

    </div>
    
    </div>

  );
};

export default Signup;

