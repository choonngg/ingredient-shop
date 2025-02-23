// const Header = () => {
//     return (
//       <header className="header">
//         <h1>가나다라 마바사</h1>
//         <nav>
//           <Link to="/">홈</Link>
//           <Link to="/dashboard">대시보드</Link>
//         </nav>
//       </header>
//     );
//   };
//   export default Header;


  import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">홈</Link>
        <Link to="/dashboard">대시보드</Link>
      </nav>
    </header>
  );
};

export default Header;