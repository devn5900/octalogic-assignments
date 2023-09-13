import { ADD_COURSES, ARCHIVE_COURSE, EDIT_COURSES, SET_COURSES } from "./actionTypes";

const init={
    courses:JSON.parse(localStorage.getItem("courses"))||[]
}
const coursesReducer = (state=init,{type,payload}) => {
    switch(type){
        case SET_COURSES:
            return {...state,courses:payload}
        case ARCHIVE_COURSE:
            return {...state,courses:state.courses.map((el)=>{
                if(el.id==payload.id){
                    el.status=payload.status;
                }
                return el;
            })}
        case ADD_COURSES:
            return {...state,courses:[...state.courses,payload]}
        case EDIT_COURSES:
            return {...state,courses:state.courses.map((el)=>{
                if(el.id===payload.id){
                    return payload;
                }else{
                    return el;
                }
            })}
            default:
            return state;
    }
}

export default coursesReducer