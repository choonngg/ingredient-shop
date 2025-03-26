// import React, { useState, useEffect } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import '../App.css'; // 필요하다면 스타일 파일 import

// const ReservationManagementPage = () => {
//   const { martId } = useParams();

//   // 예약 목록 (예시 데이터)
//   const [reservations, setReservations] = useState([]);

//   // 컴포넌트 마운트 시 예약 정보 불러오기 (mock)
//   useEffect(() => {
//     const mockReservations = [
//       {
//         id: 1,
//         customerName: '홍길동',
//         product: '냉동만두 500g',
//         reserveTime: '2025-03-01 14:00',
//         isCheckedIn: false,  // 체크인 여부
//         isVisited: false,    // 방문 완료 여부
//       },
//       {
//         id: 2,
//         customerName: '철수',
//         product: '우유 1L',
//         reserveTime: '2025-03-01 15:30',
//         isCheckedIn: false,
//         isVisited: false,
//       },
//       {
//         id: 3,
//         customerName: '영희',
//         product: '빵 500g',
//         reserveTime: '2025-03-01 16:00',
//         isCheckedIn: false,
//         isVisited: false,
//       },
//     ];

//     setReservations(mockReservations);
//   }, []);

//   // 체크인 (QR 코드 스캔)
//   const handleCheckIn = (reservationId) => {
//     // 실제 QR 스캔 로직은 모바일 카메라/라이브러리 연동이 필요
//     // 여기서는 단순히 '스캔 완료' 처리만 시뮬레이션
//     const updated = reservations.map((res) =>
//       res.id === reservationId
//         ? { ...res, isCheckedIn: true }
//         : res
//     );
//     setReservations(updated);
//     console.log(`예약 ID ${reservationId} 체크인 완료 (QR 스캔 시뮬레이션)`);
//   };

//   // 방문 완료 처리
//   const handleVisitComplete = (reservationId) => {
//     const updated = reservations.map((res) =>
//       res.id === reservationId
//         ? { ...res, isVisited: true }
//         : res
//     );
//     setReservations(updated);
//     console.log(`예약 ID ${reservationId} 방문 완료 처리`);
//   };

//   // 미방문(수령하지 않은 경우) → 재고 복구
//   const handleNoShow = (reservationId) => {
//     // 재고 복구 로직(API 호출 등)
//     console.log(`예약 ID ${reservationId} 미방문 → 재고 복구 처리`);
//     // 예약 목록에서 제거하거나, 상태 업데이트
//     const updated = reservations.filter((res) => res.id !== reservationId);
//     setReservations(updated);
//   };

//   return (
//     <div className="mart-dashboard-container">
//       {/* 좌측 사이드바 */}
//       <aside className="sidebar">
//         <h3>마트 관리</h3>
//         <ul>
//           <li><Link to="/dashboard">메인 화면</Link></li>
//           <li><Link to={`/mart/${martId}/info`}>나의 마트</Link></li>
//           <li><Link to={`/mart/${martId}/check`}>등록 상품 확인</Link></li>
//           <li><Link to={`/mart/${martId}/register`}>상품 등록</Link></li>
//           <li><Link to={`/mart/${martId}/sales`}>판매 내역 확인</Link></li>
//           {/* 현재 페이지: 예약/방문 관리 */}
//         </ul>
//       </aside>

//       {/* 메인 콘텐츠 영역 */}
//       <main className="main-content">
//         <h2>예약 및 방문 예정 고객 관리</h2>

//         {/* 예약 목록 테이블 */}
//         <table className="section">
//           <thead>
//             <tr>
//               <th>예약 ID</th>
//               <th>예약자명</th>
//               <th>예약 상품</th>
//               <th>예약 시간</th>
//               <th>체크인</th>
//               <th>방문 처리</th>
//               <th>미방문 처리</th>
//             </tr>
//           </thead>
//           <tbody>
//             {reservations.map((res) => (
//               <tr key={res.id}>
//                 <td>{res.id}</td>
//                 <td>{res.customerName}</td>
//                 <td>{res.product}</td>
//                 <td>{res.reserveTime}</td>
//                 <td>
//                   {res.isCheckedIn ? (
//                     <span style={{ color: 'green' }}>체크인됨</span>
//                   ) : (
//                     <button onClick={() => handleCheckIn(res.id)}>
//                       QR 스캔(체크인)
//                     </button>
//                   )}
//                 </td>
//                 <td>
//                   {res.isVisited ? (
//                     <span style={{ color: 'blue' }}>방문 완료</span>
//                   ) : (
//                     <button
//                       onClick={() => handleVisitComplete(res.id)}
//                       disabled={!res.isCheckedIn} // 체크인 안 된 상태라면 비활성화
//                     >
//                       방문 완료 처리
//                     </button>
//                   )}
//                 </td>
//                 <td>
//                   <button onClick={() => handleNoShow(res.id)}>
//                     미방문(재고 복구)
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </main>
//     </div>
//   );
// };

