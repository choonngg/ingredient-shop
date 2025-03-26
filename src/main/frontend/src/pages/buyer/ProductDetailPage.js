import React, { useState } from 'react';
import Header from '../../components/buyer/Header';
import Footer from '../../components/buyer/Footer';
import ProductInfo from '../../components/buyer/ProductInfo';
import StoreInfo from '../../components/buyer/StoreInfo';
import StoreLocationModal from '../../components/buyer/product_info_store_location/StoreLocationModal'; // 분리된 모달 컴포넌트 임포트
import ProductInfoStyles from '../../styles/buyer/ProductInfo.module.css';

const ProductDetailPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const storeAddress = '경기도 안성시 중앙로 327';

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

          {/* 분리된 모달 컴포넌트 사용 */}
          <StoreLocationModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              address={storeAddress}
          />
          <br /><br /><br />
        </main>

        <Footer />
      </>
  );
};

export default ProductDetailPage;