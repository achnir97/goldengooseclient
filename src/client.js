import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";

function Client(){
    const [value, setValue] = useState('');
    const [numberOfGoose, setNumberOfGoose] = useState(0);
   
  useEffect(() => {
    // Fetch the number of goose for the logged-in user
    const id="5"
    axios.get('http://localhost:8080/calculate/'+id, {
      withCredentials: true,
    })
      .then((response) => {
        setNumberOfGoose(response.data.gooseCount);
      })
      .catch((error) => {
        console.log("The resource could not be found")
        console.log(error);
      });
  },[]);
    return (
     <>
         <p>
        Number of goose: {numberOfGoose}</p>
       </>   
    )
}
export default Client 
