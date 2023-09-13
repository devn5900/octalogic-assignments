import { ADD_COURSES, ARCHIVE_COURSE, EDIT_COURSES, SET_COURSES } from "./actionTypes"

export const setCourse=()=>async(dispatch)=>{
   const payload= JSON.parse(localStorage.getItem("courses"))||[];
    dispatch({type:SET_COURSES,payload})
}

export const setArchived=(id,status)=>async(dispatch)=>{
    dispatch({type:ARCHIVE_COURSE,payload:{id,status}});
}

export const addCourses=(data)=>async(dispatch)=>{
    dispatch({type:ADD_COURSES,payload:data});
}

export const editCourses=(data)=>async(dispatch)=>{
    dispatch({type:EDIT_COURSES,payload:data})
}