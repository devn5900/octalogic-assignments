import React, { useEffect, useState } from 'react'
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'
import loginbg from '../assets/loginbg.png'
import { useDispatch, useSelector } from 'react-redux'
import { logInUser } from '../redux/login/actions'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const {isAuth,token}= useSelector(store=>store.userReducer);
    const navigate= useNavigate();
    const dispatch= useDispatch();
    const [credential,setCredential]= useState({
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
    })

    const handleSubmit=(e)=>{
            e.preventDefault();
            dispatch(logInUser(credential))
            navigate("/");
    }
    useEffect(()=>{
        if(isAuth&&token){
            navigate("/");
        }
    },[isAuth,token])
  return (
    <div className='flex w-screen h-screen'>
        <div className='w-1/2 flex items-center justify-center bg-[#1C1D21]'>
            <div className='w-[60%] flex flex-col gap-4'>
                <h1 className='text-4xl text-white font-bold font-nsans'>Login</h1>
                <span className='text-gray-500 '>Enter your account details</span>
                <form onSubmit={handleSubmit} className='flex flex-col gap-4 my-10'>
                    <Input type="email" value={credential.email} className="  bg-transparent text-white border-gray-500 outline-none  placeholder:text-gray-600" placeholder="testing email : eve.holt@reqres.in" />
                    <Input type="password" value={credential.password} className=" bg-transparent  text-white border-gray-500 outline-none  placeholder:text-gray-600" placeholder="testing password : cityslicka" />
                    <span className='text-gray-500 text-sm hover:text-blue-600 cursor-pointer'>Forget Password</span>
                    <Button type="submit" className="bg-[#925FE2] my-10 hover:bg-[#8b54e5]">Login</Button>
                </form>
                
            </div>
        </div>
        <div className='w-1/2 flex flex-col items-center bg-[#925FE2]'>
            <div className='pt-20'>
                <h1 className='text-5xl text-white font-extrabold'>Welcome to</h1>
                <h1 className='text-6xl text-white font-bold'>Octalogic portal</h1>
                <p className='text-[#EEE] py-4'>Login to access your account</p>
            </div>
            <div className='flex items-center justify-center'>
                <img className='w-[90%]' src={loginbg} />
            </div>
        </div>
    </div>
  )
}

export default Login