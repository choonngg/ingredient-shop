import React, { useRef, useEffect, useState } from 'react';
import styles from '../../styles/buyer/AlarmPopup.module.css';

const AlarmPopup = ({ onClose }) => {
    const popupRef = useRef(null);
    const [notifications, setNotifications] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // 팝업 외부 클릭 시 닫기
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    useEffect(() => {
        // 알림 데이터를 가져오는 함수
        const fetchNotifications = async () => {
            setIsLoading(true);
            try {
                // 실제 구현에서는 API 호출로 대체
                // const response = await fetch('/api/notifications');
                // const data = await response.json();

                // 테스트용 데이터
                const mockData = [
                    {
                        id: 1,
                        message: "새로운 주문이 배송 완료되었습니다.",
                        date: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30분 전
                        isRead: false
                    },
                    {
                        id: 2,
                        message: "할인 쿠폰이 발급되었습니다. 프로필에서 확인하세요.",
                        date: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2시간 전
                        isRead: false
                    },
                    {
                        id: 3,
                        message: "장바구니에 담아둔 상품의 재고가 얼마 남지 않았습니다.",
                        date: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1일 전
                        isRead: true
                    }
                ];

                // 시간 지연 시뮬레이션 (실제 API 호출을 흉내냄)
                setTimeout(() => {
                    setNotifications(mockData);
                    setIsLoading(false);
                }, 500);
            } catch (error) {
                console.error('알림을 가져오는 중 오류 발생:', error);
                setIsLoading(false);
            }
        };

        fetchNotifications();
    }, []);

    // 알림 읽음 처리 함수
    const handleMarkAsRead = async (id) => {
        try {
            // 실제 구현에서는 API 호출로 대체
            // await fetch(`/api/notifications/${id}/read`, { method: 'PATCH' });

            // 프론트엔드에서만 상태 업데이트
            setNotifications(prev =>
                prev.map(notification =>
                    notification.id === id
                        ? { ...notification, isRead: true }
                        : notification
                )
            );
        } catch (error) {
            console.error('알림 읽음 처리 중 오류 발생:', error);
        }
    };

    // 모든 알림 읽음 처리 함수
    const handleMarkAllAsRead = async () => {
        try {
            // 실제 구현에서는 API 호출로 대체
            // await fetch('/api/notifications/read-all', { method: 'PATCH' });

            // 프론트엔드에서만 상태 업데이트
            setNotifications(prev =>
                prev.map(notification => ({ ...notification, isRead: true }))
            );
        } catch (error) {
            console.error('모든 알림 읽음 처리 중 오류 발생:', error);
        }
    };

    // 날짜 포맷팅 함수
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffMinutes = Math.floor((now - date) / (1000 * 60));

        if (diffMinutes < 60) {
            return `${diffMinutes}분 전`;
        } else if (diffMinutes < 60 * 24) {
            return `${Math.floor(diffMinutes / 60)}시간 전`;
        } else {
            return `${Math.floor(diffMinutes / (60 * 24))}일 전`;
        }
    };

    return (
        <div className={styles.popupOverlay}>
            <div className={styles.popupContainer} ref={popupRef}>
                <div className={styles.popupHeader}>
                    <h3>알림</h3>
                    {notifications.length > 0 && (
                        <button
                            onClick={handleMarkAllAsRead}
                            className={styles.readAllButton}
                            disabled={notifications.every(n => n.isRead)}
                        >
                            모두 읽음 처리
                        </button>
                    )}
                    <button onClick={onClose} className={styles.closeButton}>×</button>
                </div>

                <div className={styles.popupContent}>
                    {isLoading ? (
                        <div className={styles.loadingIndicator}>
                            <p>알림을 불러오는 중...</p>
                        </div>
                    ) : notifications.length > 0 ? (
                        <ul className={styles.notificationList}>
                            {notifications.map((notification) => (
                                <li
                                    key={notification.id}
                                    className={`${styles.notificationItem} ${notification.isRead ? styles.read : styles.unread}`}
                                    onClick={() => !notification.isRead && handleMarkAsRead(notification.id)}
                                >
                                    <div className={styles.notificationContent}>
                                        <p>{notification.message}</p>
                                        <span className={styles.notificationTime}>
                      {formatDate(notification.date)}
                    </span>
                                    </div>
                                    {!notification.isRead && <span className={styles.unreadDot}></span>}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className={styles.emptyNotification}>새로운 알림이 없습니다.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AlarmPopup;