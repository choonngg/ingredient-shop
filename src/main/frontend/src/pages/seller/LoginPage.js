// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../App.css';

// const LoginPage = () => {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     if (username === 'admin' && password === 'password') {
//       console.log('로그인 성공');
//       navigate('/dashboard'); // 로그인 성공 시 대시보드 페이지로 이동
//     } else {
//       console.log('로그인 실패');
//       alert('아이디 또는 비밀번호가 잘못되었습니다.');
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>판매자 로그인</h2>
//       <input
//         type="text"
//         placeholder="아이디"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="비밀번호"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleLogin}>로그인</button>
//     </div>
//   );
// };

// export default LoginPage;



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../App.css';

// const LoginPage = () => {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     if (username === 'admin' && password === 'password') {
//       console.log('로그인 성공');
//       navigate('/dashboard');
//     } else {
//       console.log('로그인 실패');
//       alert('아이디 또는 비밀번호가 잘못되었습니다.');
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>판매자 로그인</h2>
//       <input
//         type="text"
//         placeholder="아이디"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="비밀번호"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleLogin}>로그인</button>
//     </div>
//   );
// };

// export default LoginPage;





import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/seller/Header';
import Footer from '../../components/seller/Footer';
import styles from '../../styles/seller/App.module.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = () => {
    if (username && password) {
      console.log('로그인 성공');
      navigate('/seller/dashboard');
    } else {
      console.log('로그인 실패');
      alert('아이디 또는 비밀번호가 잘못되었습니다.');
    }
  };

  return (
      <>
          <Header />
          <main>
              <div className={styles["login-container"]}>
                  <h2>판매자 로그인</h2>
                  <input
                      type="text"
                      placeholder="아이디"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                  />
                  <input
                      type="password"
                      placeholder="비밀번호"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                  />
                  <button onClick={handleLogin}>로그인</button>
              </div>
          </main>
          <Footer />
      </>
  );
};

export default LoginPage;