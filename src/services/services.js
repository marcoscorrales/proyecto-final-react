import axios from "axios";
const endpoint= 'http://127.0.0.1:8000/api'

let token = null;

//Acciones que necesiten un token para ejecutarse

export const setToken = newToken =>{
    token = `Bearer ${newToken}`
}

export const logOut = async ()  =>{
    console.log(token)
    try {
        await axios.get(`${endpoint}/logout`,{ headers: { Authorization: token } } );
    
        // remove token from local storage
        localStorage.removeItem( 'token' );
        localStorage.removeItem( 'loggedUser' );
      } catch (e) {
        console.log(e);
      }

}
