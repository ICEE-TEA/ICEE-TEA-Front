import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<div>아이스티 팔아용</div>}/>
      {/* <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Home/>}/>
      <Route path="/main" element={<Home/>}/>
      <Route path="/mypage" element={<myPage/>}/> */} 
    </Routes>
  </Router>
  );
}

export default App;
