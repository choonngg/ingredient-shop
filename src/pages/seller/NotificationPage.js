// NotificationPage.js

import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from '../../styles/seller/NotificationPage.module.css'; 

const NotificationPage = () => {
  const { martId } = useParams();
  return (
    <div className={styles["mart-dashboard-container"]}>
    <aside className={styles["sidebar"]}>
      <h3>마트 관리</h3>
      <ul>
        <li><Link to="/seller/dashboard">메인 화면</Link></li>
        <li><Link to={`/seller/mart/${martId}/info`}>나의 마트</Link></li>
        <li><Link to={`/seller/mart/${martId}/check`}>등록 상품 확인</Link></li>
        <li><Link to={`/seller/mart/${martId}/register`}>상품 등록</Link></li>
        <li><Link to={`/seller/mart/${martId}/sales`}>판매 내역 확인</Link></li>
        <li><Link to={`/seller/mart/${martId}/customers`}>예약 및 방문 고객 관리</Link></li>
        <li><Link to={`/seller/mart/${martId}/data`}>데이터 분석</Link></li>
        <li><Link to={`/seller/mart/${martId}/notifi`}>공지 및 알림 관리</Link></li>
      </ul>
    </aside>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <div className={styles.section}>
            <div className={styles.sectionHeader}>상품 알림</div>
            <div className={styles.notificationItem}>
              <p>riror 고객님의 감자칩 60g 2개 구매가 취소되었습니다.</p>
            </div>
            <div className={styles.notificationItem}>
              <p>냉장 모짜렐라 치즈 1kg(재고: 2개) 상품이 72시간 뒤 판매 종료됩니다.</p>
            </div>
            <div className={styles.notificationItem}>
              <p>새우깡 120g 상품이 재고가 3개 남았습니다.</p>
            </div>
            <div className={styles.notificationItem}>
              <p></p>
            </div>
            <div className={styles.notificationItem}>
              <p></p>
            </div>
          </div>
          
          <div className={styles.section}>
            <div className={styles.sectionHeader}>고객 공지</div>
            <div className={styles.notificationItem}>
              <p>3월 3일은 영업을 하지 않습니다.</p>
            </div>
            <div className={styles.notificationItem}>
              <p>2월 15일은 영업을 하지 않습니다.</p>
            </div>
            <div className={styles.emptySpace}></div>
            <div className={styles.emptySpace}></div>
          </div>
        </div>

        <div className={styles.rightColumn}>
          <button className={styles.actionButton}>
            고객 공지 등록
          </button>
          
          <button className={styles.actionButton}>
            상품 할인
          </button>
          
          <div className={styles.sideSection}>
            <div className={styles.sideSectionHeader}>시스템 공지</div>
            <div className={styles.systemNotice}>
              <p>3월 27일(금) 13:00 - 14:00<br/>서버 점검이 있습니다.</p>
            </div>
            <div className={styles.systemNotice}></div>
            <div className={styles.systemNotice}></div>
            <div className={styles.systemNotice}></div>
            <div className={styles.systemNotice}></div>
            <div className={styles.systemNotice}></div>
            <div className={styles.systemNotice}></div>
            <div className={styles.systemNotice}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationPage;