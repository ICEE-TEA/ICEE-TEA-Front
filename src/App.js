import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/loginPage";
import Signup from "./pages/signupPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>아이스티 먹어요!</div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/main" element={<main />} />
         <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<myPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
