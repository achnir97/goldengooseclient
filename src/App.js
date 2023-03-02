import logo from './logo.svg';
import './App.css';
import SignUp from './signup';
import Header from './header';
import RegistrationForm from './signup';
import Client from './client';
import {Route, BrowserRouter, Routes,useNavigate } from 'react-router-dom';
import Signin from './signin';

function App() {
  const navigate=useNavigate()
  
  const HandleClick=()=>{
    navigate("/login");
  }
  return (
    <div>
     
     <Routes>
     <Route path="/" element={<SignUp/>} />
     <Route path="/login" element={<Signin/>}/> 
     <Route path="/Client" element={<Client/>}/> 
     </Routes>
     <button onClick={HandleClick}>Go to login Page</button>
     </div>
  );
}

export default App;

