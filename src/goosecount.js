import {useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { TestContext } from './context'

const ShowtotalNumberofgoose=()=>{

    const {isLogged, setLoginHandler, numberofgooseCount, setGooseCountHandler}=useContext(TestContext)
    const navigate= useNavigate()

    const gobacktoMainpage=()=>{
      navigate("/client")
      
    }
    const gotologinPage=()=>{
      navigate("/login")
    }
    return (
      (isLogged)?
       <>
         <h1>
        Welcome to Your GOLDENGOOSE farm. 
         </h1>
         <p>Total Number of Goose You owned :{numberofgooseCount} </p>
         <button onClick={gobacktoMainpage}>
          Go back to Main Page
         </button>
       </>:
       <>
       <h1>You are not logged in to have access to your information.</h1>
       <br></br>
       <div>
       <button onClick={gotologinPage}>Go to Login Page</button> </div>
      
       </>
    );
}
export default ShowtotalNumberofgoose;