// // 브라우저에 위치정보 허용 거부 뜨게 하는 파일
// import { useState, useEffect } from "react";

// const UseGeoLocation = () => {
//     const [location, setLocation] = useState({
//         loaded: false,
//         coordinates: { lat: "", lng: "" },
//         isPermissionGranted: null // 위치 정보 허용/거부 상태 추적
//     });

//     const onSuccess = (location) => {
//         setLocation({
//             loaded: true,
//             coordinates: {
//                 lat: location.coords.latitude,
//                 lng: location.coords.longitude,
//             },
//             isPermissionGranted: true // 허용됨
//         });
//     };

//     const onError = (error) => {
//         // 오류 코드 1은 사용자가 권한을 거부한 경우
//         // 오류 코드 2는 위치를 가져올 수 없는 경우
//         // 오류 코드 3은 타임아웃
//         const isPermissionDenied = error.code === 1;
        
//         setLocation({
//             loaded: true,
//             error: {
//                 code: error.code,
//                 message: error.message,
//             },
//             isPermissionGranted: isPermissionDenied ? false : null // 명시적으로 거부된 경우만 false
//         });
//     };

//     // 위치 정보 허용 상태를 확인하는 함수
//     const isLocationPermissionGranted = () => {
//         return location.isPermissionGranted;
//     };

//     useEffect(() => {
//         if (!("geolocation" in navigator)) {
//             onError({
//                 code: 0,
//                 message: "Geolocation not supported",
//             });
//             return;
//         }
        
//         navigator.geolocation.getCurrentPosition(onSuccess, onError);
//     }, []);

//     // location 객체와 함께 isLocationPermissionGranted 함수도 반환
//     return {
//         ...location,
//         isLocationPermissionGranted
//     };
// };

// export default UseGeoLocation;

import { useState, useEffect } from "react";

