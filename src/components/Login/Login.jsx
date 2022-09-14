import React, {useContext} from 'react';
import MyInput from "../../UI/Input/MyInput";
import MyButton from "../../UI/Button/MyButton";
import s from './login.module.css'
import {AuthContext} from "../../context/authContext";

const Login = () => {
const {isAuth, setIsAuth} = useContext(AuthContext)
  return (
      <div>
        <div style={{marginTop:'50px'}}>
          <h2>Please sign in</h2>
          <span>(click on the button)</span>
        </div>
        <div className={s.login}>
          <MyInput type={'text'} placeholder={"Enter your login..."}/>
          <MyInput type={'text'} placeholder={"Enter your password..."}/>
          <MyButton onClick={()=>{
            setIsAuth(true)
            localStorage.setItem('auth', 'true')
          }}>Sign in</MyButton>
        </div>
      </div>
  );
};

export default Login;