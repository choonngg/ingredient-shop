import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../../components/seller/Header';
import Footer from '../../components/seller/Footer';
import styles from '../../styles/seller/CheckSalesHistoryPage.module.css';

const CheckSalesHistoryPage = () => {
  const [salesData, setSalesData] = useState([]);
  const { martId } = useParams();

  useEffect(() => {
    setSalesData([
      {
        id: 1,
        image: '이미지',
        name: '상품1',
        price: '0,000원',
        quantity: '00개',
        buyer: 'OOO',
        time: '2025-00-00 00:00:00',
        total: '0,000원'
      },
      {
        id: 2,
        image: '이미지',
        name: '상품2',
        price: '0,000원',
        quantity: '00개',
        buyer: 'OOO',
        time: '2025-00-00 00:00:00',
        total: '0,000원'
      },
      {
        id: 3,
        image: '이미지',
        name: '상품3',
        price: '0,000원',
        quantity: '00개',
        buyer: 'OOO',
        time: '2025-00-00 00:00:00',
        total: '0,000원'
      },
      {
        id: 4,
        image: '이미지',
        name: '상품4',
        price: '0,000원',
        quantity: '00개',
        buyer: 'OOO',
        time: '2025-00-00 00:00:00',
        total: '0,000원'
      },
      {
        id: 5,
        image: '이미지',
        name: '상품5',
        price: '0,000원',
        quantity: '00개',
        buyer: 'OOO',
        time: '2025-00-00 00:00:00',
        total: '0,000원'
      },
      {
        id: 6,
        image: '이미지',
        name: '상품6',
        price: '0,000원',
        quantity: '00개',
        buyer: 'OOO',
        time: '2025-00-00 00:00:00',
        total: '0,000원'
      },
      {
        id: 7,
        image: '이미지',
        name: '상품7',
        price: '0,000원',
        quantity: '00개',
        buyer: 'OOO',
        time: '2025-00-00 00:00:00',
        total: '0,000원'
      },
      {
        id: 8,
        image: '이미지',
        name: '상품8',
        price: '0,000원',
        quantity: '00개',
        buyer: 'OOO',
        time: '2025-00-00 00:00:00',
        total: '0,000원'
      },
      {
        id: 9,
        image: '이미지',
        name: '상품9',
        price: '0,000원',
        quantity: '00개',
        buyer: 'OOO',
        time: '2025-00-00 00:00:00',
        total: '0,000원'
      },
      {
        id: 10,
        image: '이미지',
        name: '상품10',
        price: '0,000원',
        quantity: '00개',
        buyer: 'OOO',
        time: '2025-00-00 00:00:00',
        total: '0,000원'
      },
    ]);
  }, []);

  const handleRowClick = (sale) => {
    console.log('선택된 판매 내역:', sale);
    // 추가 기능 구현 (상세 정보 모달 등)
  };

  return (
      <>
        <Header />
        <main>
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
            <main className={styles["main-content"]}>
              <div className={styles["sales-history-container"]}>
                <h2>판매 내역 확인</h2>
                <div className={styles["table-container"]}>
                  <table className={styles["sales-table"]}>
                    <thead>
                    <tr>
                      <th>상품이미지</th>
                      <th>상품명</th>
                      <th>가격</th>
                      <th>수량</th>
                      <th>구매자</th>
                      <th>판매한 시간</th>
                      <th>총 판매액</th>
                    </tr>
                    </thead>
                    <tbody>
                    {salesData.map((sale, index) => (
                        <tr key={sale.id}>
                          <td>
                            <div className={styles["image-placeholder"]}>{sale.image}</div>
                          </td>
                          <td>{sale.name}</td>
                          <td>{sale.price}</td>
                          <td>{sale.quantity}</td>
                          <td>{sale.buyer}</td>
                          <td>{sale.time}</td>
                          <td>{sale.total}</td>
                        </tr>
                    ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </main>
          </div>
        </main>
        <Footer />
      </>
  );
};

export default CheckSalesHistoryPage;