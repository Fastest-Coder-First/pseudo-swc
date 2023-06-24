import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard/Dashboard';
import LoginPage from './pages/LoginPage';
import SignUp from './pages/SignUp';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from './components/Auth/AuthContext';

function App() {
  return (
    //Set up a browser router for login and signup page
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<AuthProvider><Dashboard /></AuthProvider> } />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<AuthProvider> <LoginPage /></AuthProvider>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
