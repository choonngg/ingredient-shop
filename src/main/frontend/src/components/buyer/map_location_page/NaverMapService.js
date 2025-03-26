const NaverMapService = {
    getClientId: async () => {
        // 환경 변수에서 API 키 가져오기
        return process.env.REACT_APP_NAVER_MAPS_CLIENT_ID;
    },

    loadNaverMapsScript: async () => {
        // 이미 스크립트가 로드되었는지 확인
        if (window.naver && window.naver.maps) {
            return Promise.resolve();
        }

        const clientId = await NaverMapService.getClientId();

        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${clientId}&submodules=geocoder`;
            script.async = true;
            script.onload = () => resolve();
            script.onerror = (error) => reject(error);
            document.head.appendChild(script);
        });
    },

    geocodeAddress: async (address) => {
        await NaverMapService.loadNaverMapsScript();

        return new Promise((resolve, reject) => {
            window.naver.maps.Service.geocode(
                { query: address },
                function(status, response) {
                    if (status === window.naver.maps.Service.Status.OK) {
                        resolve(response.v2.addresses[0]);
                    } else {
                        reject(new Error('주소를 찾을 수 없습니다: ' + address));
                    }
                }
            );
        });
    }
};

export default NaverMapService;