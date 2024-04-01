

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Head2.css';


const Head2 = () => {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');
  const [gender, setGender] = useState('');
  const [agree, setAgree] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const navigate = useNavigate();

  function handleUsername(e) {
    setUser(e.target.value);
  }

  function handlePassword(e) {
    setPass(e.target.value);
  }

  function handleGenderChange(e) {
    setGender(e.target.value);
  }

  function handleAgreeChange(e) {
    setAgree(e.target.checked);
  }

  function handleOptionChange(e) {
    setSelectedOption(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (user.length === 0 || pass.length === 0 || gender.length === 0 || selectedOption.length === 0) {
      setError('Please fill in all fields');
    } else if (!agree) {
      setError('Please agree to the terms');
    } else {
      navigate('/Sample');
      localStorage.setItem('Username', user);
      localStorage.setItem('Password', pass);
      localStorage.setItem('Gender', gender);
      localStorage.setItem('option',selectedOption );

      setUser('');
      setPass('');
      setGender('');
      setSelectedOption('');
      setAgree(false);
      setError('');
    }
  }

  return (
    <div className="container-fluid">
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Register Now</h2><br />
        <label>Username:</label><br />
        <input type='text' value={user} onChange={handleUsername} /><br />
        <label>Password:</label><br />
        <input type='password' value={pass} onChange={handlePassword} /><br />
        <label>Gender:</label><br /><br />
        <input type="radio" name="gender" value="male" checked={gender === 'male'} onChange={handleGenderChange} /> Male
        <input type="radio" name="gender" value="female" checked={gender === 'female'} onChange={handleGenderChange} /> Female<br /><br />
        <label>Agree to terms:</label>
        <input type="checkbox" checked={agree} onChange={handleAgreeChange} /><br /><br />
        <label>Select an option:</label><br />
        <select value={selectedOption} onChange={handleOptionChange}>
          <option value="">--Please choose an option--</option>
          <option value="mail">Mail</option>
          <option value="number">Number</option>
        </select><br />
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button type='submit'>Submit</button>
     
        </form>
  </div>
  </div>
  );
};

export default Head2;
