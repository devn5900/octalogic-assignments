import axios from "axios"
import { LOGIN_SUCC, LOG_OUT } from "./actionTypes"


export const logInUser=(data)=>async(dispatch)=>{

    try {
        const res= await axios.post("https://reqres.in/api/login",data);
        console.log(res.data);
        localStorage.setItem("token",res.data.token);
        dispatch({type:LOGIN_SUCC,payload:res.data.token})
    } catch (error) {
        
    }
}

export const logoutUser=()=>async(dispatch)=>{
    dispatch({type:LOG_OUT});
    localStorage.removeItem("token");
}