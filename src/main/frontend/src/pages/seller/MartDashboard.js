// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, Link, useNavigate, useParams } from 'react-router-dom';
// import './App.css';
// import UserComponent from './UserComponent';
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
//         <Route path="/users" element={<UserComponent />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// };

// const LoginPage = () => {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     if (username && password) {
//       navigate('/dashboard');
//     } else {
//       alert('아이디와 비밀번호를 입력하세요.');
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>판매자 로그인</h2>
//       <input type="text" placeholder="아이디" value={username} onChange={(e) => setUsername(e.target.value)} />
//       <input type="password" placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} />
//       <button onClick={handleLogin}>로그인</button>
//     </div>
//   );
// };

// const MainDashboard = () => {
//   const marts = [
//     { id: 1, name: '마트 A' },
//     { id: 2, name: '마트 B' },
//     { id: 3, name: '마트 C' }
//   ];

//   return (
//     <div className="dashboard-container">
//       <h2>메인 대시보드</h2>
//       <div className="mart-list">
//         {marts.map(mart => (
//           <Link key={mart.id} to={`/mart/${mart.id}`} className="mart-item">
//             {mart.name}
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// const MartDashboard = () => {
//   const { martId } = useParams();
//   const [martInfo, setMartInfo] = useState(null);

//   useEffect(() => {
//     const martData = {
//       1: { name: '마트 A', sales: '500만원', inventory: '200개' },
//       2: { name: '마트 B', sales: '300만원', inventory: '150개' },
//       3: { name: '마트 C', sales: '400만원', inventory: '180개' },
//     };

//     setMartInfo(martData[martId]);
//   }, [martId]);

//   return (
//     <div className="mart-dashboard">
//       {martInfo ? (
//         <>
//           <h2 className="mart-title">{martInfo.name} 대시보드</h2>
//           <p>매출: {martInfo.sales}</p>
//           <p>재고: {martInfo.inventory}</p>
//           <div className="mart-actions">
//             <Link to="/dashboard">모든 마트 보기</Link>
//             <Link to="/mart">재고 관리</Link>
//             <Link to="/mart">판매 관리</Link>
//             <Link to="/mart">예약 및 방문 고객 관리</Link>
//             <Link to="/mart">할인 및 프로모션 관리</Link>
//           </div>
//         </>
//       ) : (
//         <p>마트 정보를 불러오는 중...</p>
//       )}
//     </div>
//   );
// };

// const UserComponent = () => {
//   return (
//     <div className="user-container">
//       <h2>사용자 관리</h2>
//       <p>직원 계정 생성 및 수정, 권한 설정이 가능합니다.</p>
//     </div>
//   );
// };



// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, Link, useNavigate, useParams } from 'react-router-dom';

// import '../App.css';
// import Header from '../components/Header';
// import Footer from '../components/Footer';


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

// const LoginPage = () => {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     if (username && password) {
//       navigate('/dashboard');
//     } else {
//       alert('아이디와 비밀번호를 입력하세요.');
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>판매자 로그인</h2>
//       <input type="text" placeholder="아이디" value={username} onChange={(e) => setUsername(e.target.value)} />
//       <input type="password" placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} />
//       <button onClick={handleLogin}>로그인</button>
//     </div>
//   );
// };

// const MainDashboard = () => {
//   const marts = [
//     { id: 1, name: '마트 A' },
//     { id: 2, name: '마트 B' },
//     { id: 3, name: '마트 C' }
//   ];

//   return (
//     <div className="dashboard-container">
//       <h2>메인 대시보드</h2>
//       <div className="mart-list">
//         {marts.map(mart => (
//           <Link key={mart.id} to={`/mart/${mart.id}`} className="mart-item">
//             {mart.name} 대시보드
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// const MartDashboard = () => {
//   const { martId } = useParams();
//   const [martInfo, setMartInfo] = useState(null);

//   useEffect(() => {
//     const martData = {
//       1: { name: '마트 A', sales: '500만원', inventory: '200개' },
//       2: { name: '마트 B', sales: '300만원', inventory: '150개' },
//       3: { name: '마트 C', sales: '400만원', inventory: '180개' },
//     };

//     setMartInfo(martData[martId]);
//   }, [martId]);

//   return (
//     <div className="mart-dashboard">
//       {martInfo ? (
//         <>
//           <h2 className="mart-title">{martInfo.name} 대시보드</h2>
//           <p>매출: {martInfo.sales}</p>
//           <p>재고: {martInfo.inventory}</p>
//           <div className="mart-actions">
//             <Link to="/dashboard">모든 마트 보기</Link>
//             <Link to={`/mart/${martId}/inventory`}>재고 관리</Link>
//             <Link to={`/mart/${martId}/sales`}>판매 관리</Link>
//             <Link to={`/mart/${martId}/customers`}>예약 및 방문 고객 관리</Link>
//             <Link to={`/mart/${martId}/promotions`}>할인 및 프로모션 관리</Link>
//           </div>
//         </>
//       ) : (
//         <p>마트 정보를 불러오는 중...</p>
//       )}
//     </div>
//   );
// };

// export default App;



// import React, { useState, useEffect } from 'react';
// import { Route, Routes, Link, useNavigate, useParams } from 'react-router-dom';
// import '../App.css';
// import Header from '../components/Header';
// import Footer from '../components/Footer';

// const App = () => {
//   return (
//     <>
//       <Header />
//       <Routes>
//         <Route path="/" element={<LoginPage />} />
//         <Route path="/dashboard" element={<MainDashboard />} />
//         <Route path="/mart/:martId" element={<MartDashboard />} />
//       </Routes>
//       <Footer />
//     </>
//   );
// };

// const LoginPage = () => {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     if (username && password) {
//       navigate('/dashboard');
//     } else {
//       alert('아이디와 비밀번호를 입력하세요.');
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>판매자 로그인</h2>
//       <input type="text" placeholder="아이디" value={username} onChange={(e) => setUsername(e.target.value)} />
//       <input type="password" placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} />
//       <button onClick={handleLogin}>로그인</button>
//     </div>
//   );
// };

// const MainDashboard = () => {
//   const marts = [
//     { id: 1, name: '마트 A' },
//     { id: 2, name: '마트 B' },
//     { id: 3, name: '마트 C' }
//   ];

//   return (
//     <div className="dashboard-container">
//       <h2>메인 대시보드</h2>
//       <div className="mart-list">
//         {marts.map(mart => (
//           <Link key={mart.id} to={`/mart/${mart.id}`} className="mart-item">
//             {mart.name} 대시보드
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// const MartDashboard = () => {
//   const { martId } = useParams();
//   const [martInfo, setMartInfo] = useState(null);

//   useEffect(() => {
//     const martData = {
//       1: { name: '마트 A', sales: '500만원', inventory: '200개' },
//       2: { name: '마트 B', sales: '300만원', inventory: '150개' },
//       3: { name: '마트 C', sales: '400만원', inventory: '180개' },
//     };

//     setMartInfo(martData[martId]);
//   }, [martId]);

//   return (
//     <div className="mart-dashboard">
//       {martInfo ? (
//         <>
//           <h2 className="mart-title">{martInfo.name} 대시보드</h2>
//           <p>매출: {martInfo.sales}</p>
//           <p>재고: {martInfo.inventory}</p>
//           <div className="mart-actions">
//             <Link to="/dashboard">모든 마트 보기</Link>
//             <Link to={`/mart/${martId}/inventory`}>재고 관리</Link>
//             <Link to={`/mart/${martId}/sales`}>판매 관리</Link>
//             <Link to={`/mart/${martId}/customers`}>예약 및 방문 고객 관리</Link>
//             <Link to={`/mart/${martId}/promotions`}>할인 및 프로모션 관리</Link>
//           </div>
//         </>
//       ) : (
//         <p>마트 정보를 불러오는 중...</p>
//       )}
//     </div>
//   );
// };

// export default App;










// import React, { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';

// const MartDashboard = () => {
//   const { martId } = useParams();
//   const [martInfo, setMartInfo] = useState(null);
//   const [inventory, setInventory] = useState([]);
//   const [sales, setSales] = useState([]);
//   const [reservations, setReservations] = useState([]);
//   const [promotions, setPromotions] = useState([]);

//   useEffect(() => {
//     const martData = {
//       1: {
//         name: '마트 A',
//         sales: '500만원',
//         inventory: [
//           { name: '사과', quantity: 50, expiry: '2025-03-01' },
//           { name: '우유', quantity: 20, expiry: '2025-02-25' },
//         ],
//         reservations: [{ name: '홍길동', items: ['사과', '우유'] }],
//         promotions: [{ name: '신선식품 할인', discount: '10%' }],
//       },
//       2: {
//         name: '마트 B',
//         sales: '300만원',
//         inventory: [
//           { name: '계란', quantity: 30, expiry: '2025-03-10' },
//           { name: '요거트', quantity: 15, expiry: '2025-02-27' },
//         ],
//         reservations: [{ name: '김영희', items: ['계란'] }],
//         promotions: [{ name: '유제품 할인', discount: '15%' }],
//       },
//       3: {
//         name: '마트 C',
//         sales: '400만원',
//         inventory: [
//           { name: '당근', quantity: 40, expiry: '2025-03-03' },
//           { name: '치즈', quantity: 10, expiry: '2025-02-28' },
//         ],
//         reservations: [{ name: '박철수', items: ['당근'] }],
//         promotions: [{ name: '채소 할인', discount: '20%' }],
//       },
//     };

//     setMartInfo(martData[martId]);
//     setInventory(martData[martId]?.inventory || []);
//     setSales(martData[martId]?.sales || []);
//     setReservations(martData[martId]?.reservations || []);
//     setPromotions(martData[martId]?.promotions || []);
//   }, [martId]);

//   if (!martInfo) {
//     return <p>해당 마트를 찾을 수 없습니다.</p>;
//   }

//   return (
//     <div className="mart-dashboard">
//       <h2>{martInfo.name} 대시보드</h2>
//       <p>매출: {martInfo.sales}</p>
//       <h3>재고 현황</h3>
//       <ul>
//         {inventory.map((item, index) => (
//           <li key={index}>
//             {item.name} - {item.quantity}개 (유통기한: {item.expiry})
//           </li>
//         ))}
//       </ul>
//       <h3>예약 현황</h3>
//       <ul>
//         {reservations.map((reservation, index) => (
//           <li key={index}>
//             예약자: {reservation.name} ({reservation.items.join(', ')})
//           </li>
//         ))}
//       </ul>
//       <h3>할인 및 프로모션</h3>
//       <ul>
//         {promotions.map((promo, index) => (
//           <li key={index}>
//             {promo.name} - {promo.discount}
//           </li>
//         ))}
//       </ul>
//       <div className="mart-actions">
//         <Link to="/dashboard">모든 마트 보기</Link>
//         <Link to={`/mart/${martId}/inventory`}>재고 관리</Link>
//         <Link to={`/mart/${martId}/sales`}>판매 관리</Link>
//         <Link to={`/mart/${martId}/customers`}>예약 및 방문 고객 관리</Link>
//         <Link to={`/mart/${martId}/promotions`}>할인 및 프로모션 관리</Link>
//       </div>
//     </div>
//   );
// };

// export default MartDashboard;












// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import '../App.css';

// const MartDashboard = () => {
//   const [reservations, setReservations] = useState([]);
//   const [expiringProducts, setExpiringProducts] = useState([]);
//   const [completedSales, setCompletedSales] = useState([]);

//   useEffect(() => {
//     // Mock data fetching
//     setReservations([
//       { id: 1, name: '홍길동 | 고추가루 1kg', time: '20분 내 방문 예정' },
//       { id: 2, name: '철수 | 미용라면 5개입', time: '16분 내 방문 예정' },
//       { id: 3, name: 'abc123 | 냉동 라비올리 500g', time: '12분 내 방문 예정' }
//     ]);

//     setExpiringProducts([
//       { id: 1, name: '냉장 모짜렐라 치즈', time: '2시간 뒤 판매 종료 예정' },
//       { id: 2, name: '커피 250ml', time: '2시간 뒤 판매 종료 예정' },
//       { id: 3, name: '파스타 면 500g', time: '4시간 뒤 판매 종료 예정' }
//     ]);

//     setCompletedSales([
//       { id: 1, name: '예약 취소됨', time: '00:00' },
//       { id: 2, name: '파스타 면 재고 소진', time: '00:00' },
//       { id: 3, name: '떡국떡 재고 소진', time: '00:00' }
//     ]);
//   }, []);

