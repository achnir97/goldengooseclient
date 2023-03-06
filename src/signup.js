import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TestContext } from './context';

const RegistrationForm=() =>{
 
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  ///const [email, setEmail] = useState('');
  // since the email will be used to  query the information from
// the database to render the information in  the front screen. 

  const {isLogged,setLoginHandler,email, setEmailHandler}=useContext(TestContext)
  const [password, setPassword] = useState('');
  const [numberofGoose, setGoose] = useState('');
  const [date, setDate] = useState('');
  
  const navigate=useNavigate()
  
  const HandleClick=()=>{
    navigate("/login");
    console.log("You have succefully logged out. ")
  }


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
         setLoginHandler(true)
         navigate("/client")
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
      <h1> YOO!!! GOLDENGOOSE FARM LAND </h1>
      <h1>  MAKE YOUR GOOSE LAY GOLLDEN EGGS.!!! </h1>
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
      <br></br>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
      </div>
      <br></br>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmailHandler(event.target.value)}
        />
      </div>
      <br></br>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <br></br>
      <div>
        <label htmlFor="Date">Date of Entry :</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
      </div>
      <br></br>
      <div>
        <label htmlFor="Number">Number of Goose Invested:</label>
        <input
          type="number"
          id="number"
          value={numberofGoose}
          onChange={(event) => setGoose(event.target.value)}
        />
      </div>
  
      <br></br>

      <button type="submit">SignUp</button>
    </form>
    <h1>
      If you have already Sign up: Go to Login page. 
    </h1>
    <button onClick={HandleClick}>Go to login Page</button>
   </div>
   
  );
}

export default RegistrationForm;