const UseGeoLocation = (autoRequest = false) => {
    const [location, setLocation] = useState({
        loaded: false,
        coordinates: { lat: "", lng: "" },
        isPermissionGranted: null // 위치 정보 허용/거부 상태 추적
    });
    
    const [isLoading, setIsLoading] = useState(false);
    const [permissionChecked, setPermissionChecked] = useState(false);

    const onSuccess = (location) => {
        setLocation({
            loaded: true,
            coordinates: {
                lat: location.coords.latitude,
                lng: location.coords.longitude,
            },
            isPermissionGranted: true // 허용됨
        });
        
        // 위치 권한이 허용되었음을 localStorage에 저장
        localStorage.setItem('locationPermission', 'granted');
        setIsLoading(false);
        setPermissionChecked(true);
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
        
        // 위치 권한이 거부되었음을 localStorage에 저장
        if (isPermissionDenied) {
            localStorage.setItem('locationPermission', 'denied');
        }
        
        setIsLoading(false);
        setPermissionChecked(true);
    };

    // 위치 정보 허용 상태를 확인하는 함수
    const isLocationPermissionGranted = () => {
        // 명시적으로 권한이 허용된 경우에만 true 반환
        if (location.isPermissionGranted === true || localStorage.getItem('locationPermission') === 'granted') {
            // 실제로 위치 정보를 확인해서 권한이 허용된 경우에만 true
            return true;
        }
        
        // 그 외의 모든 경우(거부, 결정되지 않음, 로딩 중 등)는 false 반환
        return false;
    };

    // 위치 정보를 요청하는 함수 (버튼 클릭 시 호출)
    const requestLocation = () => {
        if (!("geolocation" in navigator)) {
            onError({
                code: 0,
                message: "Geolocation not supported",
            });
            return;
        }
        
        setIsLoading(true);
        // 위치 정보 요청할 때 타임아웃 설정 (5초)
        navigator.geolocation.getCurrentPosition(onSuccess, onError, {
            enableHighAccuracy: false,
            timeout: 5000,
            maximumAge: 0
        });
    };

    // 페이지 로드 시 권한 상태 확인
    useEffect(() => {
        // 초기 상태에서는 권한이 없다고 가정
        setLocation(prev => ({
            ...prev,
            loaded: false,
            isPermissionGranted: false
        }));
        
        // Geolocation API가 지원되지 않는 경우
        if (!("geolocation" in navigator)) {
            setLocation(prev => ({
                ...prev,
                loaded: true,
                isPermissionGranted: false,
                error: {
                    code: 0,
                    message: "Geolocation not supported"
                }
            }));
            setPermissionChecked(true);
            return;
        }

        // 위치 권한 상태 초기화를 위한 테스트 요청
        const checkPermissionState = () => {
            if (!("permissions" in navigator)) {
                // permissions API를 지원하지 않는 브라우저의 경우
                // localStorage에 저장된 이전 상태를 확인하고 필요하면 실제 요청으로 확인
                const savedPermission = localStorage.getItem('locationPermission');
                if (savedPermission === 'granted') {
                    // localStorage에 저장된 정보가 있지만, 실제 권한이 유효한지 확인 필요
                    if (autoRequest) {
                        requestLocation(); // 실제 위치 요청으로 권한 확인
                    } else {
                        // 테스트 요청으로 권한 확인
                        navigator.geolocation.getCurrentPosition(
                            () => {
                                // 위치 정보 요청 성공 (권한 있음)
                                setLocation(prev => ({
                                    ...prev,
                                    loaded: true,
                                    isPermissionGranted: true
                                }));
                            },
                            (error) => {
                                // 위치 정보 요청 실패
                                // 오류 코드 1은 권한이 거부된 경우
                                if (error.code === 1) {
                                    // 이전에 허용했지만 지금은 거부됨 -> localStorage 정보 업데이트
                                    localStorage.removeItem('locationPermission');
                                }
                                setLocation(prev => ({
                                    ...prev,
                                    loaded: true,
                                    isPermissionGranted: false,
                                    error: {
                                        code: error.code,
                                        message: error.message
                                    }
                                }));
                            },
                            { timeout: 3000 }
                        );
                    }
                } else {
                    // 이전에 허용된 적이 없음
                    setLocation(prev => ({
                        ...prev,
                        loaded: true,
                        isPermissionGranted: false
                    }));
                }
                setPermissionChecked(true);
                return;
            }
            
            // Permissions API를 사용하여 현재 권한 상태 확인
            navigator.permissions.query({ name: 'geolocation' }).then(permissionStatus => {
                console.log('Current permission state:', permissionStatus.state);
                
                if (permissionStatus.state === 'granted') {
                    // 이미 권한이 허용된 상태
                    setLocation(prev => ({
                        ...prev,
                        loaded: true,
                        isPermissionGranted: true
                    }));
                    localStorage.setItem('locationPermission', 'granted');
                    
                    // 실제 위치 정보도 필요하면 요청
                    if (autoRequest) {
                        requestLocation();
                    }
                } else {
                    // denied나 prompt 상태 - 모두 위치 정보가 없는 상태로 처리
                    // localStorage의 기존 정보도 지움 (브라우저 설정이 변경됐을 수 있음)
                    if (permissionStatus.state === 'denied') {
                        localStorage.removeItem('locationPermission');
                    } else if (permissionStatus.state === 'prompt') {
                        // prompt 상태에서 이전에 권한을 허용한 적이 있다면 정보 초기화
                        // 브라우저 설정이 초기화되었을 가능성이 높음
                        if (localStorage.getItem('locationPermission') === 'granted') {
                            localStorage.removeItem('locationPermission');
                        }
                    }
                    
                    setLocation(prev => ({
                        ...prev,
                        loaded: true,
                        isPermissionGranted: false
                    }));
                }
                
                setPermissionChecked(true);
                
                // 권한 상태 변경 이벤트 리스너 추가
                permissionStatus.onchange = () => {
                    console.log('Permission state changed to:', permissionStatus.state);
                    if (permissionStatus.state === 'granted') {
                        setLocation(prev => ({
                            ...prev,
                            isPermissionGranted: true
                        }));
                        localStorage.setItem('locationPermission', 'granted');
                    } else {
                        setLocation(prev => ({
                            ...prev,
                            isPermissionGranted: false
                        }));
                        if (permissionStatus.state === 'denied') {
                            localStorage.removeItem('locationPermission');
                        } else if (permissionStatus.state === 'prompt') {
                            // prompt 상태로 변경됐다면 이전 정보 초기화
                            localStorage.removeItem('locationPermission');
                        }
                    }
                };
            }).catch(error => {
                console.error('Permission check failed:', error);
                
                // Permissions API 실패 시 기본적으로 false로 설정
                setLocation(prev => ({
                    ...prev,
                    loaded: true,
                    isPermissionGranted: false,
                    error: {
                        code: 0,
                        message: "Permission check failed"
                    }
                }));
                
                setPermissionChecked(true);
                
                // Permissions API 실패 시 테스트 요청으로 권한 확인
                const savedPermission = localStorage.getItem('locationPermission');
                if (savedPermission === 'granted') {
                    // 테스트 요청으로 권한 확인
                    navigator.geolocation.getCurrentPosition(
                        () => {
                            // 위치 정보 요청 성공 (권한 있음)
                            setLocation(prev => ({
                                ...prev,
                                isPermissionGranted: true
                            }));
                            
                            if (autoRequest) {
                                requestLocation(); // 실제 위치 정보 요청
                            }
                        },
                        () => {
                            // 위치 정보 요청 실패 (권한 없음)
                            localStorage.removeItem('locationPermission');
                            setLocation(prev => ({
                                ...prev,
                                isPermissionGranted: false
                            }));
                        },
                        { timeout: 3000 }
                    );
                }
            });
        };
        
        checkPermissionState();
    }, [autoRequest]);

    // location 객체와 함께 isLocationPermissionGranted 함수와 requestLocation 함수도 반환
    return {
        ...location,
        isLocationPermissionGranted,
        requestLocation,
        isLoading
    };
};

export default UseGeoLocation;