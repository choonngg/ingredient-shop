import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../../../components/seller/Header';
import Footer from '../../../components/seller/Footer';
import styles from '../../../styles/seller/App.module.css';

const DataAnalysisPage = () => {
    const { martId } = useParams();

    return (
        <>
            <Header />
            <main>
                <div className={styles["mart-dashboard-container"]}>
                    <aside className={styles["sidebar"]}>
                        <h3>데이터 분석</h3>
                        <ul>
                            <li><Link to={`/seller/mart/${martId}/data`}>메인 대시보드</Link></li>
                            <li><Link to={`/seller/mart/${martId}/data/sales`}>판매 분석</Link></li>
                            <li><Link to={`/seller/mart/${martId}/data/inventory`}>재고 분석</Link></li>
                            <li><Link to={`/seller/mart/${martId}/data/reservations`}>예약 분석</Link></li>
                            <li><Link to={`/seller/mart/${martId}/data/promotions`}>할인·프로모션 분석</Link></li>
                        </ul>
                    </aside>

                    <main className={styles["main-content"]}>
                        <h2>메인 대시보드</h2>
                        <p>매출 요약, 재고 요약, 예약 요약을 간단히 보여주는 영역</p>

                        {/* 예시 데이터 */}
                        <div className={styles["section"]}>
                            <h3>매출 요약</h3>
                            <p>오늘 매출: 1,000,000원</p>
                            <p>이번 주 매출: 5,000,000원</p>
                        </div>
                        <div className={styles["section"]}>
                            <h3>재고 요약</h3>
                            <p>유통기한 임박 상품 10개</p>
                            <p>재고 부족 상품 5개</p>
                        </div>
                        <div className={styles["section"]}>
                            <h3>예약 요약</h3>
                            <p>오늘 예약: 3건</p>
                            <p>미방문 고객: 1건</p>
                        </div>
                    </main>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default DataAnalysisPage;