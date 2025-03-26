import React from 'react';
import Header from '../../components/buyer/Header';
import Footer from '../../components/buyer/Footer';
import LocationMap from '../../components/buyer/map_location_page/LocationMap';
import mapLocationPageStyles from '../../styles/buyer/MapLocationPage.module.css';

const MapLocationPage = () => {
    const locationAddress = '경기도 안성시 중앙로 327';
    const locationName = '상점 이름';
    const locationInfo = {
        name: locationName,
        address: locationAddress,
        phone: '031-123-4567',
        businessHours: '09:00 - 18:00',
        description: '상점 정보'
    };

    return (
        <div className={mapLocationPageStyles["map-location-page"]}>
            <Header />
            <main className={mapLocationPageStyles["map-content"]}>
                <h1 className={mapLocationPageStyles["page-title"]}>동네 매장 보기</h1>
                <div className={mapLocationPageStyles["map-container"]}>
                    <LocationMap
                        address={locationAddress}
                        name={locationName}
                        locationInfo={locationInfo}
                    />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default MapLocationPage;