import React from 'react';
import Header from '../../components/buyer/Header';
import ProductGrid from '../../components/buyer/ProductGrid';
import HeaderStyles from '../../styles/buyer/Header.module.css';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <section className={HeaderStyles["image-section"]}>
          <img src="/buyer-home-main-image.png" alt="메인 이미지" style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} />
        </section>
        <ProductGrid />
      </main>
    </>
  );
};

export default Home;