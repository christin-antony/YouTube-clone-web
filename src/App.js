
import "./App.css";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import React, { useState } from "react";
import Login from "./components/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import Add from "./components/Add"



function App() {
 
  return (
    <div className="App">
    <BrowserRouter> 
      <Routes>
        
                            <Route path='/' element={<Home />} />

                            <Route path='/login' element={<Login />} />
                            <Route path='/add' element={<Add/>} />


    </Routes>
    </BrowserRouter>  
    </div>
  );
}

export default App;
