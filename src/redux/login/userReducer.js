import React from 'react'
import { LOGIN_SUCC, LOG_OUT } from './actionTypes'


const init={
    token:localStorage.getItem("token"),
    isAuth:localStorage.getItem("token")!==undefined
}

const userReducer = (state=init,{type,payload}) => {
    
    switch(type){
        case LOGIN_SUCC:
            return {...state,token:payload,isAuth:true}
        case LOG_OUT:
            return {...state,token:undefined,isAuth:false}
        default:
            return state
    }
}

export default userReducer