import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import SignUp from './pages/SignUp';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    //Set up a browser router for login and signup page
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
