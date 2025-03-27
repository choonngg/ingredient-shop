import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LocationPopup from './LocationPopup';
import AlarmPopup from './AlarmPopup';
import UseGeoLocation from "./UseGeoLocation";

import { BiCategory } from "react-icons/bi";
import { BsCart4 } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegMap, FaSearch, FaRegBell, FaRegUser } from "react-icons/fa";

import headerStyles from '../../styles/buyer/Header.module.css';


const IconButton = ({ icon, label, onClick, className, ariaLabel }) => {
    return (
        <div className={headerStyles["icon-button-container"]}>
            <button
                className={className}
                aria-label={ariaLabel || label}
                onClick={onClick}
            >
                {icon}
            </button>
            <div className={headerStyles["icon-label"]}>
                {label}
            </div>
        </div>
    );
};

const DropdownMenu = ({ icon, label, menuItems, className, ariaLabel, menuClassName }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // hover 이벤트 핸들러
    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    return (
        <div
            className={headerStyles["dropdown-container"]}
            ref={dropdownRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className={headerStyles["icon-button-container"]}>
                <button
                    className={className}
                    aria-label={ariaLabel || label}
                >
                    {icon}
                </button>
                <div className={headerStyles["icon-label"]}>
                    {label}
                </div>
            </div>

            {isOpen && (
                <div className={menuClassName || headerStyles["dropdown-menu"]}>
                    {menuItems}
                </div>
            )}
        </div>
    );
};

const Header = () => {
    const [isLocationOpen, setIsLocationOpen] = useState(false);
    const [isAlarmOpen, setIsAlarmOpen] = useState(false);
    const navigate = useNavigate();
    const location = UseGeoLocation();

    const handleSearch = (e) => {
        e.preventDefault();
        const query = e.target.query.value;
        navigate(`/buyer/search?query=${query}`);
    };

    const handleCartClick = () => {
        navigate('/buyer/cart');
    };

    const handleMapClick = () => {
        navigate('/buyer/map');
    };

    const handleAlarmClick = () => {
        setIsAlarmOpen(true);
    };

    // 카테고리 메뉴 아이템
    const categoryMenuItems = (
        <>
            <h2>카테고리</h2>
            <br />
            <a href="#">채소</a>
            <a href="#">과일</a>
            <a href="#">뭐 이런거</a>
        </>
    );

    // 사용자 메뉴 아이템
    const userMenuItems = (
        <>
            <a href="#">로그아웃</a>
            <a href="/buyer/purchase">구매상품</a>
        </>
    );

    return (
        <header>
            <div className={headerStyles["header-content-wrapper"]}>
                <div className={headerStyles["header-main"]}>
                    <div className={headerStyles["left-section"]}>
                        <h1 className={headerStyles["shop-name"]}>
                            <Link to="/">
                                <img src="/buyer/shop_logo.png" alt="쇼핑몰 이름" className={headerStyles["shop-logo"]}/>
                            </Link>
                        </h1>
                    </div>
                    <div className={headerStyles.right}>
                        <form onSubmit={handleSearch} className={headerStyles["search-form"]} autoComplete="off">
                            <input
                                type="text"
                                name="query"
                                className={headerStyles["search-box"]}
                                placeholder="검색어를 입력해주세요"
                                autoComplete="off"
                            />
                            <button type="submit" className={headerStyles["search-button"]}>
                                <FaSearch />
                            </button>
                        </form>
                    </div>
                    {isLocationOpen && <LocationPopup onClose={() => setIsLocationOpen(false)} currentLocation={location} />}
                    {isAlarmOpen && <AlarmPopup onClose={() => setIsAlarmOpen(false)}/>}
                </div>
                <nav className={headerStyles["header-nav"]}>
                    <div className={headerStyles["nav-top"]}>
                        <div className={headerStyles["category-menu"]}>
                            <DropdownMenu
                                icon={<BiCategory size={23} />}
                                label="카테고리"
                                menuItems={categoryMenuItems}
                                className={`${headerStyles["category-btn"]} ${headerStyles["icon-btn"]}`}
                                ariaLabel="카테고리"
                                menuClassName={headerStyles["category-dropdown"]}
                            />
                        </div>
                        <IconButton
                            icon={<FaRegMap size={23} />}
                            label="지도보기"
                            onClick={handleMapClick}
                            className={`${headerStyles["map-view"]} ${headerStyles["icon-btn"]}`}
                            ariaLabel="지도보기"
                        />
                    </div>
                    <div className={headerStyles["nav-bottom"]}>
                        <IconButton
                           icon={<BsCart4 size={26} />}
                           label="장바구니"
                           onClick={handleCartClick}
                           className={`${headerStyles["cart-btn"]} ${headerStyles["icon-btn"]}`}
                           ariaLabel="장바구니"
                        />
                        <IconButton
                            icon={<FaRegBell size={22} />}
                            label="알림"
                            onClick={handleAlarmClick}
                            className={`${headerStyles["notification-btn"]} ${headerStyles["icon-btn"]}`}
                            ariaLabel="알림"
                        />
                        <div className={headerStyles["user-menu"]}>
                            <DropdownMenu
                                icon={<FaRegUser size={20} />}
                                label="사용자"
                                menuItems={userMenuItems}
                                className={`${headerStyles["user-btn"]} ${headerStyles["icon-btn"]}`}
                                ariaLabel="사용자"
                                menuClassName={headerStyles["user-dropdown"]}
                            />
                        </div>
                    </div>
                </nav>
            </div>
            <hr className={headerStyles["header-hr"]}></hr>
        </header>
    );
};

export default Header;