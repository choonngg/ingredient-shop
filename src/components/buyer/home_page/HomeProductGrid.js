// import React, { useState, useEffect } from 'react';
// import ProductItem from '../ProductItem';
// import { generateSampleProducts } from '../../../utils/buyer/productUtils';
// import ProductStyles from '../../../styles/buyer/Product.module.css';

// const ProductGrid = () => {
//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [page, setPage] = useState(1);

//   // 항상 20개씩 상품 로드
//   const productsPerPage = 20;

//   const loadProducts = (isInitial = false) => {
//     if (isLoading) return;
//     setIsLoading(true);
//     setTimeout(() => {
//       const newProducts = generateSampleProducts(productsPerPage);

//       // 초기 로드인 경우 상품 배열을 교체, 아니면 기존 배열에 추가
//       if (isInitial) {
//         setProducts(newProducts);
//       } else {
//         setProducts((prev) => [...prev, ...newProducts]);
//       }

//       setPage((prev) => prev + 1);
//       setIsLoading(false);
//     }, 800);
//   };

//   // 초기 데이터 로드
//   useEffect(() => {
//     loadProducts(true);
//   }, []);

//   // 더보기 버튼 클릭 핸들러
//   const handleLoadMore = () => {
//     loadProducts();
//   };

//   return (
//       <section className={ProductStyles["product-section"]}>
//         <h2 className={ProductStyles["section-title"]}>새로운 상품</h2>
//         <div className={ProductStyles["product-grid"]}>
//           {products.map((product) => (
//               <ProductItem key={`${product.id}-${page}`} product={product} />
//           ))}
//         </div>
//         {isLoading && <div className={ProductStyles["loading"]}>로딩 중...</div>}

//         {/* 더보기 버튼 */}
//         <div className={ProductStyles["more-button-container"]}>
//           <button
//               className={ProductStyles["more-button"]}
//               onClick={handleLoadMore}
//               disabled={isLoading}
//           >
//             {isLoading ? '로딩 중...' : '더보기'}
//           </button>
//         </div>
//       </section>
//   );
// };

// export default ProductGrid;

import React, { useState, useEffect } from 'react';
import ProductItem from '../ProductItem';
import { generateSampleProducts } from '../../../utils/buyer/productUtils';
import ProductStyles from '../../../styles/buyer/Product.module.css';
import useGeoLocation from '../UseGeoLocation'; // useGeoLocation 훅 import

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  
  // 위치 정보 허용 상태 가져오기
  const { isLocationPermissionGranted } = useGeoLocation();

  // 항상 20개씩 상품 로드
  const productsPerPage = 20;

  const loadProducts = (isInitial = false) => {
    if (isLoading) return;
    setIsLoading(true);
    setTimeout(() => {
      const newProducts = generateSampleProducts(productsPerPage);

      // 초기 로드인 경우 상품 배열을 교체, 아니면 기존 배열에 추가
      if (isInitial) {
        setProducts(newProducts);
      } else {
        setProducts((prev) => [...prev, ...newProducts]);
      }

      setPage((prev) => prev + 1);
      setIsLoading(false);
    }, 800);
  };

  // 초기 데이터 로드
  useEffect(() => {
    loadProducts(true);
  }, []);

  // 더보기 버튼 클릭 핸들러
  const handleLoadMore = () => {
    loadProducts();
  };

  // 위치 정보가 거부된 경우
  if (isLocationPermissionGranted() === false) {
    return (
      <section className={ProductStyles["product-section"]}>
        <div className={ProductStyles["location-denied-message"]}>
          해당 웹 페이지를 이용하기 위해서는 위치 정보 접근이 필요합니다.
          <br />
          설정에서 위치 정보 접근을 허용해 주세요.
        </div>
      </section>
    );
  }

  // 위치 정보가 허용되었거나 아직 결정되지 않은 경우 (null) 기존 UI 반환
  return (
    <section className={ProductStyles["product-section"]}>
      <h2 className={ProductStyles["section-title"]}>새로운 상품</h2>
      <div className={ProductStyles["product-grid"]}>
        {products.map((product) => (
          <ProductItem key={`${product.id}-${page}`} product={product} />
        ))}
      </div>
      {isLoading && <div className={ProductStyles["loading"]}>로딩 중...</div>}

      {/* 더보기 버튼 */}
      <div className={ProductStyles["more-button-container"]}>
        <button
          className={ProductStyles["more-button"]}
          onClick={handleLoadMore}
          disabled={isLoading}
        >
          {isLoading ? '로딩 중...' : '더보기'}
        </button>
      </div>
    </section>
  );
};

export default ProductGrid;