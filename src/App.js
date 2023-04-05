import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/loginPage";
import Signup from "./pages/signupPage";
import Auth from "./pages/authPage";
import Main from "./pages/mainPage";
import Order from "./pages/orderPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>아이스티 먹어요!</div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/main" element={<Main />} />
        <Route path="/order" element={<Order />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<myPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
