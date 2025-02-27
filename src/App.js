
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
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;


