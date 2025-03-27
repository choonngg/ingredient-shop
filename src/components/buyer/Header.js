// import React, { useState, useRef, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import LocationPopup from './LocationPopup';
// import AlarmPopup from './AlarmPopup';
// import UseGeoLocation from "./UseGeoLocation";
//
// import { BiCategory } from "react-icons/bi";
// import { BsCart4 } from "react-icons/bs";
// import { IoLocationOutline } from "react-icons/io5";
// import { FaRegMap, FaSearch, FaRegBell, FaRegUser } from "react-icons/fa";
//
// import headerStyles from '../../styles/buyer/Header.module.css';
//
//
// const IconButton = ({ icon, label, onClick, className, ariaLabel }) => {
//     return (
//         <div className={headerStyles["icon-button-container"]}>
//             <button
//                 className={className}
//                 aria-label={ariaLabel || label}
//                 onClick={onClick}
//             >
//                 {icon}
//             </button>
//             <div className={headerStyles["icon-label"]}>
//                 {label}
//             </div>
//         </div>
//     );
// };
//
// const DropdownMenu = ({ icon, label, menuItems, className, ariaLabel, menuClassName }) => {
//     const [isOpen, setIsOpen] = useState(false);
//     const dropdownRef = useRef(null);
//
//     // hover 이벤트 핸들러
//     const handleMouseEnter = () => {
//         setIsOpen(true);
//     };
//
//     const handleMouseLeave = () => {
//         setIsOpen(false);
//     };
//
//     return (
//         <div
//             className={headerStyles["dropdown-container"]}
//             ref={dropdownRef}
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//         >
//             <div className={headerStyles["icon-button-container"]}>
//                 <button
//                     className={className}
//                     aria-label={ariaLabel || label}
//                 >
//                     {icon}
//                 </button>
//                 <div className={headerStyles["icon-label"]}>
//                     {label}
//                 </div>
//             </div>
//
//             {isOpen && (
//                 <div className={menuClassName || headerStyles["dropdown-menu"]}>
//                     {menuItems}
//                 </div>
//             )}
//         </div>
//     );
// };
//
// const Header = () => {
//     const [isLocationOpen, setIsLocationOpen] = useState(false);
//     const [isAlarmOpen, setIsAlarmOpen] = useState(false);
//     const navigate = useNavigate();
//     const location = UseGeoLocation();
//
//     const handleSearch = (e) => {
//         e.preventDefault();
//         const query = e.target.query.value;
//         navigate(`/buyer/search?query=${query}`);
//     };
//
//     const handleCartClick = () => {
//         navigate('/buyer/cart');
//     };
//
//     const handleMapClick = () => {
//         navigate('/buyer/map');
//     };
//
//     const handleLocationClick = () => {
//         setIsLocationOpen(true);
//     };
//
//     const handleAlarmClick = () => {
//         setIsAlarmOpen(true);
//     };
//
//     // 카테고리 메뉴 아이템
//     const categoryMenuItems = (
//         <>
//             <h2>카테고리</h2>
//             <br />
//             <a href="#">채소</a>
//             <a href="#">채소</a>
//             <a href="#">뭐 이런거</a>
//         </>
//     );
//
//     // 사용자 메뉴 아이템
//     const userMenuItems = (
//         <>
//             <a href="#">로그아웃</a>
//             <a href="/buyer/cart">장바구니</a>
//             <a href="/buyer/purchase">구매상품</a>
//         </>
//     );
//
//     return (
//         <header>
//             <div className={headerStyles["header-content-wrapper"]}>
//                 <div className={headerStyles["header-main"]}>
//                     <div className={headerStyles["left-section"]}>
//                         <h1 className={headerStyles["shop-name"]}>
//                             <Link to="/">
//                                 <img src="/buyer/shop_logo.png" alt="쇼핑몰 이름" className={headerStyles["shop-logo"]}/>
//                             </Link>
//                         </h1>
//                     </div>
//                     <div className={headerStyles.right}>
//                         <form onSubmit={handleSearch} className={headerStyles["search-form"]} autoComplete="off">
//                             <input
//                                 type="text"
//                                 name="query"
//                                 className={headerStyles["search-box"]}
//                                 placeholder="검색어를 입력해주세요"
//                                 autoComplete="off"
//                             />
//                             <button type="submit" className={headerStyles["search-button"]}>
//                                 <FaSearch />
//                             </button>
//                         </form>
//                     </div>
//                     {isLocationOpen && <LocationPopup onClose={() => setIsLocationOpen(false)}/>}
//                     {isAlarmOpen && <AlarmPopup onClose={() => setIsAlarmOpen(false)}/>}
//                 </div>
//                 <nav className={headerStyles["header-nav"]}>
//                     <div className={headerStyles["nav-top"]}>
//                         <div className={headerStyles["category-menu"]}>
//                             <DropdownMenu
//                                 icon={<BiCategory size={23} />}
//                                 label="카테고리"
//                                 menuItems={categoryMenuItems}
//                                 className={`${headerStyles["category-btn"]} ${headerStyles["icon-btn"]}`}
//                                 ariaLabel="카테고리"
//                                 menuClassName={headerStyles["category-dropdown"]}
//                             />
//                         </div>
//                         <IconButton
//                             icon={<FaRegMap size={23} />}
//                             label="지도보기"
//                             onClick={handleMapClick}
//                             className={`${headerStyles["map-view"]} ${headerStyles["icon-btn"]}`}
//                             ariaLabel="지도보기"
//                         />
//                         <IconButton
//                             icon={<IoLocationOutline size={23} />}
//                             label="위치설정"
//                             onClick={handleLocationClick}
//                             className={`${headerStyles["map-view"]} ${headerStyles["icon-btn"]}`}
//                             ariaLabel="위치설정"
//                         />
//                     </div>
//                     <div className={headerStyles["nav-bottom"]}>
//                         {/*<IconButton*/}
//                         {/*    icon={<BsCart4 size={26} />}*/}
//                         {/*    label="장바구니"*/}
//                         {/*    onClick={handleCartClick}*/}
//                         {/*    className={`${headerStyles["cart-btn"]} ${headerStyles["icon-btn"]}`}*/}
//                         {/*    ariaLabel="장바구니"*/}
//                         {/*/>*/}
//                         <IconButton
//                             icon={<FaRegBell size={22} />}
//                             label="알림"
//                             onClick={handleAlarmClick}
//                             className={`${headerStyles["notification-btn"]} ${headerStyles["icon-btn"]}`}
//                             ariaLabel="알림"
//                         />
//                         <div className={headerStyles["user-menu"]}>
//                             <DropdownMenu
//                                 icon={<FaRegUser size={20} />}
//                                 label="사용자"
//                                 menuItems={userMenuItems}
//                                 className={`${headerStyles["user-btn"]} ${headerStyles["icon-btn"]}`}
//                                 ariaLabel="사용자"
//                                 menuClassName={headerStyles["user-dropdown"]}
//                             />
//                         </div>
//                     </div>
//                 </nav>
//             </div>
//             <hr className={headerStyles["header-hr"]}></hr>
//         </header>
//     );
// };
//
// export default Header;

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
    const [currentAddress, setCurrentAddress] = useState("위치를 불러오는 중...");
    const navigate = useNavigate();
    const location = UseGeoLocation();

    // 네이버 지도 API 스크립트 로드
    useEffect(() => {
        const loadNaverMapsScript = () => {
            if (window.naver) return Promise.resolve();

            return new Promise((resolve) => {
                const script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=YOUR_CLIENT_ID&submodules=geocoder`;
                script.async = true;
                script.onload = () => resolve();
                document.head.appendChild(script);
            });
        };

        loadNaverMapsScript();
    }, []);

    // 위치 정보가 로드되면 주소 가져오기
    useEffect(() => {
        if (location.loaded && location.coordinates && !location.error && window.naver && window.naver.maps && window.naver.maps.Service) {
            const { lat, lng } = location.coordinates;
            fetchAddressFromCoords(lat, lng);
        } else if (location.error) {
            setCurrentAddress("위치를 가져올 수 없습니다");
        }
    }, [location]);

    // 네이버 지도 API를 사용하여 좌표로부터 주소 가져오기
    const fetchAddressFromCoords = (lat, lng) => {
        try {
            if (!window.naver || !window.naver.maps) {
                setCurrentAddress(`현재 위치: ${lat.toFixed(4)}, ${lng.toFixed(4)}`);
                return;
            }

            console.log("네이버 맵 객체:", window.naver.maps);

            // 최신 네이버 지도 API 방식으로 Reverse Geocoding 사용
            if (window.naver.maps.Service && window.naver.maps.Service.Geocoder) {
                const geocoder = new window.naver.maps.Service.Geocoder();

                geocoder.reverseGeocode({
                    location: new window.naver.maps.LatLng(lat, lng)
                }, (status, response) => {
                    console.log("Reverse Geocoding 응답:", status, response);

                    if (status === window.naver.maps.Service.Status.OK) {
                        if (response.results && response.results.length > 0) {
                            // 가장 상세한 주소 정보 사용
                            const address = response.results[0].region.area1.name + ' ' +
                                response.results[0].region.area2.name + ' ' +
                                (response.results[0].region.area3.name || '') + ' ' +
                                (response.results[0].land.name || '');
                            setCurrentAddress(address);
                        } else {
                            setCurrentAddress(`현재 위치: ${lat.toFixed(4)}, ${lng.toFixed(4)}`);
                        }
                    } else {
                        setCurrentAddress(`현재 위치: ${lat.toFixed(4)}, ${lng.toFixed(4)}`);
                    }
                });
            } else if (window.naver.maps.geocoder) {
                // 다른 가능한 API 형태 시도
                window.naver.maps.geocoder.reverseGeocode({
                    coords: new window.naver.maps.LatLng(lat, lng)
                }, (status, response) => {
                    if (status === window.naver.maps.geocoder.Status.OK) {
                        if (response.v2 && response.v2.address) {
                            setCurrentAddress(response.v2.address.jibunAddress || response.v2.address.roadAddress);
                        } else {
                            setCurrentAddress(`현재 위치: ${lat.toFixed(4)}, ${lng.toFixed(4)}`);
                        }
                    } else {
                        setCurrentAddress(`현재 위치: ${lat.toFixed(4)}, ${lng.toFixed(4)}`);
                    }
                });
            } else {
                // API가 예상과 다른 형태일 경우
                console.log("네이버 지도 API의 Geocoder를 찾을 수 없습니다.");
                setCurrentAddress(`현재 위치: ${lat.toFixed(4)}, ${lng.toFixed(4)}`);
            }
        } catch (error) {
            console.error("주소 변환 중 오류 발생:", error);
            setCurrentAddress("주소를 가져올 수 없습니다");
        }
    };

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

    const handleLocationClick = () => {
        setIsLocationOpen(true);
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
            <a href="#">채소</a>
            <a href="#">뭐 이런거</a>
        </>
    );

    // 사용자 메뉴 아이템
    const userMenuItems = (
        <>
            <a href="#">로그아웃</a>
            <a href="/buyer/cart">장바구니</a>
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
                        <IconButton
                            icon={<IoLocationOutline size={23} />}
                            label={currentAddress}
                            onClick={handleLocationClick}
                            className={`${headerStyles["map-view"]} ${headerStyles["icon-btn"]}`}
                            ariaLabel="위치설정"
                        />
                    </div>
                    <div className={headerStyles["nav-bottom"]}>
                        {/*<IconButton*/}
                        {/*    icon={<BsCart4 size={26} />}*/}
                        {/*    label="장바구니"*/}
                        {/*    onClick={handleCartClick}*/}
                        {/*    className={`${headerStyles["cart-btn"]} ${headerStyles["icon-btn"]}`}*/}
                        {/*    ariaLabel="장바구니"*/}
                        {/*/>*/}
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