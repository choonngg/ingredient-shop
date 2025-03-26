import React, { useState, useEffect } from 'react';
import Header from '../../components/buyer/Header';
import Footer from '../../components/buyer/Footer';
import PurchaseCard from '../../components/buyer/PurchaseCard';
import styles from '../../styles/buyer/Purchase.module.css';

const PurchasePage = () => {
    const [purchases, setPurchases] = useState([]);
    const [visibleItems, setVisibleItems] = useState(15);
    const [loading, setLoading] = useState(true);
    const [hasMore, setHasMore] = useState(true);

    // 구매 완료 상품 데이터를 가져오는 함수
    useEffect(() => {
        const fetchPurchases = async () => {
            setLoading(true);
            try {
                // 실제 구현에서는 API 호출로 대체
                // 테스트를 위한 목업 데이터
                setTimeout(() => {
                    const mockData = Array.from({ length: 35 }, (_, index) => ({
                        id: index + 1,
                        productName: `상품명 ${index + 1}`,
                        price: Math.floor(Math.random() * 100000) + 10000,
                        purchaseDate: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
                        image: `/no-image.png`,
                        seller: `판매자이름`,
                        status: '구매확정'
                    }));

                    setPurchases(mockData);
                    setHasMore(mockData.length > visibleItems);
                    setLoading(false);
                }, 800);
            } catch (error) {
                console.error('구매 내역을 불러오는 데 실패했습니다:', error);
                setLoading(false);
            }
        };

        fetchPurchases();
    }, []);

    // 더보기 버튼 클릭 핸들러
    const handleLoadMore = () => {
        const newVisibleItems = visibleItems + 15;
        setVisibleItems(newVisibleItems);
        setHasMore(purchases.length > newVisibleItems);
    };

    // 날짜 포맷팅 함수
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Date(dateString).toLocaleDateString('ko-KR', options);
    };

    // 가격 포맷팅 함수
    const formatPrice = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '원';
    };


    return (
        <div className={styles.completedPage}>
            <Header />
            <main className={styles.mainContainer}>
                <div className={styles.pageHeader}>
                    <h1 className={styles.pageTitle}>구매 완료 상품</h1>
                    <p className={styles.pageDescription}>구매가 완료된 상품 목록입니다.</p>
                </div>

                {loading ? (
                    <div className={styles.loadingContainer}>
                        <div className={styles.loadingSpinner}></div>
                    </div>
                ) : purchases.length === 0 ? (
                    <div className={styles.emptyState}>
                        <p className={styles.emptyMessage}>구매 완료된 상품이 없습니다.</p>
                    </div>
                ) : (
                    <>
                        <div className={styles.productGrid}>
                            {purchases.slice(0, visibleItems).map((purchase) => (
                                <PurchaseCard
                                    key={purchase.id}
                                    purchase={purchase}
                                    formatDate={formatDate}
                                    formatPrice={formatPrice}
                                />
                            ))}
                        </div>

                        {hasMore && (
                            <div className={styles.loadMoreContainer}>
                                <button
                                    onClick={handleLoadMore}
                                    className={styles.loadMoreButton}
                                >
                                    더보기 ({visibleItems}/{purchases.length})
                                </button>
                            </div>
                        )}
                    </>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default PurchasePage;