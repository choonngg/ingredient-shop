import React from 'react';
import { Link } from 'react-router-dom';
import ProductStyles from '../../styles/buyer/Product.module.css';

const ProductItem = ({ product }) => {
  return (
    <Link to={`/buyer/product/${product.id}`} className={ProductStyles["product-item"]}>
      <div className={ProductStyles["product-image-container"]}>
        <img src={product.imageUrl} alt={product.name} className={ProductStyles["product-image"]} />
      </div>
      <div className={ProductStyles["product-item-info"]}>
        <div className={ProductStyles["product-name"]}>{product.name}</div>
        <div className={ProductStyles["product-price"]}>{product.price.toLocaleString()}원</div>
      </div>
    </Link>
  );
};

export default ProductItem;