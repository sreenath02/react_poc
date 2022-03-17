import ReactDOM from 'react-dom';
import reportWebVitals from '../reportWebVitals';
import { useHistory, useLocation } from 'react-router-dom';
import React, {useEffect, useRef, useState} from 'react';
import {useForm} from 'react-hook-form';

function Login() {
  const history = useHistory();
  const uname = useRef(null);
  const pwd = useRef(null);

  const [logData, setLogData] = useState();
  const {register, handleSubmit, formState: {errors}} = useForm();

  useEffect(()=>{
    if(localStorage.getItem("isLoggedin")) {
      history.push("/std");
    }
  },[])

  const onSubmit=data=>{
    // if((uname.current.value === "mmm" && pwd.current.value === "mmm") ||
    // (uname.current.value === "nnn" && pwd.current.value === "nnn")) {
      if((data.userName === "mmm" && data.passWord === "mmm") ||
    (data.userName === "nnn" && data.passWord === "nnn")) {
      localStorage.setItem("isLoggedin", "true")
      history.push({
        pathname: '/std',
        state: data.userName // your data array of objects
      });
    } else {
      alert("Invalid login details...")
    }
  }
    
  return (
  <div className='loginPage'>
    <h4 className='text_align_center'>Login Page</h4>
    <form onSubmit={handleSubmit(onSubmit)}>
    <input type="text" ref={uname} name='userName' {...register('userName', {required:true})} placeholder='Username'/> <br/>
    { errors.userName && <div className='error'>Please enter Username</div>}
    <input type="password" ref={pwd} name='passWord' {...register('passWord', {required:true})} placeholder='Password'/> <br/>
    { errors.passWord && <div className='error'>Please enter Password</div>}
    <button type='submit'>Login</button>
    </form>
  </div>
  )
}

  export default Login