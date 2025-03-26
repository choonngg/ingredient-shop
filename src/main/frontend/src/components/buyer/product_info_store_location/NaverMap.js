import React, { useEffect, useRef, useState } from 'react';

const NaverMap = ({ address }) => {
    const mapRef = useRef(null);
    const scriptLoaded = useRef(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (!scriptLoaded.current) {
            const script = document.createElement('script');
            script.type = 'text/javascript';
            const clientId = process.env.REACT_APP_NAVER_MAPS_CLIENT_ID;
            script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${clientId}&submodules=geocoder`;
            script.async = true;
            script.onload = () => {
                scriptLoaded.current = true;
                initMap();
            };
            script.onerror = () => console.error('네이버 맵스 스크립트 로드 실패');
            document.head.appendChild(script);

            return () => {
                if (script.parentNode) {
                    document.head.removeChild(script);
                }
            };
        }
    }, []);

    useEffect(() => {
        if (scriptLoaded.current && address) {
            initMap();
        }
    }, [address]);

    const initMap = () => {
        if (!window.naver || !window.naver.maps || !window.naver.maps.Service) {
            console.error('네이버 맵스 API가 준비되지 않았습니다.');
            return;
        }

        window.naver.maps.Service.geocode(
            { query: address },
            function(status, response) {
                if (status === window.naver.maps.Service.Status.OK) {
                    const result = response.v2.addresses[0];
                    const lat = result.y;
                    const lng = result.x;

                    const mapOptions = {
                        center: new window.naver.maps.LatLng(lat, lng),
                        zoom: 15
                    };

                    const map = new window.naver.maps.Map(mapRef.current, mapOptions);
                    new window.naver.maps.Marker({
                        position: new window.naver.maps.LatLng(lat, lng),
                        map: map
                    });
                } else {
                    alert('주소를 찾을 수 없습니다: ' + address);
                }
            }
        );
    };

    return (
        <div
            ref={mapRef}
            style={{
                width: '100%',
                height: isMobile ? '300px' : '400px', // 모바일 여부에 따라 동적 설정
            }}
        />
    );
};

export default NaverMap;