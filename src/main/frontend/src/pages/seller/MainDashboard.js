
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




import React from 'react';
import { Link } from 'react-router-dom';
import appStyles from '../../styles/seller/App.module.css';

const MainDashboard = () => {
  const marts = [
    { id: 1, name: '마트 A' },
    { id: 2, name: '마트 B' },
    { id: 3, name: '마트 C' }
  ];

  return (
    <div className={appStyles["dashboard-container"]}>
      <h2>메인 대시보드</h2>
      <div className={appStyles["mart-list"]}>
        {marts.map(mart => (
          <Link key={mart.id} to={`/seller/mart/${mart.id}`} className={appStyles["mart-item"]}>
            {mart.name} 대시보드
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainDashboard;