import React, { Component } from 'react';
import {history} from 'react-router-dom'
import axios from "axios";
import Loginservice from '../Services/Loginservice'
import PropTypes from 'prop-types';

const ANGEL_LIST_URL ='http://localhost:8080/api/angelUser/getAllAngelUser' 

//let history = useHistory();
class ListAngelComponent extends React.Component {

    constructor(props) {
        super(props)
      
        this.state = {
            ahId:'',
            angel: []
        }
        this.submitForm =this.submitForm.bind(this);
        this.detailAngel =this.detailAngel.bind(this);
        this.updateAngel =this.updateAngel.bind(this);
    }
    componentDidMount(){
            Loginservice.getAngleListProfile().then(  (response) => {
                this.setState ({angel:response.data});
            });
     }
     
     detailAngel=()=>{
        Loginservice.openNewPage().then (res=> {
 
        });
     }
     updateAngel=(event)=>{
       // this.setState({ahId:event.target.value})
       // this.props.history.push();
     }
      

     submitForm =()=> {
      }
 
    render() {
       
        return (
            <div>
                <h1 className='text-center'> Angle List </h1>
                <table className ='table table-sptriped'>
                 <thead>
                    <tr>
                        <td> Angle Id</td>  
                        <td> Email</td>
                        <td> Name</td>
                        <td> Mobile No</td>
                        <td colSpan={3}> Operation</td>

                    </tr>
                 </thead>
                 <tbody>
                    {
                        this.state.angel.map(
                            angel =>
                            <tr key={angel.ahId}>
                                <td>{angel.ahId}</td>
                                <td>{angel.ahEmail}</td>
                                <td>{angel.ahName}</td>
                                <td>{angel.ahContactNumber}</td>
                                <td>
                                    <button type="button"  className="btn btn-primary" onClick={this.deleteAngel}>
                                        DEL
                                    </button>
                                </td>
                                <td>
                                    <button type="button" className="btn btn-primary" onClick={this.updateAngel(angel.ahId)}>
                                        Update
                                    </button>
                                </td>
                                <td>
                                    <button type="button" className="btn btn-primary" onClick={this.detailAngel}>
                                        Read
                                    </button>
                                </td>
                            </tr>
                        )
                    }
                 </tbody>
                </table>
            </div>
        );
    }
}

 


export default ListAngelComponent;