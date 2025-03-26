import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../../App.css';

const PromotionAnalysisPage = () => {
  const { martId } = useParams();
  const [promotionStats, setPromotionStats] = useState({
    discountCorrelation: 0.8, // 할인율과 매출 상관계수 (예시)
    promoSalesIncrease: 15,   // 프로모션 기간 매출 증가율 (예시, %)
    recommendedDiscount: 10,  // AI가 추천한 최적 할인율 (예시)
  });

  useEffect(() => {
    // 백엔드 API로 할인율과 매출 상관관계, 프로모션 효과 데이터를 가져온다고 가정
    setPromotionStats({
      discountCorrelation: 0.8,
      promoSalesIncrease: 15,
      recommendedDiscount: 10,
    });
  }, [martId]);

  return (
    <div className="mart-dashboard-container">
      <aside className="sidebar">
        <h3>데이터 분석</h3>
        <ul>
          <li><Link to={`/mart/${martId}/data`}>메인 대시보드</Link></li>
          <li><Link to={`/mart/${martId}/data/sales`}>판매 분석</Link></li>
          <li><Link to={`/mart/${martId}/data/inventory`}>재고 분석</Link></li>
          <li><Link to={`/mart/${martId}/data/reservations`}>예약 분석</Link></li>
          <li><Link to={`/mart/${martId}/data/promotions`}>할인·프로모션 분석</Link></li>
        </ul>
      </aside>

      <main className="main-content">
        <h2>할인 및 프로모션 효과 분석</h2>
        <div className="section">
          <h3>할인율과 매출 상관관계</h3>
          <p>상관계수: {promotionStats.discountCorrelation} (1에 가까울수록 강한 양의 상관)</p>
        </div>
        <div className="section">
          <h3>특정 프로모션 기간 매출 증가율</h3>
          <p>매출 증가율: {promotionStats.promoSalesIncrease}%</p>
        </div>
        <div className="section">
          <h3>AI 기반 최적 할인율 추천</h3>
          <p>추천 할인율: {promotionStats.recommendedDiscount}%</p>
        </div>
      </main>
    </div>
  );
};

export default PromotionAnalysisPage;
