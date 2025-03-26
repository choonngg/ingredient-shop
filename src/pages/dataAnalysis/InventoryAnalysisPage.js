import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../../App.css';

const InventoryAnalysisPage = () => {
  const { martId } = useParams();
  const [inventoryStats, setInventoryStats] = useState({
    lowStock: 5,
    expiringSoon: 10,
  });

  useEffect(() => {
    // 예시: 재고 부족, 유통기한 임박 상품 수
    // 실제로는 백엔드에서 데이터 받아오기
    setInventoryStats({
      lowStock: 5,
      expiringSoon: 10,
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
        <h2>재고 분석</h2>
        <div className="section">
          <h3>재고 소진 속도 분석</h3>
          <p>상품별/카테고리별로 재고가 얼마나 빨리 소진되는지 그래프 예시</p>
        </div>
        <div className="section">
          <h3>유통기한 임박 상품 비율</h3>
          <p>임박 상품 개수: {inventoryStats.expiringSoon}개</p>
        </div>
        <div className="section">
          <h3>재고 부족 예측 알림</h3>
          <p>재고 부족 상품: {inventoryStats.lowStock}개</p>
        </div>
      </main>
    </div>
  );
};

export default InventoryAnalysisPage;