// export default ReservationManagementPage;


// import React, { useState, useEffect } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import '../App.css';

// const ReservationManagementPage = () => {
//   const { martId } = useParams();
//   console.log("ReservationManagementPage - martId:", martId); // 디버깅: martId 확인

//   // 예약 목록 (예시 데이터)
//   const [reservations, setReservations] = useState([]);

//   // 컴포넌트 마운트 시 예약 정보 불러오기 (mock)
//   useEffect(() => {
//     const mockReservations = [
//       {
//         id: 1,
//         customerName: '홍길동',
//         product: '냉동만두 500g',
//         reserveTime: '2025-03-01 14:00',
//         isCheckedIn: false,  // 체크인 여부
//         isVisited: false,    // 방문 완료 여부
//       },
//       {
//         id: 2,
//         customerName: '철수',
//         product: '우유 1L',
//         reserveTime: '2025-03-01 15:30',
//         isCheckedIn: false,
//         isVisited: false,
//       },
//       {
//         id: 3,
//         customerName: '영희',
//         product: '빵 500g',
//         reserveTime: '2025-03-01 16:00',
//         isCheckedIn: false,
//         isVisited: false,
//       },
//     ];
//     setReservations(mockReservations);
//   }, []);

//   // 체크인 (QR 코드 스캔 시뮬레이션)
//   const handleCheckIn = (reservationId) => {
//     const updated = reservations.map((res) =>
//       res.id === reservationId
//         ? { ...res, isCheckedIn: true }
//         : res
//     );
//     setReservations(updated);
//     console.log(`예약 ID ${reservationId} 체크인 완료 (QR 스캔 시뮬레이션)`);
//   };

//   // 방문 완료 처리
//   const handleVisitComplete = (reservationId) => {
//     const updated = reservations.map((res) =>
//       res.id === reservationId
//         ? { ...res, isVisited: true }
//         : res
//     );
//     setReservations(updated);
//     console.log(`예약 ID ${reservationId} 방문 완료 처리`);
//   };

//   // 미방문(수령하지 않은 경우) → 재고 복구 처리 (예약 목록에서 제거)
//   const handleNoShow = (reservationId) => {
//     console.log(`예약 ID ${reservationId} 미방문 → 재고 복구 처리`);
//     const updated = reservations.filter((res) => res.id !== reservationId);
//     setReservations(updated);
//   };

//   // martId가 없는 경우를 대비한 fallback
//   if (!martId) {
//     return <p>마트 ID가 정의되지 않았습니다. URL을 확인해주세요.</p>;
//   }

//   return (
//     <div className="mart-dashboard-container">
//       {/* 좌측 사이드바 */}
//       <aside className="sidebar">
//         <h3>마트 관리</h3>
//         <ul>
//           <li><Link to="/dashboard">메인 화면</Link></li>
//           <li><Link to={`/mart/${martId}/info`}>나의 마트</Link></li>
//           <li><Link to={`/mart/${martId}/check`}>등록 상품 확인</Link></li>
//           <li><Link to={`/mart/${martId}/register`}>상품 등록</Link></li>
//           <li><Link to={`/mart/${martId}/sales`}>판매 내역 확인</Link></li>
//           <li><Link to={`/mart/${martId}/customers`}>예약 및 방문 고객 관리</Link></li>
//         </ul>
//       </aside>

//       {/* 메인 콘텐츠 영역 */}
//       <main className="main-content">
//         <h2>예약 및 방문 예정 고객 관리</h2>
//         {/* 예약 목록 테이블 */}
//         <table className="section">
//           <thead>
//             <tr>
//               <th>예약 ID</th>
//               <th>예약자명</th>
//               <th>예약 상품</th>
//               <th>예약 시간</th>
//               <th>체크인</th>
//               <th>방문 처리</th>
//               <th>미방문 처리</th>
//             </tr>
//           </thead>
//           <tbody>
//             {reservations.length > 0 ? (
//               reservations.map((res) => (
//                 <tr key={res.id}>
//                   <td>{res.id}</td>
//                   <td>{res.customerName}</td>
//                   <td>{res.product}</td>
//                   <td>{res.reserveTime}</td>
//                   <td>
//                     {res.isCheckedIn ? (
//                       <span style={{ color: 'green' }}>체크인됨</span>
//                     ) : (
//                       <button onClick={() => handleCheckIn(res.id)}>
//                         QR 스캔(체크인)
//                       </button>
//                     )}
//                   </td>
//                   <td>
//                     {res.isVisited ? (
//                       <span style={{ color: 'blue' }}>방문 완료</span>
//                     ) : (
//                       <button
//                         onClick={() => handleVisitComplete(res.id)}
//                         disabled={!res.isCheckedIn}
//                       >
//                         방문 완료 처리
//                       </button>
//                     )}
//                   </td>
//                   <td>
//                     <button onClick={() => handleNoShow(res.id)}>
//                       미방문(재고 복구)
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="7">예약 내역이 없습니다.</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </main>
//     </div>
//   );
// };

