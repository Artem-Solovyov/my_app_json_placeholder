import React from 'react';
import s from './myButton.module.css'

const MyButton = ({children, ...props}) => {
  return (
      <button {...props} className={s.my_button}>
        {children}
      </button>
  );
};

export default MyButton;