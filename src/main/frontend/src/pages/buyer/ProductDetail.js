import React, { useState } from 'react';
import Header from '../../components/buyer/Header';
import ProductInfo from '../../components/buyer/ProductInfo';
import StoreInfo from '../../components/buyer/StoreInfo';
import Modal from '../../components/buyer/Modal';
import ProductInfoStyles from '../../styles/buyer/ProductInfo.module.css';

const ProductDetail = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Header />
      <main>
        <div className={ProductInfoStyles.container}>
          <div className={ProductInfoStyles["left-area"]}>
            <img src="/no-image.png" alt="상품 이미지" className={ProductInfoStyles["product-image"]} />
          </div>
          <div className={ProductInfoStyles["right-area"]}>
            <ProductInfo />
            <hr className={ProductInfoStyles.divider} />
            <StoreInfo onShowMap={() => setIsModalOpen(true)} />
          </div>
        </div>
        {isModalOpen && (
          <Modal onClose={() => setIsModalOpen(false)}>
            <h2>매장 위치</h2>
            <p>경기도 안성시 중앙로 327</p>
            <div className={ProductInfoStyles["map-container"]}>
              <div className={ProductInfoStyles["map-placeholder"]}>지도가 표시될 영역</div>
            </div>
          </Modal>
        )}
      </main>
    </>
  );
};

export default ProductDetail;