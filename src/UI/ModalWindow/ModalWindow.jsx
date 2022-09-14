import React from 'react';
import s from './modalWindow.module.css'

const ModalWindow = ({modal, setModal, children}) => {
  const stylesModalWindow = [s.modal]
  if (modal) {
    stylesModalWindow.push(s.active)
  }
  return (
      <div className={stylesModalWindow.join(' ')} onClick={()=>setModal(false)}>
        <div className={s.modalContent} onClick={(e)=>e.stopPropagation()}>
          {children}
        </div>
      </div>
  );
};

export default ModalWindow;