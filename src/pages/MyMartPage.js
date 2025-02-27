import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../styles/MyMartPage.css'; // ✅ CSS 파일을 import하여 스타일 적용

const MyMartPage = () => {
  const { martId } = useParams();
  const [martInfo, setMartInfo] = useState(null);

  useEffect(() => {
    const martData = {
      1: {
        name: '마트 A',
        address: '서울시 강남구 00동 123-4',
        contact: '02-123-4567',
        hours: '09:00 ~ 21:00',
        rating: 4.9,
        recentRating: 4.7,
        reviews: [
          {
            user: 'abc***',
            stars: 5,
            time: '1시간 전',
            text: '제품이 설명과 동일하고, 품질도 좋아서 만족합니다.',
            images: ['image1.jpg', 'image2.jpg']
          },
          {
            user: '박**',
            stars: 4,
            time: '3시간 전',
            text: '상품 구매 후 마트에 방문했는데, 매장 안내가 명확해서 쉽게 찾을 수 있었습니다.',
            images: ['image3.jpg', 'image4.jpg', 'image5.jpg']
          }
        ]
      },
      2: {
        name: '마트 B',
        address: '서울시 강남구 00동 123-4',
        contact: '02-123-4567',
        hours: '09:00 ~ 21:00',
        rating: 4.9,
        recentRating: 4.7,
        reviews: [
          {
            user: 'abc***',
            stars: 5,
            time: '1시간 전',
            text: '제품이 설명과 동일하고, 품질도 좋아서 만족합니다.',
            images: ['image1.jpg', 'image2.jpg']
          },
          {
            user: '박**',
            stars: 4,
            time: '3시간 전',
            text: '상품 구매 후 마트에 방문했는데, 매장 안내가 명확해서 쉽게 찾을 수 있었습니다.',
            images: ['image3.jpg', 'image4.jpg', 'image5.jpg']
          }
        ]
      },
      3: {
        name: '마트 C',
        address: '서울시 강남구 00동 123-4',
        contact: '02-123-4567',
        hours: '09:00 ~ 21:00',
        rating: 4.9,
        recentRating: 4.7,
        reviews: [
          {
            user: 'abc***',
            stars: 5,
            time: '1시간 전',
            text: '제품이 설명과 동일하고, 품질도 좋아서 만족합니다.',
            images: ['image1.jpg', 'image2.jpg']
          },
          {
            user: '박**',
            stars: 4,
            time: '3시간 전',
            text: '상품 구매 후 마트에 방문했는데, 매장 안내가 명확해서 쉽게 찾을 수 있었습니다.',
            images: ['image3.jpg', 'image4.jpg', 'image5.jpg']
          }
        ]
      }
    };

    setMartInfo(martData[martId]);
  }, [martId]);

  if (!martInfo) {
    return <p>마트 정보를 불러오는 중...</p>;
  }

  return (
    <div className="mart-dashboard-container">
      <aside className="sidebar">
        <h3>마트 관리</h3>
        <ul>
          <li><Link to="/dashboard">메인 화면</Link></li>
          <li><Link to={`/mart/${martId}/info`}>나의 마트</Link></li>
          <li><Link to={`/mart/${martId}/check`}>등록 상품 확인</Link></li>
          <li><Link to={`/mart/${martId}/register`}>상품 등록</Link></li>
          <li><Link to={`/mart/${martId}/sales`}>판매 내역 확인</Link></li>
        </ul>
      </aside>


      <div className="mymart-container">
      <h2>{martInfo.name}</h2>
      <div className="mart-info">
        <div className="map-section">지도</div>
        <div className="details">
          <p><strong>주소:</strong> {martInfo.address}</p>
          <p><strong>연락처:</strong> {martInfo.contact}</p>
          <p><strong>운영시간:</strong> {martInfo.hours}</p>
        </div>
      </div>
      </div>

      <div class="ratings-reviews-container">
        <div className="ratings">
        <div className="rating-box">
          <h3>전체 평점</h3>
          <p>⭐ {martInfo.rating}점</p>
        </div>
        <div className="rating-box">
          <h3>최근 3개월 평점 평균</h3>
          <p>⭐ {martInfo.recentRating}점</p>
        </div>
        </div>

        <div className="reviews">
        <h3>상품 리뷰</h3>
        {martInfo.reviews.map((review, index) => (
          <div key={index} className="review">
            <p><strong>{review.user}</strong> | ⭐ {review.stars} | {review.time}</p>
            <p>{review.text}</p>
            <div className="review-images">
              {review.images.map((img, idx) => (
                <div key={idx} className="image-box">이미지</div>
              ))}
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default MyMartPage;