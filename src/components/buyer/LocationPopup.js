// import React from 'react';
// import ReactDOM from 'react-dom';
// import HeaderStyles from '../../styles/buyer/Header.module.css';
//
// const LocationPopup = ({ onClose }) => {
//   return ReactDOM.createPortal(
//     <div className={HeaderStyles["location-popup"]} style={{ display: 'flex' }} onClick={onClose}>
//       <div className={HeaderStyles["location-popup-content"]} onClick={(e) => e.stopPropagation()}>
//         <span className={HeaderStyles["location-popup-close"]} onClick={onClose}>×</span>
//         <h2>위치 설정</h2>
//         <p>현재 위치를 설정하세요.</p>
//         <input type="text" placeholder="주소 입력" />
//         <button onClick={onClose}>설정 완료</button>
//       </div>
//     </div>,
//     document.body // DOM의 최상위로 렌더링
//   );
// };
//
// export default LocationPopup;

import React, { useState, useEffect, useRef } from 'react';
// CSS 모듈 import (경로는 실제 환경에 맞게 조정해야 합니다)
import styles from '../../styles/buyer/LocationPopup.module.css';

const LocationPopup = ({ onClose, currentLocation }) => {
    const [address, setAddress] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isMapLoaded, setIsMapLoaded] = useState(false);
    const mapRef = useRef(null);
    const naverMapRef = useRef(null);
    const markerRef = useRef(null);

    // 네이버 지도 API 스크립트 로드
    useEffect(() => {
        const loadNaverMapsScript = () => {
            if (window.naver) {
                console.log("네이버 맵 이미 로드됨:", window.naver);
                setIsMapLoaded(true);
                return;
            }

            const script = document.createElement('script');
            script.type = 'text/javascript';
            // 여기에서 CLIENT_ID를 실제 발급받은 값으로 변경해야 합니다
            script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=YOUR_CLIENT_ID&submodules=geocoder,search`;
            script.async = true;
            script.onload = () => {
                console.log("네이버 맵 로드 완료:", window.naver);
                setIsMapLoaded(true);
            };
            script.onerror = (error) => {
                console.error("네이버 맵 로드 실패:", error);
                alert("네이버 지도를 로드하는 데 실패했습니다. 네트워크 연결을 확인해주세요.");
            };
            document.head.appendChild(script);
        };

        loadNaverMapsScript();

        return () => {
            // 팝업이 닫힐 때 지도 객체 정리
            if (naverMapRef.current) {
                // 네이버 지도 API에는 명시적인 destroy 메서드가 없으므로 참조만 제거
                naverMapRef.current = null;
            }
        };
    }, []);

    // 마커와 주소 업데이트
    const updateMarkerAndAddress = (coord) => {
        // 마커 위치 업데이트
        if (markerRef.current) {
            markerRef.current.setPosition(coord);
        }

        // 주소 업데이트
        reverseGeocode(coord.y, coord.x);
    };

    // 지도 초기화
    useEffect(() => {
        if (isMapLoaded && mapRef.current && window.naver && window.naver.maps) {
            try {
                // 지도 생성
                const initialCoords = currentLocation && currentLocation.loaded && currentLocation.coordinates
                    ? new window.naver.maps.LatLng(currentLocation.coordinates.lat, currentLocation.coordinates.lng)
                    : new window.naver.maps.LatLng(37.5666805, 126.9784147); // 서울시청 기본값

                naverMapRef.current = new window.naver.maps.Map(mapRef.current, {
                    center: initialCoords,
                    zoom: 14
                });

                // 마커 생성
                markerRef.current = new window.naver.maps.Marker({
                    position: initialCoords,
                    map: naverMapRef.current
                });

                // 클릭 이벤트 리스너 추가
                window.naver.maps.Event.addListener(naverMapRef.current, 'click', function(e) {
                    updateMarkerAndAddress(e.coord);
                });

                // 현재 위치로 주소 가져오기
                if (currentLocation && currentLocation.loaded && currentLocation.coordinates) {
                    reverseGeocode(currentLocation.coordinates.lat, currentLocation.coordinates.lng);
                }
            } catch (error) {
                console.error("지도 초기화 중 오류 발생:", error);
            }
        }
    }, [isMapLoaded, currentLocation]);

    // 위치 정보를 기반으로 주소 설정
    useEffect(() => {
        if (currentLocation && currentLocation.loaded && currentLocation.coordinates && isMapLoaded && window.naver && window.naver.maps) {
            const { lat, lng } = currentLocation.coordinates;
            reverseGeocode(lat, lng);

            // 지도와 마커 위치 업데이트
            if (naverMapRef.current && markerRef.current) {
                const position = new window.naver.maps.LatLng(lat, lng);
                naverMapRef.current.setCenter(position);
                markerRef.current.setPosition(position);
            }
        } else if (currentLocation && currentLocation.error) {
            setAddress('위치를 가져올 수 없습니다. 수동으로 입력해주세요.');
        }
    }, [currentLocation, isMapLoaded]);

    // 좌표로부터 주소 가져오기 (Reverse Geocoding)
    const reverseGeocode = (lat, lng) => {
        if (!window.naver || !window.naver.maps) {
            setAddress(`현재 위치: ${lat.toFixed(6)}, ${lng.toFixed(6)}`);
            return;
        }

        console.log("reverseGeocode 호출됨:", lat, lng);

        // 최신 네이버 지도 API 방식으로 Reverse Geocoding 사용
        if (window.naver.maps.Service && window.naver.maps.Service.Geocoder) {
            try {
                const geocoder = new window.naver.maps.Service.Geocoder();

                geocoder.reverseGeocode({
                    location: new window.naver.maps.LatLng(lat, lng)
                }, (status, response) => {
                    console.log("Reverse Geocoding 응답:", status, response);

                    if (status === window.naver.maps.Service.Status.OK) {
                        if (response.results && response.results.length > 0) {
                            const result = response.results[0];
                            let address = '';

                            // 응답 구조에 따라 주소 추출 방식 변경
                            if (result.region) {
                                address = result.region.area1.name + ' ' +
                                    result.region.area2.name + ' ' +
                                    (result.region.area3.name || '') + ' ' +
                                    (result.land && result.land.name ? result.land.name : '');
                            } else if (result.jibunAddress) {
                                address = result.jibunAddress;
                            } else if (result.roadAddress) {
                                address = result.roadAddress;
                            }

                            setAddress(address);
                        } else {
                            setAddress(`현재 위치: ${lat.toFixed(6)}, ${lng.toFixed(6)}`);
                        }
                    } else {
                        setAddress(`현재 위치: ${lat.toFixed(6)}, ${lng.toFixed(6)}`);
                    }
                });
            } catch (error) {
                console.error("Geocoder 사용 중 오류:", error);
                setAddress(`현재 위치: ${lat.toFixed(6)}, ${lng.toFixed(6)}`);
            }
        } else if (window.naver.maps.geocoder) {
            // 다른 가능한 API 형태 시도
            try {
                window.naver.maps.geocoder.reverseGeocode({
                    coords: new window.naver.maps.LatLng(lat, lng)
                }, (status, response) => {
                    console.log("geocoder 응답:", status, response);

                    if (status === window.naver.maps.geocoder.Status.OK) {
                        if (response.v2 && response.v2.address) {
                            setAddress(response.v2.address.jibunAddress || response.v2.address.roadAddress);
                        } else {
                            setAddress(`현재 위치: ${lat.toFixed(6)}, ${lng.toFixed(6)}`);
                        }
                    } else {
                        setAddress(`현재 위치: ${lat.toFixed(6)}, ${lng.toFixed(6)}`);
                    }
                });
            } catch (error) {
                console.error("geocoder 사용 중 오류:", error);
                setAddress(`현재 위치: ${lat.toFixed(6)}, ${lng.toFixed(6)}`);
            }
        } else {
            // API가 예상과 다른 형태일 경우
            console.log("네이버 지도 API의 Geocoder를 찾을 수 없습니다. 사용 가능한 API:", window.naver.maps);
            setAddress(`현재 위치: ${lat.toFixed(6)}, ${lng.toFixed(6)}`);
        }
    };

    // 네이버 지도 API를 사용한 주소 검색
    const handleSearch = (e) => {
        e.preventDefault();

        if (!window.naver || !window.naver.maps || !window.naver.maps.Service) {
            alert('네이버 지도 API가 로드되지 않았습니다.');
            return;
        }

        try {
            const searchService = new window.naver.maps.Service.Places();
            const searchOptions = {
                query: searchQuery
            };

            searchService.search(searchOptions, (status, response) => {
                console.log("장소 검색 응답:", status, response);

                if (status === window.naver.maps.Service.Status.OK) {
                    if (response.places && response.places.length > 0) {
                        const results = response.places.map((place, index) => ({
                            id: index,
                            name: place.name,
                            address: place.address,
                            jibunAddress: place.jibunAddress || place.address,
                            lat: place.y || place.latitude,
                            lng: place.x || place.longitude
                        }));

                        setSearchResults(results);
                    } else {
                        setSearchResults([]);
                        alert('검색 결과가 없습니다.');
                    }
                } else {
                    setSearchResults([]);
                    alert('검색 결과가 없습니다.');
                }
            });
        } catch (error) {
            console.error("검색 중 오류 발생:", error);
            alert('검색 기능을 사용할 수 없습니다.');

            // 네이버 지도 API 구조 확인을 위한 로그
            console.log("사용 가능한 API:", window.naver.maps.Service);
        }
    };

    // 검색 결과 선택 핸들러
    const handleSelectLocation = (result) => {
        const position = new window.naver.maps.LatLng(result.lat, result.lng);

        // 지도 위치 변경
        if (naverMapRef.current) {
            naverMapRef.current.setCenter(position);
        }

        // 마커 위치 변경
        if (markerRef.current) {
            markerRef.current.setPosition(position);
        }

        // 주소 설정
        setAddress(result.address);

        // 검색 결과 목록 비우기
        setSearchResults([]);
    };

    // 위치 확정 핸들러
    const handleConfirmLocation = () => {
        // 여기서 선택된 위치를 저장하거나 상위 컴포넌트에 전달
        // 예: localStorage에 저장하거나 Context API를 통해 공유
        if (markerRef.current) {
            const position = markerRef.current.getPosition();
            const locationData = {
                lat: position.y,
                lng: position.x,
                address: address
            };

            // localStorage에 저장 예시
            localStorage.setItem('userLocation', JSON.stringify(locationData));

            // 팝업 닫기
            onClose();
        }
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.popup}>
                <button className={styles.closeButton} onClick={onClose}>
                    &times;
                </button>
                <h2>위치 설정</h2>

                <div className={styles.mapContainer} ref={mapRef}></div>

                <div className={styles.currentLocation}>
                    <h3>현재 위치</h3>
                    <p>{address || '위치를 불러오는 중...'}</p>
                </div>

                <div className={styles.searchLocation}>
                    <h3>위치 검색</h3>
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="동네, 도로명, 건물명으로 검색"
                            className={styles.searchInput}
                        />
                        <button type="submit" className={styles.searchButton}>
                            검색
                        </button>
                    </form>
                </div>

                {searchResults.length > 0 && (
                    <div className={styles.searchResults}>
                        <h3>검색 결과</h3>
                        <ul>
                            {searchResults.map((result) => (
                                <li
                                    key={result.id}
                                    onClick={() => handleSelectLocation(result)}
                                    className={styles.resultItem}
                                >
                                    <strong>{result.name}</strong>
                                    <p>{result.address}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                <div className={styles.buttonContainer}>
                    <button
                        className={styles.confirmButton}
                        onClick={handleConfirmLocation}
                    >
                        이 위치로 설정
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LocationPopup;