import { useState } from 'react'

import { Route, Routes } from "react-router-dom";
import Currencies from "./Pages/Currencies";
import Main from "./Pages/Main";
import Price from "./Pages/Price";
import './index.css'
import Nav from './Components/Nav';

function App() {
  console.log(import.meta.env.VIte_API_KEY)
  return (
    
    <>
    
     <div className="App">
        <Nav/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/currencies" element={<Currencies/>}/>
        <Route path="/price" element={<Price/>}/>
        <Route path="/price/:symbol" element={<Price/>}/>
      </Routes>
    </div>
    </>
   
  );
}

export default App
