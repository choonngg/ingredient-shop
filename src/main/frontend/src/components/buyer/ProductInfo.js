import React from 'react';
import ProductInfoStyles from '../../styles/buyer/ProductInfo.module.css';

const ProductInfo = () => {
  return (
    <div className={ProductInfoStyles["product-info"]}>
      <div>
        <h1 className={ProductInfoStyles["product-name"]}>상품명</h1>
        <p className={ProductInfoStyles["product-price"]}>가격</p>
      </div>
      <div className={ProductInfoStyles["button-group"]}>
        <button className={ProductInfoStyles["product-buy-btn"]}>바로구매</button>
        <button className={ProductInfoStyles["product-cart-btn"]}>장바구니</button>
      </div>
    </div>
  );
};

export default ProductInfo;