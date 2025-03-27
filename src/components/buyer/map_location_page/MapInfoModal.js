import React, { useRef } from 'react';
import mapInfoModalStyles from '../../../styles/buyer/MapInfoModal.module.css';

const MapInfoModal = ({ isOpen, onClose, locationInfo }) => {
    const modalRef = useRef(null);

    if (!isOpen) return null;

    // 오버레이 클릭 시 모달 닫기
    const handleOverlayClick = (e) => {
        // 클릭된 요소가 오버레이이고, 모달 콘텐츠 바깥일 경우 닫기
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            onClose();
        }
    };

    return (
        <div
            className={mapInfoModalStyles["map-modal-overlay"]}
            onClick={handleOverlayClick}
        >
            <div className={mapInfoModalStyles["map-modal-content"]} ref={modalRef}>
                <div className={mapInfoModalStyles["map-modal-header"]}>
                    <h2>{locationInfo.name}</h2>
                    <button className={mapInfoModalStyles["modal-close-btn"]} onClick={onClose}>
                        ×
                    </button>
                </div>
                <div className={mapInfoModalStyles["map-modal-body"]}>
                    <div className={mapInfoModalStyles["info-item"]}>
                        <strong>주소:</strong>
                        <p>{locationInfo.address}</p>
                    </div>
                    <div className={mapInfoModalStyles["info-item"]}>
                        <strong>연락처:</strong>
                        <p>{locationInfo.phone}</p>
                    </div>
                    <div className={mapInfoModalStyles["info-item"]}>
                        <strong>영업시간:</strong>
                        <p>{locationInfo.businessHours}</p>
                    </div>
                    <div className={mapInfoModalStyles["info-item"]}>
                        <strong>설명:</strong>
                        <p>{locationInfo.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MapInfoModal;