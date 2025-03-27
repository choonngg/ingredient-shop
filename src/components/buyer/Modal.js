import React from 'react';
import ProductInfoStyles from '../../styles/buyer/ProductInfo.module.css';

const Modal = ({ onClose, children }) => {
  return (
    <div className={ProductInfoStyles.modal} style={{ display: 'block' }} onClick={onClose}>
      <div className={ProductInfoStyles["modal-content"]} onClick={(e) => e.stopPropagation()}>
        <span className={ProductInfoStyles["close-btn"]} onClick={onClose}>×</span>
        {children}
      </div>
    </div>
  );
};

export default Modal;