import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage.jsx';
import CardDetail from './components/CardDetail.jsx';
import MainNavbar from './components/MainNavbar.jsx';
import ThemeProvider from './hooks/ThemeContext.jsx';
import data from './data.js';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedUser, setLoggedUser] = useState('');

  console.log('isLoggedIn on App.js:', isLoggedIn);
  console.log('loggedUser on App.js:', loggedUser);

  return (
    <Router>
      <ThemeProvider>
        <MainNavbar />
        <Routes>
          <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} setLoggedUser={setLoggedUser} />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={<HomePage data={data} />} />
          <Route path="/card-detail/:ID" element={<CardDetail />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
