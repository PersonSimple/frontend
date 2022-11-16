import React, { useState,Component } from 'react';
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import PropTypes from 'prop-types';

//const LOGIN_POST_URL ='http://localhost:8080/api/loginhelper/login' 

const SAVE_SIGN_URL ='http://localhost:8080/api/loginhelper/login' 


function SignUpComponent ()  {

    const navigate = useNavigate();

    const [email,setEmail] = useState('');  
    const [password,setPassword] =useState('');
    const [respX,setRespX] =useState('');
   
   const   changeEmail=(event)=> {
    setEmail( event.target.value);
      }

  const  changePassword=(event)=> {
    setPassword(event.target.value);
    }
  
    const  changeConfirmPassword=(event)=> {
        setPassword(event.target.value);
        }
    
  const submitForm= ()=> {
        let angel = {
            email:email,
            password:password
        }
        console.log(angel);
       
     axios({
            method: 'post',
            url: SAVE_SIGN_URL,
            data: {
                    email: angel.email,
                    password: angel.password
                    }
        }).then(res =>{
            console.log(" in "+res.data);
            setRespX(res.data);
          })
          console.log( " out result "+respX);
      }
       
        return (
            <div className='container'>
                <label htmlFor="staticEmail" id="idx" name="idx" className="col-sm-2 col-form-label"> {respX} </label>
                <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-3">
                    <input type="text"  className="form-control" name="email" value={email} onChange={changeEmail}/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-3">
                    <input type="password" className="form-control" name="password" value={password} onChange={changePassword}/>
                    </div>
                   
                </div>

                <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Confirm Password</label>
                    <div className="col-sm-3">
                    <input type="password" className="form-control" name="password" value={password} onChange={changeConfirmPassword}/>
                    </div>
                   
                </div>
                <div className="col-sm-7">
                <button type="button" className ="btn btn-primary  mr-1 mx-2" onClick={()=>navigate(-1)}>Cancel </button>
                
                <button type="button" className ="btn btn-primary  mr-1" name="submit" 
                            onClick={submitForm}>Submit</button>
                </div>
            </div>
        );
  }
export default SignUpComponent;