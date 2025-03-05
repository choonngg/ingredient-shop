import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import { generateSampleProducts } from '../../utils/buyer/productUtils';
import ProductStyles from '../../styles/buyer/Product.module.css';

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const isMobile = () => window.innerWidth <= 768;
  const productsPerPage = isMobile() ? 10 : 30;

  const loadProducts = () => {
    if (isLoading) return;
    setIsLoading(true);
    setTimeout(() => {
      const newProducts = generateSampleProducts(productsPerPage);
      setProducts((prev) => [...prev, ...newProducts]);
      setPage((prev) => prev + 1);
      setIsLoading(false);
    }, 800);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 100 && !isLoading) {
        loadProducts();
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading]);

  return (
    <section className={ProductStyles["product-section"]}>
      <h2 className={ProductStyles["section-title"]}>새로운 상품</h2>
      <div className={ProductStyles["product-grid"]}>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
      {isLoading && <div className={ProductStyles["loading"]}>로딩 중...</div>}
    </section>
  );
};

export default ProductGrid;