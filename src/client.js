import React from "react";
import { useState,useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { TestContext } from "./context";
//import { UserContext } from "./context";

const Client=()=>{
      const {isLogged,setLoginHandler,email,
        numberofgooseCount, setGooseCountHandler}=useContext(TestContext)   
      
      const [numberOfGoose, setNumberOfGoose] = useState(0);
      const [number, setNumber]=useState(0)
  
    const navigate=useNavigate()

    const handlelogout=()=>{
            navigate("/") 
            setLoginHandler(false)
   }
   
const showNumberofgoose=()=>{
         (isLogged)?navigate("/gooseCount"):
         <>You cannot see information since you are not logged in. </>
}

   useEffect(() => {
    // Fetch the number of goose for the logged-in user
    axios.get('http://localhost:8080/calculate/'+email, {
      withCredentials: true,
    })
      .then((response) => {
        setNumberOfGoose(response.data.gooseCount);
        setGooseCountHandler(response.data.gooseCount)
      })
      .catch((error) => {
        console.log("The resource could not be found")
        console.log(error);
      });
  },[]);

    return (
    

     <>
     <h1> Welcome to the GOLDENGOOSE FARM.</h1>
        <p> Your Email is:{email}</p>
        <p> Number of Goose: {numberOfGoose}</p>
        <p> Number of Goose: {numberofgooseCount}</p>
        <label>FILPRICE: </label>
        <input
          type="number"
          value={number}
          onChange={(event) => setNumber(event.target.value)}
        />
        <p> Your total value is {number*numberOfGoose}KRW.</p>

        <button onClick={showNumberofgoose}> Click to See your Number of goose  </button>
        <button onClick={handlelogout}>Logout</button> 
        
       </>  
    )
}
export default Client 
