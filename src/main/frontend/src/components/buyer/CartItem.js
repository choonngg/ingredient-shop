import React from 'react';
import styles from '../../styles/buyer/CartItem.module.css';

const CartItem = ({ item, onSelect }) => {
    return (
        <div className={styles.cartItem}>
            <div className={styles.checkboxContainer}>
                <input
                    type="checkbox"
                    checked={item.selected}
                    onChange={onSelect}
                    className={styles.checkbox}
                />
            </div>

            <div className={styles.imageContainer}>
                <img
                    src={item.image}
                    alt={item.name}
                    className={styles.productImage}
                />
            </div>

            <div className={styles.productInfo}>
                <a className={styles.storeLink}>
                    상점 이름
                </a>
                <h3 className={styles.productName}>{item.name}</h3>
                <p className={styles.productPrice}>{item.price.toLocaleString()}원</p>
            </div>
        </div>
    );
};

export default CartItem;