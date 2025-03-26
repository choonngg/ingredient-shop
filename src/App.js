
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import LoginPage from './pages/LoginPage';
// import MainDashboard from './pages/MainDashboard';
// import MartDashboard from './pages/MartDashboard';
// import Header from './components/Header';
// import Footer from './components/Footer';

// const App = () => {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<LoginPage />} />
//         <Route path="/dashboard" element={<MainDashboard />} />
//         <Route path="/mart/:martId" element={<MartDashboard />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// };

// export default App;




// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import LoginPage from './pages/LoginPage';
// import MainDashboard from './pages/MainDashboard';
// import MartDashboard from './pages/MartDashboard';


// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(true); // 일단 기본적으로 인증 상태를 true로 설정

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
//         <Route path="/dashboard" element={<MainDashboard />} />
//         <Route path="/mart/:martId" element={<MartDashboard />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;



// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import LoginPage from './pages/LoginPage';
// import MainDashboard from './pages/MainDashboard';
// import MartDashboard from './pages/MartDashboard';
// import Header from './components/Header';
// import Footer from './components/Footer';

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(true); // 기본적으로 인증 상태 true

//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
//         <Route path="/dashboard" element={<MainDashboard />} />
//         <Route path="/mart/:martId" element={<MartDashboard />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// };

// export default App;




import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainDashboard from './pages/MainDashboard';
import MartDashboard from './pages/MartDashboard';
import MyMartPage from './pages/MyMartPage';
import ProductCheckPage from './pages/ProductCheckPage';
import ProductRegistrationPage from './pages/ProductRegistrationPage';
import CheckSalesHistoryPage from './pages/CheckSalesHistoryPage';
import Header from './components/Header';
import Footer from './components/Footer';
// 페이지 새로 만들면 이렇게 임포트 꼭 해줘야함. 여기 ReservationManagementPage 이거 임포트 수정한거에요.새로코드넣은 것
import ReservationManagementPage from './pages/ReservationManagementPage';

// 데이터 분석 관련 페이지들 import
import DataAnalysisPage from './pages/dataAnalysis/DataAnalysisPage';
import SalesAnalysisPage from './pages/dataAnalysis/SalesAnalysisPage';
import InventoryAnalysisPage from './pages/dataAnalysis/InventoryAnalysisPage';
import ReservationAnalysisPage from './pages/dataAnalysis/ReservationAnalysisPage';
import PromotionAnalysisPage from './pages/dataAnalysis/PromotionAnalysisPage';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true); // 기본적으로 인증 상태 true

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/dashboard" element={<MainDashboard />} />
        <Route path="/mart/:martId" element={<MartDashboard />} />
        <Route path="/mart/:martId/info" element={<MyMartPage />} />
        <Route path="/mart/:martId/check" element={<ProductCheckPage />} />
        <Route path="/mart/:martId/register" element={<ProductRegistrationPage />} />
        <Route path="/mart/:martId/sales" element={<CheckSalesHistoryPage />} />
        {/* 예약확인 페이지 새로한것임*/}
        <Route path="/mart/:martId/customers" element={<ReservationManagementPage />} />
        {/* 데이터 분석 관련 라우트새로 한 것임임 */}
        <Route path="/mart/:martId/data" element={<DataAnalysisPage />} />
        <Route path="/mart/:martId/data/sales" element={<SalesAnalysisPage />} />
        <Route path="/mart/:martId/data/inventory" element={<InventoryAnalysisPage />} />
        <Route path="/mart/:martId/data/reservations" element={<ReservationAnalysisPage />} />
        <Route path="/mart/:martId/data/promotions" element={<PromotionAnalysisPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;


