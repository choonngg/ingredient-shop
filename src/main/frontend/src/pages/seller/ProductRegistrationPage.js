import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../../components/seller/Header';
import Footer from '../../components/seller/Footer';
import styles from '../../styles/seller/ProductRegistrationPage.module.css';

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
      <>
        <Header />
        <main>
          <div className={styles["product-registration-page"]}>
            <div className={styles["mart-dashboard-container"]}>
              <aside className={styles["sidebar"]}>
                <h3>마트 관리</h3>
                <ul>
                  <li><Link to="/seller/dashboard">메인 화면</Link></li>
                  <li><Link to={`/seller/mart/${martId}/info`}>나의 마트</Link></li>
                  <li><Link to={`/seller/mart/${martId}/check`}>등록 상품 확인</Link></li>
                  <li><Link to={`/seller/mart/${martId}/register`}>상품 등록</Link></li>
                  <li><Link to={`/seller/mart/${martId}/sales`}>판매 내역 확인</Link></li>
                </ul>
              </aside>

              <main className={styles["main-content"]}>
                <h2 className={styles["section-title"]}>상품 등록</h2>
                <form onSubmit={handleSubmit} className={styles["product-form"]}>
                  <div className={styles["image-section"]}>
                    <div className={styles["image-upload-area"]} onClick={() => document.getElementById('image-upload').click()}>
                      <div className={styles["image-placeholder"]}>
                        <div className={styles["image-icon"]}></div>
                      </div>

                      <input
                          type="file"
                          id="image-upload"
                          accept="image/*"
                          onChange={handleImageChange}
                          hidden
                      />
                    </div>
                    <p className={styles["image-caption"]}>상품 이미지</p>
                  </div>

                  <div className={styles["form-fields"]}>
                    <div className={styles["form-group"]}>
                      <label htmlFor="productName">상품명</label>
                      <input
                          type="text"
                          id="productName"
                          name="productName"
                          value={formData.productName}
                          onChange={handleChange}
                          className={styles["form-input"]}
                          required
                      />
                    </div>

                    <div className={styles["form-group"]}>
                      <label htmlFor="price">가격</label>
                      <input
                          type="number"
                          id="price"
                          name="price"
                          value={formData.price}
                          onChange={handleChange}
                          className={styles["form-input"]}
                          required
                      />
                      <span className={styles["unit"]}>원</span>
                    </div>

                    <div className={styles["form-group"]}>
                      <label htmlFor="quantity">수량</label>
                      <input
                          type="number"
                          id="quantity"
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleChange}
                          className={styles["form-input"]}
                          required
                      />
                      <span className="unit">개</span>
                    </div>

                    <div className={styles["form-group"]}>
                      <label htmlFor="expirationDate">판매 종료일</label>
                      <input
                          type="date"
                          id="expirationDate"
                          name="expirationDate"
                          value={formData.expirationDate}
                          onChange={handleChange}
                          className={styles["form-input"]}
                          required
                      />
                    </div>

                    <div className={styles["form-group"]}>
                      <label htmlFor="expirationTime">종료 시간</label>
                      <input
                          type="time"
                          id="expirationTime"
                          name="expirationTime"
                          value={formData.expirationTime}
                          onChange={handleChange}
                          className={styles["form-input"]}
                          required
                      />
                    </div>

                    <div className={styles["form-group"]}>
                      <label htmlFor="description">비고</label>
                      <textarea
                          id="description"
                          name="description"
                          value={formData.description}
                          onChange={handleChange}
                          className={styles["form-textarea"]}
                          rows="4"
                      ></textarea>
                    </div>
                  </div>
                </form>

                <div className={styles["button-container"]}>
                  <button type="submit" className={styles["submit-button"]} onClick={handleSubmit}>등록</button>
                </div>
              </main>
            </div>
          </div>
        </main>
        <Footer />
      </>
  );
};

export default ProductRegistrationPage;