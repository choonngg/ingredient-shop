// ProductCheckPage.js
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../../components/seller/Header';
import Footer from '../../components/seller/Footer';
import styles from '../../styles/seller/ProductCheckPage.module.css';

const ProductCheckPage = () => {
  const { martId } = useParams();
  const [products, setProducts] = useState([]);
  const [selectedTab, setSelectedTab] = useState('판매중');
  const tabOptions = ['판매중', '품절', '숨김'];
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    // Mock data fetching
    const mockProducts = [
      {
        id: 1,
        image: '이미지',
        name: '상품1',
        price: '0,000원',
        stock: '00개',
        registrationDate: '2025-00-00',
        endDate: '2025-00-00',
        status: '판매중',
        note: '',
      },
      {
        id: 2,
        image: '이미지',
        name: '상품2',
        price: '0,000원',
        stock: '00개',
        registrationDate: '2025-00-00',
        endDate: '2025-00-00',
        status: '판매중',
        note: '',
      },
      {
        id: 3,
        image: '이미지',
        name: '상품3',
        price: '0,000원',
        stock: '00개',
        registrationDate: '2025-00-00',
        endDate: '2025-00-00',
        status: '판매중',
        note: '',
      },
      {
        id: 4,
        image: '이미지',
        name: '상품4',
        price: '0,000원',
        stock: '00개',
        registrationDate: '2025-00-00',
        endDate: '2025-00-00',
        status: '판매중',
        note: '',
      },
      {
        id: 5,
        image: '이미지',
        name: '상품5',
        price: '0,000원',
        stock: '00개',
        registrationDate: '2025-00-00',
        endDate: '2025-00-00',
        status: '판매중',
        note: '',
      },
      {
        id: 6,
        image: '이미지',
        name: '상품6',
        price: '0,000원',
        stock: '00개',
        registrationDate: '2025-00-00',
        endDate: '2025-00-00',
        status: '판매중',
        note: '',
      },
      {
        id: 7,
        image: '이미지',
        name: '상품7',
        price: '0,000원',
        stock: '00개',
        registrationDate: '2025-00-00',
        endDate: '2025-00-00',
        status: '판매중',
        note: '',
      },
      {
        id: 8,
        image: '이미지',
        name: '상품8',
        price: '0,000원',
        stock: '00개',
        registrationDate: '2025-00-00',
        endDate: '2025-00-00',
        status: '판매중',
        note: '',
      },
      {
        id: 9,
        image: '이미지',
        name: '상품9',
        price: '0,000원',
        stock: '00개',
        registrationDate: '2025-00-00',
        endDate: '2025-00-00',
        status: '판매중',
        note: '',
      },
      {
        id: 10,
        image: '이미지',
        name: '상품10',
        price: '0,000원',
        stock: '00개',
        registrationDate: '2025-00-00',
        endDate: '2025-00-00',
        status: '판매중',
        note: '',
      },
    ];

    setProducts(mockProducts);
  }, []);

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
    setSelectedProducts([]);
    setSelectAll(false);
  };

  const handleSelectAll = (e) => {
    const isChecked = e.target.checked;
    setSelectAll(isChecked);

    if (isChecked) {
      const filteredProducts = products
          .filter(product => product.status === selectedTab)
          .map(product => product.id);
      setSelectedProducts(filteredProducts);
    } else {
      setSelectedProducts([]);
    }
  };

  const handleSelectProduct = (productId) => {
    if (selectedProducts.includes(productId)) {
      setSelectedProducts(selectedProducts.filter(id => id !== productId));
      setSelectAll(false);
    } else {
      setSelectedProducts([...selectedProducts, productId]);

      // Check if all products are now selected
      const filteredProducts = products.filter(product => product.status === selectedTab);
      if (selectedProducts.length + 1 === filteredProducts.length) {
        setSelectAll(true);
      }
    }
  };

  const handleEdit = () => {
    if (selectedProducts.length === 0) {
      alert('수정할 상품을 선택해주세요.');
      return;
    }
    console.log('수정할 상품:', selectedProducts);
    // 수정 기능 구현
  };

  const handleRemove = () => {
    if (selectedProducts.length === 0) {
      alert('제거할 상품을 선택해주세요.');
      return;
    }
    console.log('제거할 상품:', selectedProducts);
    // 제거 기능 구현
  };

  const filteredProducts = products.filter(product => product.status === selectedTab);

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
            <div className={styles["product-check-content"]}>
              <div className={styles["title-filter-action-container"]}>
                <div className={styles["title-filter-group"]}>
                  <h2 className={styles["section-title"]}>등록 상품 확인</h2>
                  <div className={styles["filter-tabs-container"]}>
                    <div className={styles["filter-tabs"]}>
                      {tabOptions.map(tab => (
                          <div
                              key={tab}
                              className={`filter-tab ${selectedTab === tab ? 'active' : ''}`}
                              onClick={() => handleTabChange(tab)}
                          >
                            {tab}
                          </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={styles["action-buttons"]}>
                  <button className={styles["btn"]} onClick={handleEdit}>수정</button>
                  <button className={styles["btn"]} onClick={handleRemove}>제거</button>
                </div>
              </div>

              <div className={styles["product-table-container"]}>
                <table className={styles["product-table"]}>
                  <thead>
                  <tr>
                    <th>
                      <input
                          type="checkbox"
                          checked={selectAll}
                          onChange={handleSelectAll}
                      />
                    </th>
                    <th>상품이미지</th>
                    <th>상품명</th>
                    <th>가격</th>
                    <th>재고</th>
                    <th>판매 등록일</th>
                    <th>판매 종료일</th>
                    <th>비고</th>
                  </tr>
                  </thead>
                  <tbody>
                  {filteredProducts.map(product => (
                      <tr key={product.id}>
                        <td>
                          <input
                              type="checkbox"
                              checked={selectedProducts.includes(product.id)}
                              onChange={() => handleSelectProduct(product.id)}
                          />
                        </td>
                        <td className={styles["image-placeholder"]}>{product.image}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.stock}</td>
                        <td>{product.registrationDate}</td>
                        <td>{product.endDate}</td>
                        <td>{product.note}</td>
                      </tr>
                  ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
  );
};

export default ProductCheckPage;