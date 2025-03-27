import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../../../components/seller/Header';
import Footer from '../../../components/seller/Footer';
import styles from '../../../styles/seller/App.module.css';

const SalesAnalysisPage = () => {
    const { martId } = useParams();
    const [topProducts, setTopProducts] = useState([]);

    useEffect(() => {
        // 예시 데이터: 가장 많이 판매된 상품 TOP 5
        const mockTopProducts = [
            { name: '상품1', sales: 100 },
            { name: '상품2', sales: 80 },
            { name: '상품3', sales: 70 },
            { name: '상품4', sales: 50 },
            { name: '상품5', sales: 30 },
        ];
        setTopProducts(mockTopProducts);
    }, [martId]);

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
                        <h2>판매 분석</h2>
                        <div className={styles["section"]}>
                            <h3>일별, 주별, 월별 매출 그래프</h3>
                            <p>(차트 라이브러리 예: Chart.js, Recharts 등으로 시각화 예정)</p>
                        </div>
                        <div className={styles["section"]}>
                            <h3>인기 상품 순위 (TOP 5)</h3>
                            <ul>
                                {topProducts.map((product, idx) => (
                                    <li key={idx}>
                                        {product.name} - 판매량: {product.sales}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles["section"]}>
                            <h3>특정 기간 동안의 매출 비교</h3>
                            <p>예: 지난주 vs 이번주, 지난달 vs 이번달 등</p>
                        </div>
                    </main>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default SalesAnalysisPage;