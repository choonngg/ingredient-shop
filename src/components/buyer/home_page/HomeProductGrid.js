// import React, { useState, useEffect } from 'react';
// import ProductItem from '../ProductItem';
// import { generateSampleProducts } from '../../../utils/buyer/productUtils';
// import ProductStyles from '../../../styles/buyer/Product.module.css';
// import UseGeoLocation from '../UseGeoLocation';

// const HomeProductGrid = () => {
//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [page, setPage] = useState(1);
  
//   // 위치 정보 허용 상태 가져오기
//   const { isLocationPermissionGranted } = UseGeoLocation();

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

//   // // 위치 정보가 거부된 경우
//   // if (isLocationPermissionGranted() === false) {
//   //   return (
//   //     <section className={ProductStyles["product-section"]}>
//   //       <div className={ProductStyles["location-denied-message"]}>
//   //         해당 웹 페이지를 이용하기 위해서는 위치 정보 접근이 필요합니다.
//   //         <br />
//   //         설정에서 위치 정보 접근을 허용해 주세요.
//   //       </div>
//   //     </section>
//   //   );
//   // }

//   // 위치정보가 허용이면 상품 목록 렌더링
//   if (isLocationPermissionGranted() === true) {
//     return (
//       <section className={ProductStyles["product-section"]}>
//         <h2 className={ProductStyles["section-title"]}>새로운 상품</h2>
//         <div className={ProductStyles["product-grid"]}>
//           {products.map((product) => (
//             <ProductItem key={`${product.id}-${page}`} product={product} />
//           ))}
//         </div>
//         {isLoading && <div className={ProductStyles["loading"]}>로딩 중...</div>}
  
//         {/* 더보기 버튼 */}
//         <div className={ProductStyles["more-button-container"]}>
//           <button
//             className={ProductStyles["more-button"]}
//             onClick={handleLoadMore}
//             disabled={isLoading}
//           >
//             {isLoading ? '로딩 중...' : '더보기'}
//           </button>
//         </div>
//       </section>
//     );
//   }


//     return (
//       <section className={ProductStyles["product-section"]}>
//         <div className={ProductStyles["location-denied-message"]}>
//           해당 웹 페이지를 이용하기 위해서는 위치 정보 접근이 필요합니다.
//           <br />
//           설정에서 위치 정보 접근을 허용해 주세요.
//           <br />
//           <button 
//             className={ProductStyles["enable-location-button"]}
//             onClick={() => {
//               if (navigator.geolocation) {
//                 navigator.geolocation.getCurrentPosition(
//                   (position) => {
//                     // 위치 정보 접근이 허용되면 UseGeoLocation 함수 실행
//                     UseGeoLocation();
//                     // 페이지 새로고침 또는 상태 업데이트를 통해 UI 갱신
//                     window.location.reload();
//                   },
//                   (error) => {
//                     console.error("위치 정보 접근이 거부되었습니다:", error);
//                     alert("위치 정보 접근을 허용해주세요.");
//                   }
//                 );
//               } else {
//                 alert("이 브라우저에서는 위치 정보 기능을 지원하지 않습니다.");
//               }
//             }}
//           >
//             위치 정보 접근 허용하기
//           </button>
//         </div>
//       </section>
//     );
// };

// export default HomeProductGrid;

import React, { useState, useEffect } from 'react';
import ProductItem from '../ProductItem';
import { generateSampleProducts } from '../../../utils/buyer/productUtils';
import ProductStyles from '../../../styles/buyer/Product.module.css';
import UseGeoLocation from '../UseGeoLocation';

const HomeProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  
  // 위치 정보 자동 요청하지 않음 (autoRequest = false)
  const { isLocationPermissionGranted, requestLocation, isLoading: isLocationLoading } = UseGeoLocation(false);

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

  // 위치 정보 권한 상태 관리를 위한 상태 - 초기값은 false로 설정 (허용되지 않은 상태)
  const [permissionState, setPermissionState] = useState(false);
  
  // 권한 상태 변경 감지 및 상태 업데이트
  useEffect(() => {
    const currentPermission = isLocationPermissionGranted();
    setPermissionState(currentPermission);
    
    // 디버깅용 로그
    console.log('위치 정보 권한 상태:', currentPermission);
  }, [isLocationPermissionGranted()]);

  // 초기 데이터 로드 - 위치 정보가 허용된 경우에만 실행
  useEffect(() => {
    // 위치 정보가 허용된 경우에만 제품 로드
    if (permissionState) {
      loadProducts(true);
    }
  }, [permissionState]);

  // 더보기 버튼 클릭 핸들러
  const handleLoadMore = () => {
    loadProducts();
  };

  // 위치 정보가 명시적으로 허용된 상태가 아니면 위치 정보 요청 화면 표시
  if (!permissionState) {
    return (
      // <section className={ProductStyles["product-section"]}>
      //   <div className={ProductStyles["location-denied-message"]}>
      //     해당 웹 페이지를 이용하기 위해서는 위치 정보 접근이 필요합니다.
      //     <br />
      //     아래 버튼을 클릭하여 위치 정보 접근을 허용해 주세요.
      //     <br />
      //     위치 정보 접근을 거부했거나, 버튼을 눌러도 위치 정보 접근이 화면에 표시되지 않을 경우 설정에서 위치 정보 접근을 허용해 주세요.
      //     <br />
      //     <button 
      //       className={ProductStyles["enable-location-button"]}
      //       onClick={() => {
      //         // UseGeoLocation의 requestLocation 함수 호출
      //         requestLocation();
      //       }}
      //       disabled={isLocationLoading}
      //     >
      //       {isLocationLoading ? '위치 정보 확인 중...' : '위치 정보 접근 허용하기'}
      //     </button>
      //   </div>
      // </section>
      <section className={ProductStyles["location-section"]}>
        <div className={ProductStyles["location-denied-message"]}>
          <p>해당 웹 페이지를 이용하기 위해서 위치 정보 접근이 필요합니다.</p>
          <p>아래 버튼을 클릭하여 위치 정보 접근을 허용해 주세요.</p>
          <p>위치 정보 접근을 거부했거나, 버튼을 눌러도 위치 정보 접근이 화면에 표시되지 않을 경우</p>
          <p>설정에서 위치 정보 접근을 허용해 주세요.</p>
          <button 
            className={ProductStyles["enable-location-button"]}
            onClick={() => {
              // UseGeoLocation의 requestLocation 함수 호출
              requestLocation();
            }}
            disabled={isLocationLoading}
          >
            {isLocationLoading ? '위치 정보 확인 중...' : '위치 정보 접근 허용하기'}
          </button>
        </div>
      </section>
    );
  }

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

export default HomeProductGrid;