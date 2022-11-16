import React, { useState, Component } from 'react';
import {useNavigate} from 'react-router-dom'
import bearImg from './bear.jpg'

import PropTypes from 'prop-types';


export default function  AboutUsComponent () {

    const navigate = useNavigate();
  
    const [width,setWidth] =useState('width:18rem');
   
                return (
                    <div className="card"  >
                        <img src={bearImg} width={200} height={400} className="card-img-top" alt="bear"/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button type="button" className ="btn btn-primary  mr-1 mx-2" 
                                onClick={()=>navigate(-1)}>Cancel
                            </button>
                        </div>
                    </div>
                );
       
}