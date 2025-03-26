
// import React from 'react';
// import { Link } from 'react-router-dom';

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

// export default MainDashboard;




// import React from 'react';
// import { Link } from 'react-router-dom';
// import styles from '../styles/MainDashboard.module.css'; 

// // CSS 모듈 import 새로 추가한것 MainDashboard.module.css 파일 여기 임포트 한것임

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

// export default MainDashboard;


import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/MainDashboard.module.css'; // CSS 모듈 import

const MainDashboard = () => {
  const marts = [
    { id: 1, name: '마트 A' },
    { id: 2, name: '마트 B' },
    { id: 3, name: '마트 C' }
  ];

  return (
    <div className={styles["dashboard-container"]}>
      <h2>메인 대시보드</h2>
      <div className={styles["mart-list"]}>
        {marts.map(mart => (
          <Link key={mart.id} to={`/mart/${mart.id}`} className={styles["mart-item"]}>
            {mart.name} 대시보드
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainDashboard;
