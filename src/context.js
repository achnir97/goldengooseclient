import React, {useState,  createContext} from "react"

export const TestContext=createContext({
    
    isLogged:false,
    setLoginHandler:(isLogged)=>{},
    
    email:null,
    setEmailHandler:(email)=>{}, 
    
    numberofgooseCount:0,
    setGooseCountHandler:(numberofgooseCount)=>{},
})
const TestContextProvider=({
    children
})=>{
    // we set the email to be the global variable so that it can be used to track the 
// information of that particular user who uses their email to login . 
// so that we will send the email to the  endpoints url 
   
    const [isLogged, setLoggedIn]=useState();
   
    const [email, setEmail]=useState();

    const [numberofgooseCount,setGooseCount]=useState();
    
    const setLoginHandler=(isLogged)=>setLoggedIn(isLogged);
    
    const setEmailHandler=(email)=>setEmail(email);
    
    const setGooseCountHandler=(numberofgooseCount)=>setGooseCount(numberofgooseCount);

    return (
    <TestContext.Provider value={{isLogged,setLoginHandler,email,setEmailHandler,
    numberofgooseCount, setGooseCountHandler }}>
        {children}
    </TestContext.Provider>
);
};
export default TestContextProvider