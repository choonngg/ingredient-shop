import React from 'react';
import ReactDOM from 'react-dom';
import HeaderStyles from '../../styles/buyer/Header.module.css';

const LocationPopup = ({ onClose }) => {
  return ReactDOM.createPortal(
    <div className={HeaderStyles["location-popup"]} style={{ display: 'flex' }} onClick={onClose}>
      <div className={HeaderStyles["location-popup-content"]} onClick={(e) => e.stopPropagation()}>
        <span className={HeaderStyles["location-popup-close"]} onClick={onClose}>×</span>
        <h2>위치 설정</h2>
        <p>현재 위치를 설정하세요.</p>
        <input type="text" placeholder="주소 입력" />
        <button onClick={onClose}>설정 완료</button>
      </div>
    </div>,
    document.body // DOM의 최상위로 렌더링
  );
};

export default LocationPopup;