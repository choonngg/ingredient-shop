import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../../App.css';

const ReservationAnalysisPage = () => {
  const { martId } = useParams();
  const [reservationStats, setReservationStats] = useState({
    dailyReservations: 10,
    weeklyReservations: 50,
    noShow: 2,
    visited: 8,
  });

  useEffect(() => {
    // 예: 예약 추이, 미방문율, 방문 고객 선호 상품 등
    // 실제로는 백엔드 API 연동
    setReservationStats({
      dailyReservations: 10,
      weeklyReservations: 50,
      noShow: 2,
      visited: 8,
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
        <h2>예약 분석</h2>
        <div className="section">
          <h3>예약 수 추이 분석</h3>
          <p>시간대별/요일별 그래프 예시</p>
        </div>
        <div className="section">
          <h3>예약 완료율 및 미방문율</h3>
          <p>오늘 예약: {reservationStats.dailyReservations}건</p>
          <p>이번 주 예약: {reservationStats.weeklyReservations}건</p>
          <p>미방문(노쇼): {reservationStats.noShow}건</p>
          <p>방문 완료: {reservationStats.visited}건</p>
        </div>
        <div className="section">
          <h3>방문 예약 고객 선호 상품 분석</h3>
          <p>선호 상품 예시: 냉동만두, 우유, 치즈 등</p>
        </div>
      </main>
    </div>
  );
};

export default ReservationAnalysisPage;
