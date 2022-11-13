import React, { Component } from 'react';
import axios, { post } from 'axios';

const ANGEL_POST_URL ='http://localhost:8080/api/angelUser/saveAngelUser';
class AngelComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name:'',
            address:'',
            contactNumber :'',
            email:'',
            message:'',
            file: null
        }
        this.submitForm =this.submitForm.bind(this);
        this.handleChange =this.handleChange.bind(this);
        this.handleFile =this.handleFile.bind(this);
    }
    handleFile(e) {
        let file = e.target.files[0];
        this.setState({ file });
      }
    handleChange=(event)=>{
        this.setState({[event.target.name]: event.target.value})
        }
    submitForm= ()=> {
        let angel = {
            ahEmail:this.state.email,
            ahAddress:this.state.address,
            ahName :this.state.name,
            ahContactNumber:this.state.contactNumber,
            file : this.state.file
        }
        console.log(angel);
        axios({
            method: 'post',
            url: ANGEL_POST_URL,
            data: {
               ahName :angel.ahName,
               ahContactNumber:angel.ahContactNumber,
	           ahAddress:angel.ahAddress,
	           ahEmail:angel.ahEmail,
               file:angel.file
            }
        }).then(res => {
            console.log('before retValue '+ res.data.ahName);
            this.setState({message: res.data.ahName})
            
          })
      }
 

    render () {
        return (
                <table className="table">
                 <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Result Message :</th>
                        <th scope="col"><input type ="text"  name="message" value={this.state.message} onChange={this.setMessage} width={10}/> </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Name :</td>
                        <td><input type ="text"  name="name" onChange={this.handleChange} width={10}/></td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Email :</td>
                        <td><input type ="text" name ="email" onChange={this.handleChange}  width={10}/></td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Address :</td>
                        <td><input type ="text" name ="address" onChange={this.handleChange}  width={10}/></td>
                        </tr>

                        <tr>
                        <th scope="row">2</th>
                        <td>Contact Person :</td>
                        <td><input type ="text" name ="contactNumber" onChange={this.handleChange}  width={10}/></td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Contact : :</td>
                        <td><input type ="text" name ="contact" onChange={this.handleChange}  width={10}/></td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Pincode :</td>
                        <td><input type ="text" name ="pinCode"  onChange={this.handleChange}  width={10}/></td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Type :</td>
                        <td><input type ="text" name ="type" onChange={this.handleChange}  width={10}/></td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Profession :</td>
                        <td><input type ="text" name ="profession" onChange={this.handleChange}  width={10}/></td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Qualification :</td>
                        <td><input type ="text" name ="qualification" onChange={this.handleChange}  width={10}/></td>
                        </tr>

                        <tr>
                        <th scope="row">2</th>
                        <td>GSTNumber :</td>
                        <td><input type ="text" name ="gstNumber" onChange={this.handleChange}  width={10}/></td>
                        </tr>

                        <tr>
                        <th scope="row">2</th>
                        <td>Status :</td>
                        <td><input type ="text" name ="status" onChange={this.handleChange}  width={10}/></td>
                        </tr>

                        <tr>
                        <th scope="row">2</th>
                        <td>Image: </td>
                        <td><input type="file" name="file" onChange={e => this.handleFile(e)} /></td>
                        </tr>
 
                        <tr>
                        <th scope="row">2</th>
                        <td><button >Cancel</button> </td>
                        <td><input type ="button" onClick = {this.submitForm} value = "Submit"/></td>
                        </tr>
                    </tbody>
                </table>
        );
    } 
}
export default AngelComponent;