// export default ReservationManagementPage;


import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../App.css';

const ReservationManagementPage = () => {
  // URL에서 martId 가져오기
  const { martId } = useParams();
  console.log("ReservationManagementPage - martId:", martId); // 디버깅: martId 출력

  // 예약 목록 state
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    // URL에서 martId가 없는 경우 에러 메시지 출력
    if (!martId) {
      console.error("No martId provided in URL");
    }
    
    // Mock 예약 데이터 (실제 데이터는 백엔드 API 연동)
    const mockReservations = [
      {
        id: 1,
        customerName: '홍길동',
        product: '냉동만두 500g',
        reserveTime: '2025-03-01 14:00',
        isCheckedIn: false,
        isVisited: false,
      },
      {
        id: 2,
        customerName: '철수',
        product: '우유 1L',
        reserveTime: '2025-03-01 15:30',
        isCheckedIn: false,
        isVisited: false,
      },
      {
        id: 3,
        customerName: '영희',
        product: '빵 500g',
        reserveTime: '2025-03-01 16:00',
        isCheckedIn: false,
        isVisited: false,
      },
    ];
    setReservations(mockReservations);
    console.log("ReservationManagementPage - reservations:", mockReservations); // 디버깅: 예약 데이터 출력
  }, [martId]);

  // 체크인 처리 함수 (QR 스캔 시뮬레이션)
  const handleCheckIn = (reservationId) => {
    const updated = reservations.map((res) =>
      res.id === reservationId ? { ...res, isCheckedIn: true } : res
    );
    setReservations(updated);
    console.log(`예약 ID ${reservationId} 체크인 완료`);
  };

  // 방문 완료 처리 함수
  const handleVisitComplete = (reservationId) => {
    const updated = reservations.map((res) =>
      res.id === reservationId ? { ...res, isVisited: true } : res
    );
    setReservations(updated);
    console.log(`예약 ID ${reservationId} 방문 완료 처리`);
  };

  // 미방문 처리 (재고 복구) 함수: 예약 항목 제거
  const handleNoShow = (reservationId) => {
    const updated = reservations.filter((res) => res.id !== reservationId);
    setReservations(updated);
    console.log(`예약 ID ${reservationId} 미방문 처리 (재고 복구)`);
  };

  // martId가 없으면 fallback UI 표시
  if (!martId) {
    return <p>오류: martId가 URL에 없습니다. URL을 확인해주세요.</p>;
  }

  return (
    <div className="mart-dashboard-container">
      {/* 좌측 사이드바 */}
      <aside className="sidebar">
        <h3>마트 관리</h3>
        <ul>
          <li><Link to="/dashboard">메인 화면</Link></li>
          <li><Link to={`/mart/${martId}/info`}>나의 마트</Link></li>
          <li><Link to={`/mart/${martId}/check`}>등록 상품 확인</Link></li>
          <li><Link to={`/mart/${martId}/register`}>상품 등록</Link></li>
          <li><Link to={`/mart/${martId}/sales`}>판매 내역 확인</Link></li>
          <li><Link to={`/mart/${martId}/customers`}>예약 및 방문 고객 관리</Link></li>
        </ul>
      </aside>

      {/* 메인 콘텐츠 영역 */}
      <main className="main-content">
        <h2>예약 및 방문 예정 고객 관리</h2>
        <table className="section">
          <thead>
            <tr>
              <th>예약 ID</th>
              <th>예약자명</th>
              <th>예약 상품</th>
              <th>예약 시간</th>
              <th>체크인</th>
              <th>방문 처리</th>
              <th>미방문 처리</th>
            </tr>
          </thead>
          <tbody>
            {reservations.length > 0 ? (
              reservations.map((res) => (
                <tr key={res.id}>
                  <td>{res.id}</td>
                  <td>{res.customerName}</td>
                  <td>{res.product}</td>
                  <td>{res.reserveTime}</td>
                  <td>
                    {res.isCheckedIn ? (
                      <span style={{ color: 'green' }}>체크인됨</span>
                    ) : (
                      <button onClick={() => handleCheckIn(res.id)}>
                        QR 스캔(체크인)
                      </button>
                    )}
                  </td>
                  <td>
                    {res.isVisited ? (
                      <span style={{ color: 'blue' }}>방문 완료</span>
                    ) : (
                      <button onClick={() => handleVisitComplete(res.id)} disabled={!res.isCheckedIn}>
                        방문 완료 처리
                      </button>
                    )}
                  </td>
                  <td>
                    <button onClick={() => handleNoShow(res.id)}>
                      미방문(재고 복구)
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">예약 내역이 없습니다.</td>
              </tr>
            )}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default ReservationManagementPage;
