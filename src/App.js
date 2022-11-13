
import './App.css';

import AngelComponent from './components/AngelComponent';
import LoginComponent from './components/LoginComponent';
import NavBarComponent from './components/NavBarComponent';
import ListProfileComponent from './components/ListProfileComponent';
import FooterComponent from './components/FooterComponent';
import {BrowserRouter, Route, Routes} from "react-router-dom";  
import SuccessPage from './components/SuccessPage';
import AboutUsComponent from './components/AboutUsComponent';

function App() {
  return (
    <div className="App">
       <NavBarComponent />

       <BrowserRouter>
              <Routes>
                <Route exact path = '/' element={<LoginComponent   />} /> 
                <Route  path = '/add-angel' element={<AngelComponent message='welcome'/>}/> 
                <Route  path = '/loginSubmit' element={<SuccessPage/>}/> 
                <Route  path = '/aboutUs' element ={<AboutUsComponent/>} />
                <Route  path = '/list-profile' element ={<ListProfileComponent/>} />
              </Routes>
       </BrowserRouter>
       
    <FooterComponent />
    </div>
      );
}
export default App;
