import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../styles/ProductRegistrationPage.css';

const ProductRegistrationPage = () => {
  const { martId } = useParams();
  const [formData, setFormData] = useState({
    productName: '',
    price: '',
    quantity: '',
    expirationDate: '',
    expirationTime: '',
    description: ''
  });
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('제출된 데이터:', formData);
    // API 호출 또는 상태 관리 로직 추가
    alert('상품이 등록되었습니다.');
    // 폼 초기화
    setFormData({
      productName: '',
      price: '',
      quantity: '',
      expirationDate: '',
      description: ''
    });
    setImagePreview(null);
  };

  return (
    <div className="product-registration-page">
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

        <main className="main-content">
          <h2 className="section-title">상품 등록</h2>
          <form onSubmit={handleSubmit} className="product-form">
            <div className="image-section">
              <div className="image-upload-area" onClick={() => document.getElementById('image-upload').click()}>
                  <div className="image-placeholder">
                    <div className="image-icon"></div>
                  </div>
               
                <input
                  type="file"
                  id="image-upload"
                  accept="image/*"
                  onChange={handleImageChange}
                  hidden
                />
              </div>
              <p className="image-caption">상품 이미지</p>
            </div>

            <div className="form-fields">
              <div className="form-group">
                <label htmlFor="productName">상품명</label>
                <input
                  type="text"
                  id="productName"
                  name="productName"
                  value={formData.productName}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="price">가격</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
                <span className="unit">원</span>
              </div>

              <div className="form-group">
                <label htmlFor="quantity">수량</label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
                <span className="unit">개</span>
              </div>

              <div className="form-group">
                <label htmlFor="expirationDate">판매 종료일</label>
                <input
                  type="date"
                  id="expirationDate"
                  name="expirationDate"
                  value={formData.expirationDate}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="expirationTime">종료 시간</label>
                <input
                  type="time"
                  id="expirationTime"
                  name="expirationTime"
                  value={formData.expirationTime}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">비고</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="form-textarea"
                  rows="4"
                ></textarea>
              </div>
            </div>
          </form>
          
          <div className="button-container">
            <button type="submit" className="submit-button" onClick={handleSubmit}>등록</button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProductRegistrationPage;