
import './App.css';
import React, { Component }  from 'react';
import { useHistory } from "react-router-dom";
import AngelComponent from './components/AngelComponent';
import LoginComponent from './components/LoginComponent';
import NavBarComponent from './components/NavBarComponent';
import ListAngelComponent from './components/ListAngelComponent';
import FooterComponent from './components/FooterComponent';
import {BrowserRouter, Route, Routes} from "react-router-dom";  
import SuccessPage from './components/SuccessPage';
import AboutUsComponent from './components/AboutUsComponent';
import SignUpComponent from './components/SignUpComponent';
import EditAngelComponent from './components/EditAngelComponent';

function App() {
  //let history = useHistory();

  function handleClick() {
    //history.push("/home");
  }

  return (
    <div className="App">
       <NavBarComponent />
       <BrowserRouter>
              <Routes>
                <Route exact path = '/' element={<LoginComponent    />} /> 
                <Route  path = '/add-angel' element={<AngelComponent message='welcome' />}/> 
                <Route  path = '/loginSubmit' element={<SuccessPage />}/> 
                <Route  path = '/aboutUs' element ={<AboutUsComponent />} />
                <Route  path = '/sign-up' element ={<SignUpComponent />} />
                <Route  path = '/list-profile' element ={<ListAngelComponent />} />
                <Route  path = '/pro-id' element ={<EditAngelComponent />} />
                
              </Routes>
       </BrowserRouter>
    <FooterComponent />
    </div>
      );
}
export default App;
