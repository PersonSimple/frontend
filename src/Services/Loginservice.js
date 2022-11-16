//import axios from axios;

import axios from "axios";

const ANGEL_POST_URL ='http://localhost:8080/api/loginhelper/login' 

const GET_ALL_ANGEL_PROFILE_URL ='http://localhost:8080/api/angelUser/getAllAngelUser'

const ANGEL_BY_ID_URL = 'http://localhost:8080/api/angelUser/getAngelUserById/9'
                                          
class LoginService {

      postResquestData(angel) {

        return axios( {
              method:'post',
              url : ANGEL_POST_URL,
              data : {
                email:       angel.email,
                password:    angel.password
              }
        })
      }

    getImageData(angel) {
        return axios( {
              method:'get',
              url : ANGEL_POST_URL,
              data : {}
        }).then (res => {

        });
      }

      getAngleListProfile() {
        return axios.get(GET_ALL_ANGEL_PROFILE_URL);
     }
      getAngleProfileById(ahId) {
        return axios.get(ANGEL_BY_ID_URL);
        //this.props.history.push ("/pro-id")
   }

   openNewPage() {
 }
}
export default new LoginService();