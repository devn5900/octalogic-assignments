import { SET_STUDENTS } from "./actionTypes";


export const setStudents=()=>async(dispatch)=>{
        const students= JSON.parse(localStorage.getItem("students"))||[];
        dispatch({type:SET_STUDENTS,payload:students});
}