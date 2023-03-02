import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const RegistrationForm=() =>{
 
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [numberofGoose, setGoose] = useState('');
  const [date, setDate] = useState('');
  const [loggedin, setLogged]=useState(false)
  
  
  const navigate = useNavigate();



const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/register', {
        firstName,
        lastName,
        email,
        password,
        date,
        numberofGoose
      });
      if (response.status === 200) {
         setLogged(true)
         loggedin?(navigate("/client")):<p> YOu cannot logged in</p>
        // registration successful
        console.log('Registration successful');
      } else {
        // registration failed
        console.error('Registration failed');
      }
    } catch (error) {
      console.error(error);
    }
};


  return (
    <div>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
      </div>
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
      <div>
        <label htmlFor="Date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="Number">Number of Goose Invested:</label>
        <input
          type="number"
          id="number"
          value={numberofGoose}
          onChange={(event) => setGoose(event.target.value)}
        />
      </div>
  


      <button type="submit">SignUp</button>
    </form>
   </div>
   
  );
}

export default RegistrationForm;
