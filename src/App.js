import logo from './logo.svg';
import './App.css';
import Login from './component/login/Login';
import Signup from './component/signup/Signup';
import { useRef, useState, useEffect } from "react";

import Food from './component/food/Food';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Addtocart from './component/addtocart/Addtocart';
import Test from './component/test/Test';
function App() {
  
  return (
      <div >
      {/* <Login/> */}
     {/* <Test/> */}
      {/* <Food/> */}
{/* <Addtocart/> */}
{/* <Test/> */}
    <Router>
      <Routes>
       <Route path="/" element={<Signup/>} />
       <Route path="/login" element={<Login/>} />
       <Route path="/home" element={<Food/>} />
       <Route path="/addtocart" element={<Addtocart/>} />
      </Routes>
    </Router>
     </div>
  );
}

export default App;
