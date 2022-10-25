
import React from 'react';
import { useNavigate } from 'react-router-dom';
import AngleService from '../services/AngleService';

class SaveAngelComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
        email :'',
        password:''
  }

  this.changeEmailHandler=this.changeEmailHandler.bind(this);
  this.changePasswordHandler=this.changePasswordHandler.bind(this);
  this.saveAngelUser =this.saveAngelUser.bind(this);
  }

  saveAngelUser=(e)=>{
    e.preventDefault();
    let angel ={password:this.state.password,email:this.state.email};
    console.log("angel" +JSON.stringify(angel));
    AngleService.saveAngelInfo(angel);
     
   }

   changePasswordHandler=(event)=>{
    this.setState({password:event.target.value});

  }
  changeEmailHandler=(event)=>{
    this.setState({email:event.target.value});
}

render() {
        return (
            <div> 
            <table>
            <caption>ANgel Component Entry </caption>
            <thead align="center">
            <tr><th>Login Page</th></tr>
            </thead>
            <tbody>
            <tr><td>Login/Email :</td>
                <td>
                    <input type ="text" name="email" width={10} 
                     value= {this.state.email}
                     onChange={this.changeEmailHandler} />
                </td>
            </tr>
            <tr><td>Password :</td> 
                <td><input type ="password" name="password" width={10}
                           value= {this.state.password} 
                           onChange={this.changePasswordHandler}/> </td></tr>
            <tr>
                <td><button onClick={window.back} >Cancel</button></td>
                <td><input type="button" value ="Save"  onClick={this.saveAngelUser}/></td>
            </tr>
            </tbody>
            </table>
        </div>
        );
    }
}
export default SaveAngelComponent;