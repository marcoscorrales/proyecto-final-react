import axios from "axios";
const endpoint= 'http://127.0.0.1:8000/api'

let token = null;

//Acciones que necesiten un token para ejecutarse

export const setToken = newToken =>{
    token = `Bearer ${newToken}`
}

export const logOut = async ()  =>{
    try {
        await axios.get(`${endpoint}/logout`,{ headers: { Authorization: token } } );
    
        // remove token from local storage
        localStorage.removeItem( 'token' );
        localStorage.removeItem( 'loggedUser' );
      } catch (e) {
        console.log(e);
      }

}

export const changePassword = async (password, confirm_password)  =>{
    try {
        const request = await axios.post(`${endpoint}/change-password`,{password: password, confirm_password: confirm_password},{ headers: { Authorization: token }} );

        console.log(request);

        alert(request.data.message)

      } catch (e) {
        alert(e);
      }

}
