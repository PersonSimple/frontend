import React, { Component } from 'react';
import axios from "axios";
import Loginservice from '../Services/Loginservice'
import PropTypes from 'prop-types';

const ANGEL_POST_URL ='http://localhost:8080/api/loginhelper/login' 

class SuccessComponent extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
            email:'',
            password:'',
            retValue: ' Kailash '
        }
        this.submitForm =this.submitForm.bind(this);
        //this.handleChange=this.handleChange.bind(this);
        this.changeEmail =this.changeEmail.bind(this);
        this.changePassword=this.changePassword.bind(this);
    }
     componentDidMount() {

     }

      changeEmail=(event)=> {
          this.setState ({email: event.target.value});
          this.setState ({retValue: 'kailash'});
      }

      changePassword=(event)=> {
        this.setState ({password:event.target.value});
    }
   
    submitForm= ()=> {
        let angel = {
            email:this.state.email,
            password:this.state.password
        }
        console.log(angel);
       
        axios({
            method: 'post',
            url: ANGEL_POST_URL,
            data: {
                email: angel.email,
                password: angel.password
            }
        }).then(res =>{
            console.log('before retValue '+ res.data);
            this.setState({retValue: res.data})
            console.log('after retValue '+ this.retValue);
          })
          
      }
 
    render() {
       // let {retValue} = this.props;
        return (
            <div className='container'>
                <label htmlFor="staticEmail" className="col-sm-2 col-form-label"> {this.retValue} </label>
                <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-3">
                    <input type="text"  className="form-control" name="email" onChange={this.changeEmail}/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-3">
                    <input type="password" className="form-control" name="password" onChange={this.changePassword}/>
                    </div>
                    
                </div>
                <div className="col-sm-7">
                <button type="button" className ="btn btn-primary  mr-1">Cancel</button>
                <label> &nbsp;</label>
                <button type="button" className ="btn btn-primary  mr-1" name="submit" 
                            onClick={this.submitForm}>Submit</button>
                </div>
            </div>
        );
    }
}

 
export default SuccessComponent;