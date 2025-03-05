// import React, { useEffect, useState } from 'react';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import axios from 'axios';

import Home from './pages/buyer/Home';
import Search from './pages/buyer/Search';
import ProductDetail from './pages/buyer/ProductDetail';

import LoginPage from './pages/seller/LoginPage';
import MainDashboard from './pages/seller/MainDashboard';
import MartDashboard from './pages/seller/MartDashboard';
import MyMartPage from './pages/seller/MyMartPage';
import ProductCheckPage from './pages/seller/ProductCheckPage';
import ProductRegistrationPage from './pages/seller/ProductRegistrationPage';
import CheckSalesHistoryPage from './pages/seller/CheckSalesHistoryPage';

import './index.css';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(true); // 기본적으로 인증 상태 true

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/buyer/search" element={<Search />} />
                <Route path="/buyer/product/:id" element={<ProductDetail />} />

                <Route path="/seller" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
                <Route path="/seller/dashboard" element={<MainDashboard />} />
                <Route path="/seller/mart/:martId" element={<MartDashboard />} />
                <Route path="/seller/mart/:martId/info" element={<MyMartPage />} />
                <Route path="/seller/mart/:martId/check" element={<ProductCheckPage />} />
                <Route path="/seller/mart/:martId/register" element={<ProductRegistrationPage />} />
                <Route path="/seller/mart/:martId/sales" element={<CheckSalesHistoryPage />} />
            </Routes>
        </Router>
    );
}

export default App;
