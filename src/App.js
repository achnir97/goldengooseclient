import logo from './logo.svg';
import './App.css';
import SignUp from './signup';
import Header from './header';
import RegistrationForm from './signup';
import Client from './client';
import {Route, BrowserRouter, Routes,useNavigate } from 'react-router-dom';
import Signin from './signin';
import TestContextProvider, { TestContext } from './context';
import { useContext } from 'react';
import ClientHandle from './clienthandler';
import ShowtotalNumberofgoose from './goosecount';

function App() {
 
  const {isLogged,setLoginHandler}=useContext(TestContext)
  
  return (
    <div>
     <Routes>
     <Route path="/" element={<SignUp/>} />
     <Route path="/login" element={<Signin/>}/> 
     <Route path="/Client" element={<ClientHandle/>}/>
     <Route path="/gooseCount" element={<ShowtotalNumberofgoose/>}/>
     </Routes>
     </div>    
  );
}

export default App;
