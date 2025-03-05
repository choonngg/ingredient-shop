import React, { useState } from 'react';
import ProductInfoStyles from '../../styles/buyer/ProductInfo.module.css';

const StoreInfo = ({ onShowMap }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <>
      <p className={ProductInfoStyles["store-title"]}>매장 정보</p>
      <div className={ProductInfoStyles["store-info"]}>
        <div>
          <img src="/no-image.png" alt="매장 이미지" className={ProductInfoStyles["store-image"]} />
          <button
            className={ProductInfoStyles["follow-btn"]}
            onClick={() => setIsFollowing(!isFollowing)}
            style={{ backgroundColor: isFollowing ? '#888' : '#4a76fd' }}
          >
            {isFollowing ? '팔로잉' : '팔로우'}
          </button>
        </div>
        <div className={ProductInfoStyles["store-detail"]}>
          <p className={ProductInfoStyles["store-name"]}>매장명</p>
          <p className={ProductInfoStyles["store-stats"]}>상품 +999 · 팔로워 +999 · 후기 +999</p>
          <div className={ProductInfoStyles["store-address-header"]}>
            <p className={ProductInfoStyles["store-address-title"]}>매장주소</p>
            <button className={ProductInfoStyles["store-location-btn"]} onClick={onShowMap}>
              매장위치확인
            </button>
          </div>
          <p className={ProductInfoStyles["store-address"]}>경기도 안성시 중앙로 327</p>
        </div>
      </div>
    </>
  );
};

export default StoreInfo;