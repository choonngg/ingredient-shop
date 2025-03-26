import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ProductItem from './ProductItem';
import { generateSampleProducts } from '../../utils/buyer/productUtils';
import ProductStyles from '../../styles/buyer/Product.module.css';

const SearchProductGrid = ({ query, title }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalProducts, setTotalProducts] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  // 반응형 상품 개수 설정
  const productsPerPage = windowWidth <= 768 ? 20 : 30;
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  // URL에서 현재 페이지 가져오기
  const getCurrentPageFromUrl = () => {
    const searchParams = new URLSearchParams(location.search);
    return parseInt(searchParams.get('page')) || 1;
  };

  const [currentPage, setCurrentPage] = useState(getCurrentPageFromUrl());

  // 윈도우 크기 변경 감지
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // URL 변경 시 현재 페이지 업데이트
  useEffect(() => {
    setCurrentPage(getCurrentPageFromUrl());
  }, [location.search]);
  
  // 페이지 변경 핸들러
  const handlePageChange = (pageNumber) => {
    // URL에 페이지 정보 추가 (실제 라우팅 효과)
    const searchParams = new URLSearchParams(location.search);
    searchParams.set('page', pageNumber.toString());
    
    // 현재 URL 경로 유지하면서 쿼리 파라미터만 업데이트
    navigate({
      pathname: location.pathname,
      search: searchParams.toString()
    });
  };
  
  // 상품 로드
  useEffect(() => {
    setIsLoading(true);
    
    // 검색어가 변경되면 페이지 초기화 및 URL 업데이트
    if (query !== undefined && query !== null) {
      // 검색 쿼리가 있는데 page 파라미터가 없으면 page=1을 추가
      const searchParams = new URLSearchParams(location.search);
      if (!searchParams.has('page')) {
        searchParams.set('page', '1');
        navigate({
          pathname: location.pathname,
          search: searchParams.toString()
        }, { replace: true });
        return; // 이후 navigate에 의해 리렌더링되므로 여기서 중단
      }
    }
    
    // 페이지 변경 시 스크롤 맨 위로
    window.scrollTo(0, 0);
    
    setTimeout(() => {
      // 전체 상품 수 설정 (실제로는 API에서 받아올 값)
      setTotalProducts(180);
      
      const startIndex = (currentPage - 1) * productsPerPage;
      const sampleProducts = generateSampleProducts(productsPerPage, startIndex);
      setProducts(sampleProducts);
      setIsLoading(false);
    }, 800);
  }, [query, currentPage, productsPerPage, location.search, navigate, location.pathname]);

  // 현재 표시 중인 상품 범위 계산
  const calculateProductRange = () => {
    const firstProduct = (currentPage - 1) * productsPerPage + 1;
    const lastProduct = Math.min(currentPage * productsPerPage, totalProducts);
    return `${firstProduct}-${lastProduct}`;
  };

  // 페이지네이션 버튼 렌더링
  const renderPaginationButtons = () => {
    const maxVisibleButtons = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisibleButtons / 2));
    let endPage = Math.min(totalPages, startPage + maxVisibleButtons - 1);
    
    if (endPage - startPage + 1 < maxVisibleButtons) {
      startPage = Math.max(1, endPage - maxVisibleButtons + 1);
    }
    
    const buttons = [];
    
    // 이전 페이지 버튼
    if (currentPage > 1) {
      buttons.push(
        <button 
          key="prev" 
          onClick={() => handlePageChange(currentPage - 1)}
          className={ProductStyles["pagination-button"]}
          aria-label="이전 페이지"
        >
          &laquo;
        </button>
      );
    }
    
    // 페이지 번호 버튼
    for (let i = startPage; i <= endPage; i++) {
      const isCurrentPage = i === currentPage;
      buttons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`${ProductStyles["pagination-button"]} ${
            isCurrentPage ? ProductStyles["active"] : ""
          }`}
          aria-current={isCurrentPage ? "page" : undefined}
        >
          {i}
        </button>
      );
    }
    
    // 다음 페이지 버튼
    if (currentPage < totalPages) {
      buttons.push(
        <button 
          key="next" 
          onClick={() => handlePageChange(currentPage + 1)}
          className={ProductStyles["pagination-button"]}
          aria-label="다음 페이지"
        >
          &raquo;
        </button>
      );
    }
    
    return buttons;
  };

  return (
    <section className={ProductStyles["product-section"]}>
      <h2 className={ProductStyles["section-title"]}>
        {query ? `"${query}" ${title || '상품 검색 결과'}` : (title || '상품 목록')}
      </h2>
      
      {isLoading ? (
        <div className={ProductStyles["loading"]}>로딩 중...</div>
      ) : (
        <>
          <div className={ProductStyles["product-grid"]}>
            {products.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
          
          {totalPages > 1 && (
            <>
              <div className={ProductStyles["pagination"]}>
                {renderPaginationButtons()}
              </div>
              
              <div className={ProductStyles["product-info"]}>
                전체 {totalProducts}개 상품 중 {calculateProductRange()}개 표시
                (현재 페이지: {currentPage})
              </div>
            </>
          )}
        </>
      )}
    </section>
  );
};

export default SearchProductGrid;