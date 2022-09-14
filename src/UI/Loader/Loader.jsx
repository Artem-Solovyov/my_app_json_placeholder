import React from 'react';
import s from './loader.module.css'

const Loader = () => {
  return (
      <div style={{display:'flex', justifyContent:'center', marginTop:'50px'}}>
        <div className={s.loader}></div>
      </div>
  );
};

export default Loader;