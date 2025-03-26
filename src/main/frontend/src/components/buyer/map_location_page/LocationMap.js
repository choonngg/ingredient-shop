import React, { useEffect, useRef, useState } from 'react';
import MapInfoModal from './MapInfoModal';
import NaverMapService from './NaverMapService';
import locationMapStyles from '../../../styles/buyer/LocationMap.module.css';

const LocationMap = ({ address, name, locationInfo }) => {
    const mapRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        let isMounted = true;

        const initMap = async () => {
            try {
                setIsLoading(true);

                // 네이버 지도 스크립트 로드
                await NaverMapService.loadNaverMapsScript();

                // 주소를 좌표로 변환
                const result = await NaverMapService.geocodeAddress(address);

                if (!isMounted) return;

                const lat = result.y;
                const lng = result.x;

                // 지도 생성
                const mapOptions = {
                    center: new window.naver.maps.LatLng(lat, lng),
                    zoom: 16
                };

                const map = new window.naver.maps.Map(mapRef.current, mapOptions);

                // 마커 생성
                const marker = new window.naver.maps.Marker({
                    position: new window.naver.maps.LatLng(lat, lng),
                    map: map,
                    title: name
                });

                // 마커 클릭 이벤트 설정
                window.naver.maps.Event.addListener(marker, 'click', () => {
                    setIsModalOpen(true);
                });

                setIsLoading(false);
            } catch (err) {
                if (isMounted) {
                    setError(err.message);
                    setIsLoading(false);
                }
            }
        };

        initMap();

        return () => {
            isMounted = false;
        };
    }, [address, name]);

    return (
        <div className={locationMapStyles["location-map-wrapper"]}>
            {isLoading && (
                <div className={locationMapStyles["map-loading"]}>
                    <p>지도를 불러오는 중...</p>
                </div>
            )}

            {error && (
                <div className={locationMapStyles["map-error"]}>
                    <p>지도를 불러오는데 실패했습니다: {error}</p>
                </div>
            )}

            <div ref={mapRef} className={locationMapStyles["location-map"]}></div>

            <MapInfoModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                locationInfo={locationInfo}
            />
        </div>
    );
};

export default LocationMap;