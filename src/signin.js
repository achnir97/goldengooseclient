import React, { useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate()



const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/signin', {
        withCredentials: true,
        email,
        password
      });
      if (response.status === 200) {
        console.log('You are sucessfully logged in');
        navigate("/client")
        } else {
        // registration failed
        console.error('Error occured in Loginn Process. Try it again.');
      }
    } catch (error) {
       
      console.error(error);
    }
};


  return (
    <form onSubmit={handleSubmit}>
    
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button type="submit">Signin</button>
    </form>
  );
}

export default Signin
