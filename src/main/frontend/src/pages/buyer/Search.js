import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/buyer/Header';
import ProductItem from '../../components/buyer/ProductItem';
import { generateSampleProducts } from '../../utils/buyer/productUtils';
import ProductStyles from '../../styles/buyer/Product.module.css';

const Search = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      const sampleProducts = generateSampleProducts(30);
      setProducts(sampleProducts);
      setIsLoading(false);
    }, 800);
  }, [query]);

  return (
    <>
      <Header />
      <main>
        <section className={ProductStyles["product-section"]}>
          <h2 className={ProductStyles["section-title"]}>{query ? `"${query}" 상품 검색 결과` : '상품 검색 결과'}</h2>
          <div className={ProductStyles["product-grid"]}>
            {products.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
          {isLoading && <div className={ProductStyles["loading"]}>로딩 중...</div>}
        </section>
      </main>
    </>
  );
};

export default Search;