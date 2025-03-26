import React, { useState } from 'react';
import styles from '../../styles/buyer/Cart.module.css';
import Header from '../../components/buyer/Header';
import Footer from '../../components/buyer/Footer';
import CartItem from '../../components/buyer/CartItem';

const Cart = () => {
    // 장바구니 아이템 상태 관리
    const [cartItems, setCartItems] = useState(Array(10).fill().map((_, index) => ({
        id: index + 1,
        name: `상품명 ${index + 1}`,
        price: Math.floor(Math.random() * 50000) + 10000,
        selected: true,
        image: "/no-image.png" // 실제 이미지 경로로 대체해야 함
    })));

    // 전체 선택 상태
    const [selectAll, setSelectAll] = useState(true);

    // 총 금액 계산
    const totalAmount = cartItems
        .filter(item => item.selected)
        .reduce((sum, item) => sum + item.price, 0);

    // 여기에 필요한 추가 상태 관리 로직을 구현할 수 있습니다

    // 전체 선택/해제 핸들러
    const handleSelectAll = () => {
        const newSelectAll = !selectAll;
        setSelectAll(newSelectAll);
        setCartItems(cartItems.map(item => ({
            ...item,
            selected: newSelectAll
        })));
    };

    // 개별 아이템 선택/해제 핸들러
    const handleSelectItem = (id) => {
        setCartItems(cartItems.map(item => {
            if (item.id === id) {
                return { ...item, selected: !item.selected };
            }
            return item;
        }));

        // 모든 아이템이 선택되었는지 확인
        const allSelected = cartItems.every(item => item.selected);
        setSelectAll(allSelected);
    };

    // 선택된 항목 삭제 핸들러
    const handleDeleteSelected = () => {
        // 선택된 항목을 제외한 새 배열을 만들어 상태 업데이트
        setCartItems(cartItems.filter(item => !item.selected));
        setSelectAll(false);
    };

    return (
        <div className={styles.cartWrapper}>
            <Header />

            <div className={styles.cartContainer}>
                <br />

                <div className={styles.titleContainer}>
                    <h1 className={styles.cartTitle}>장바구니</h1>
                    <div className={styles.mobileSelectOptions}>
                        <button
                            className={`${styles.selectButton} ${selectAll ? styles.active : ''}`}
                            onClick={handleSelectAll}
                        >
                            전체선택
                        </button>
                        <button
                            className={styles.selectButton}
                            onClick={handleDeleteSelected}
                        >
                            선택삭제
                        </button>
                    </div>
                </div>

                <div className={styles.cartActions}>
                    <div className={styles.desktopSelectOptions}>
                        <button
                            className={`${styles.selectButton} ${selectAll ? styles.active : ''}`}
                            onClick={handleSelectAll}
                        >
                            전체선택
                        </button>
                        <button
                            className={styles.selectButton}
                            onClick={handleDeleteSelected}
                        >
                            선택삭제
                        </button>
                    </div>

                    <div className={styles.cartSummary}>
                        <p className={styles.totalAmount}>총 금액: {totalAmount.toLocaleString()}원</p>
                        <button className={styles.purchaseButton}>구매하기</button>
                    </div>
                </div>

                <div className={styles.cartItemsContainer}>
                    <div className={styles.cartItemsGrid}>
                        {cartItems.map(item => (
                            <CartItem
                                key={item.id}
                                item={item}
                                onSelect={() => handleSelectItem(item.id)}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Cart;