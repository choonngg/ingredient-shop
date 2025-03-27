// 브라우저에 위치정보 허용 거부 뜨게 하는 파일
import { useState, useEffect } from "react";

const useGeoLocation = () => {
    const [location, setLocation] = useState({
        loaded: false,
        coordinates: { lat: "", lng: "" },
        isPermissionGranted: null // 위치 정보 허용/거부 상태 추적
    });

    const onSuccess = (location) => {
        setLocation({
            loaded: true,
            coordinates: {
                lat: location.coords.latitude,
                lng: location.coords.longitude,
            },
            isPermissionGranted: true // 허용됨
        });
    };

    const onError = (error) => {
        // 오류 코드 1은 사용자가 권한을 거부한 경우
        // 오류 코드 2는 위치를 가져올 수 없는 경우
        // 오류 코드 3은 타임아웃
        const isPermissionDenied = error.code === 1;
        
        setLocation({
            loaded: true,
            error: {
                code: error.code,
                message: error.message,
            },
            isPermissionGranted: isPermissionDenied ? false : null // 명시적으로 거부된 경우만 false
        });
    };

    // 위치 정보 허용 상태를 확인하는 함수
    const isLocationPermissionGranted = () => {
        return location.isPermissionGranted;
    };

    useEffect(() => {
        if (!("geolocation" in navigator)) {
            onError({
                code: 0,
                message: "Geolocation not supported",
            });
            return;
        }
        
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }, []);

    // location 객체와 함께 isLocationPermissionGranted 함수도 반환
    return {
        ...location,
        isLocationPermissionGranted
    };
};

export default useGeoLocation;