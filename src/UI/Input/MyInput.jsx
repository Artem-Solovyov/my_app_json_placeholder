import React from 'react';
import s from './myInput.module.css'

const MyInput = ({...props}) => {
  return (
      <input {...props} className={s.my_input}/>);
};

export default MyInput;