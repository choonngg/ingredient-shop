import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LocationPopup from './LocationPopup';
import HeaderStyles from '../../styles/buyer/Header.module.css';

const Header = () => {
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.query.value;
    navigate(`/buyer/search?query=${query}`);
  };

  return (
    <header>
      <div className={HeaderStyles["top-bar"]}>
        <span>즐겨찾기</span>
        <Link to="/seller">판매자공간</Link>
      </div>
      <hr class={HeaderStyles["top-bar-hr"]}></hr>
      <div className={HeaderStyles["header-main"]}>
        <h1 className={HeaderStyles["shop-name"]}>
          <Link to="/">쇼핑몰 이름</Link>
        </h1>
        <div className={HeaderStyles.right}>
          <button className={HeaderStyles["location-btn"]} onClick={() => setIsLocationOpen(true)}>
            위치설정
          </button>
          <form onSubmit={handleSearch} style={{ flex: 1 }}>
            <input type="text" name="query" className={HeaderStyles["search-box"]} placeholder="검색어 입력" />
            <button type="submit" style={{ display: 'none' }}>검색</button>
          </form>
        </div>
        {isLocationOpen && <LocationPopup onClose={() => setIsLocationOpen(false)} />}
      </div>
      <nav className={HeaderStyles["header-nav"]}>
        <div className={HeaderStyles["nav-top"]}>
          <div className={HeaderStyles["category-menu"]}>
            <button className={HeaderStyles["category-btn"]}>카테고리</button>
            <div className={HeaderStyles["dropdown-menu"]}>
              <h3>카테고리</h3>
              <a href="#">과일</a>
              <a href="#">채소</a>
              <a href="#">뭐 이런거</a>
            </div>
          </div>
          <Link to="/buyer/map" className={HeaderStyles["map-view"]}>지도보기</Link>
        </div>
        <div className={HeaderStyles["nav-bottom"]}>
          <button className={HeaderStyles["cart-btn"]}>장바구니</button>
          <div className={HeaderStyles["alarm-menu"]}>
            <button className={HeaderStyles["notification-btn"]}>알림</button>
            <div className={HeaderStyles["dropdown-menu"]}>
              <a>알림알림알림알림알림알림알림</a>
              <a>알림알림알림알림알림알림알림</a>
            </div>
          </div>
          <div className={HeaderStyles["user-menu"]}>
            <button className={HeaderStyles["user-btn"]}>사용자</button>
            <div className={HeaderStyles["dropdown-menu"]}>
              <a href="#">로그아웃</a><br></br>
              <a href="#">구매중인 상품</a><br></br>
              <a href="#">구매했던 상품</a>
            </div>
          </div>
        </div>
      </nav>
      <hr class={HeaderStyles["header-hr"]}></hr>
    </header>
  );
};

export default Header;