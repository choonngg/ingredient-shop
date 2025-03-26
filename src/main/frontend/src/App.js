// import React, { useEffect, useState } from 'react';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import axios from 'axios';

import HomePage from './pages/buyer/HomePage';
import SearchPage from './pages/buyer/SearchPage';
import ProductDetailPage from './pages/buyer/ProductDetailPage';
import MapLocationPage from './pages/buyer/MapLocationPage';
import PurchasePage from './pages/buyer/PurchasePage';
import CartPage from './pages/buyer/CartPage';

import LoginPage from './pages/seller/LoginPage';
import MainDashboard from './pages/seller/MainDashboard';
import MartDashboard from './pages/seller/MartDashboard';
import MyMartPage from './pages/seller/MyMartPage';
import ProductCheckPage from './pages/seller/ProductCheckPage';
import ProductRegistrationPage from './pages/seller/ProductRegistrationPage';
import CheckSalesHistoryPage from './pages/seller/CheckSalesHistoryPage';
import ReservationManagementPage from './pages/seller/ReservationManagementPage';
import DataAnalysisPage from './pages/seller/dataAnalysis/DataAnalysisPage';
import SalesAnalysisPage from './pages/seller/dataAnalysis/SalesAnalysisPage';
import InventoryAnalysisPage from './pages/seller/dataAnalysis/InventoryAnalysisPage';
import ReservationAnalysisPage from './pages/seller/dataAnalysis/ReservationAnalysisPage';
import PromotionAnalysisPage from './pages/seller/dataAnalysis/PromotionAnalysisPage';

import './index.css';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(true); // 기본적으로 인증 상태 true

    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/buyer/search" element={<SearchPage />} />
                <Route path="/buyer/product/:id" element={<ProductDetailPage />} />
                <Route path="/buyer/map" element={<MapLocationPage />} />
                <Route path="/buyer/purchase" element={<PurchasePage />} />
                <Route path="/buyer/cart" element={<CartPage />} />

                <Route path="/seller" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
                <Route path="/seller/dashboard" element={<MainDashboard />} />
                <Route path="/seller/mart/:martId" element={<MartDashboard />} />
                <Route path="/seller/mart/:martId/info" element={<MyMartPage />} />
                <Route path="/seller/mart/:martId/check" element={<ProductCheckPage />} />
                <Route path="/seller/mart/:martId/register" element={<ProductRegistrationPage />} />
                <Route path="/seller/mart/:martId/sales" element={<CheckSalesHistoryPage />} />
                <Route path="/seller/mart/:martId/customers" element={<ReservationManagementPage />} />
                <Route path="/seller/mart/:martId/data" element={<DataAnalysisPage />} />
                <Route path="/seller/mart/:martId/data/sales" element={<SalesAnalysisPage />} />
                <Route path="/seller/mart/:martId/data/inventory" element={<InventoryAnalysisPage />} />
                <Route path="/seller/mart/:martId/data/reservations" element={<ReservationAnalysisPage />} />
                <Route path="/seller/mart/:martId/data/promotions" element={<PromotionAnalysisPage />} />
            </Routes>
        </Router>
    );
}

export default App;
