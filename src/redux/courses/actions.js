import { SET_COURSES } from "./actionTypes"

export const setCourse=()=>async(dispatch)=>{
   const payload= JSON.parse(localStorage.getItem("courses"))||[];
    dispatch({type:SET_COURSES,payload})
}