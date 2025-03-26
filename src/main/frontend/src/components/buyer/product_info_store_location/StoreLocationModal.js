import React from 'react';
import Modal from '../Modal';
import NaverMap from './NaverMap';
import ProductInfoStyles from '../../../styles/buyer/ProductInfo.module.css';

const StoreLocationModal = ({ isOpen, onClose, address }) => {
    if (!isOpen) return null;

    return (
        <Modal onClose={onClose}>
            <h2>매장 위치</h2>
            <p>{address}</p>
            <div className={ProductInfoStyles["map-container"]}>
                <NaverMap address={address} />
            </div>
        </Modal>
    );
};

export default StoreLocationModal;