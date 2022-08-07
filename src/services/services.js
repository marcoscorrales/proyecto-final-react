import axios from "axios";
const endpoint= 'http://127.0.0.1:8000/api'

let token = null;

//Acciones que necesiten un token para ejecutarse

const setToken = newToken =>{
    token = `Bearer ${newToken}`
}

export default {setToken}