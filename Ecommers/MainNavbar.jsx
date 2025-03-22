import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BiToggleLeft, BiToggleRight } from "react-icons/bi"; 
import { ThemeContext } from "../hooks/ThemeContext";
import logo from "../assets/react.svg"; 
import "./MainNavbar.css"; 

const MainNavbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={`navbar navbar-expand-lg custom-navbar ${theme === 'light' ? 'navbar-light bg-light ' : 'navbar-dark bg-dark '}`}>
      <div className="container-fluid">
        
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img src={logo} alt="Fruit Logo" className="navbar-logo" />
          <span className="navbar-title">Fruit Store</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link">
                Register
              </Link>
            </li>
            <li className="nav-item" style={{ fontSize: "30px" }}>
              <button 
                onClick={toggleTheme} 
                className={`${theme === 'light' ? 'customToggleButtonLight' : 'customToggleButtonDark'}`}
              >
                {theme === "light" ? <BiToggleLeft /> : <BiToggleRight />}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;
