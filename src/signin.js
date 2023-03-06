import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TestContext } from './context';

const Signin=()=> {
  
  const {email, setEmailHandler} = useContext(TestContext)
  const [password, setPassword] = useState('');
  const [Numbergoose, setNumberOfGoose]=useState(0)
  const {isLogged, setLoginHandler}=useContext(TestContext)

  
const navigate=useNavigate()
  

const fetchingdata = async(event)=>{
   event.preventDefault();
   try {
    const response=await axios.get(`http://localhost:8080/calculate/{email}`,{
        withCredentials:true
    });
    if (response.status===200){
        setNumberOfGoose(response.data.Numbergoose)
  
    }
   } catch (error) {
        console.log("You could'not set the id", error)
   }
}

const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/signin', {
        withCredentials: true,
        email,
        password
      });
      if (response.status === 200) {
        setLoginHandler(true)
        navigate("/client")
        console.log('You are sucessfully logged in');

        
        
        } else {
        // registration failed
        console.error('Error occured in Loginn Process. Try it again.');
      }
    } catch (error) {
       
      console.error(error);
    }
};



  return (
    <>
      <h1> YOO!!! GOLDENGOOSE FARM LAND </h1>
      <h1>  MAKE YOUR GOOSE LAY GOLLDEN EGGS.!!! </h1>
    <form onSubmit={handleSubmit}>
    
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
      <button type="submit">SignIn</button>
    </form>
   
    </>
  );
}

export default Signin
