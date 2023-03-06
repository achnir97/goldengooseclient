import React from "react";
import { useState,useEffect, useContext } from "react";
import { TestContext } from "./context";
import Client from "./client";
import Signin from "./signin";

const ClientHandle=()=>{
   
    const {isLogged, setLoginHandler}=useContext(TestContext)
    return (
    
        (isLogged)? <Client/>: 
        <div> 
            <Signin/>
        </div>
        
        


    

    )
}
export default ClientHandle