//   return (
//     <div className="mart-dashboard-container">
//       <aside className="sidebar">
//         <h3>마트 관리</h3>
//         <ul>
//           <li><Link to="/dashboard">메인 화면</Link></li>
//           <li><Link to="/mart">나의 마트</Link></li>
//           <li><Link to="/register">상품 등록</Link></li>
//           <li><Link to="/sales">판매 내역 확인</Link></li>
//         </ul>
//       </aside>
//       <main className="main-content">
//         <div className="section">
//           <h2>실시간 예약 및 구매 현황</h2>
//           <ul>
//             {reservations.map(res => (
//               <li key={res.id}>{res.name} - {res.time}</li>
//             ))}
//           </ul>
//         </div>
//         <div className="section">
//           <h2>판매 만료 예정 리스트</h2>
//           <ul>
//             {expiringProducts.map(product => (
//               <li key={product.id}>{product.name} - {product.time}</li>
//             ))}
//           </ul>
//         </div>
//         <div className="section">
//           <h2>판매 취소/완료 상품 목록</h2>
//           <ul>
//             {completedSales.map(sale => (
//               <li key={sale.id}>{sale.name} - {sale.time}</li>
//             ))}
//           </ul>
//         </div>
//         <div className="section">
//           <h2>사내 게시판</h2>
//           <p>2월 21일까지 재고 정리</p>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default MartDashboard;



import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../../components/seller/Header';
import Footer from '../../components/seller/Footer';
import styles from '../../styles/seller/App.module.css';

const MartDashboard = () => {
  const [reservations, setReservations] = useState([]);
  const [expiringProducts, setExpiringProducts] = useState([]);
  const [completedSales, setCompletedSales] = useState([]);
  const { martId } = useParams();

  useEffect(() => {
    // Mock data fetching
    setReservations([
      { id: 1, name: '홍길동 | 고추가루 1kg', time: '20분 내 방문 예정' },
      { id: 2, name: '철수 | 미용라면 5개입', time: '16분 내 방문 예정' },
      { id: 3, name: 'abc123 | 냉동 라비올리 500g', time: '12분 내 방문 예정' }
    ]);

    setExpiringProducts([
      { id: 1, name: '냉장 모짜렐라 치즈', time: '2시간 뒤 판매 종료 예정' },
      { id: 2, name: '커피 250ml', time: '2시간 뒤 판매 종료 예정' },
      { id: 3, name: '파스타 면 500g', time: '4시간 뒤 판매 종료 예정' }
    ]);

    setCompletedSales([
      { id: 1, name: '예약 취소됨', time: '00:00' },
      { id: 2, name: '파스타 면 재고 소진', time: '00:00' },
      { id: 3, name: '떡국떡 재고 소진', time: '00:00' }
    ]);
  }, []);

  return (
      <>
        <Header />
        <main><div className={styles["mart-dashboard-container"]}>
          <aside className={styles["sidebar"]}>
            <h3>마트 관리</h3>
            <ul>
              <li><Link to="/seller/dashboard">메인 화면</Link></li>
              <li><Link to={`/seller/mart/${martId}/info`}>나의 마트</Link></li>
              <li><Link to={`/seller/mart/${martId}/check`}>등록 상품 확인</Link></li>
              <li><Link to={`/seller/mart/${martId}/register`}>상품 등록</Link></li>
              <li><Link to={`/seller/mart/${martId}/sales`}>판매 내역 확인</Link></li>
              <li><Link to={`/seller/mart/${martId}/customers`}>예약 및 방문 고객 관리</Link></li>
              <li><Link to={`/seller/mart/${martId}/data`}>데이터 분석</Link></li>
            </ul>
          </aside>
          <main className={styles["main-content"]}>
            <div className={styles["section"]}>
              <h2>실시간 예약 및 구매 현황</h2>
              <ul>
                {reservations.map(res => (
                    <li key={res.id}>{res.name} - {res.time}</li>
                ))}
              </ul>
            </div>
            <div className={styles["section"]}>
              <h2>판매 만료 예정 리스트</h2>
              <ul>
                {expiringProducts.map(product => (
                    <li key={product.id}>{product.name} - {product.time}</li>
                ))}
              </ul>
            </div>
            <div className={styles["section"]}>
              <h2>판매 취소/완료 상품 목록</h2>
              <ul>
                {completedSales.map(sale => (
                    <li key={sale.id}>{sale.name} - {sale.time}</li>
                ))}
              </ul>
            </div>
            <div className={styles["section"]}>
              <h2>사내 게시판</h2>
              <p>2월 21일까지 재고 정리</p>
            </div>
          </main>
        </div>
        </main>
        <Footer />
      </>
  );
};

export default MartDashboard;