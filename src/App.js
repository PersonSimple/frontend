import React from 'react';
import AngleComponent from './components/AngleComponent';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateAngelComponent from './components/CreateAngelComponent';
import SaveAngelComponent from './components/SaveAngelComponent';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className='container'>
       <div><HeaderComponent /></div>
       <div><BrowserRouter>
          <Routes>
            <Route exact path = '/' element={<SaveAngelComponent/>} /> 
            <Route exact path = '/angel' element={<AngleComponent/>}/> 
            <Route path = "/add-angel" element={<CreateAngelComponent />} />
          </Routes>
      </BrowserRouter>
      </div>
      <div><FooterComponent /></div>
    </div>
  );
  }
  export default App;
