import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import {AuthContext} from "../../context/authContext";
import s from './navbar.module.css'

const Navbar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext)
  return (
      <div className={'navbar'}>
        <div className={'links'}>
          <NavLink className={'link'} to={'/about'} activeClassName={'active'}>About</NavLink>
          <NavLink className={'link'} to={'/posts'}>Posts</NavLink>
          <button className={s.button} onClick={()=> {
            setIsAuth(false)
            localStorage.removeItem('auth')
          }}><b>Logout</b></button>
        </div>
      </div>
  );
};

export default Navbar;