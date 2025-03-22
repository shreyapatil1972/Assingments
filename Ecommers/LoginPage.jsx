import React, { useEffect, useState , useRef, useContext} from "react";
import formImage from "../assets/formImage.jpeg";
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from "react-router-dom";
import './LoginPage.css';
import { ThemeContext } from "../hooks/ThemeContext";
import { AuthContext } from "../hooks/AuthContext";

const LoginPage = ({ setIsLogin }) => {

  const {theme} = useContext(ThemeContext)
  const {useAuth} = AuthContext(setUser)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedUser, setLoggedUser] = useState(null);
  const navigate = useNavigate();
  const inputRef=useRef(null)
  
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const loggedInUser = storedUser ? JSON.parse(storedUser) : null;
    setLoggedUser(loggedInUser);
  }, []);

  console.log(loggedUser);

  function handleFormSubmit(event) {
    event.preventDefault();
    
    if (loggedUser && email === loggedUser.email && password === loggedUser.password) {
      toast.success('You have logged in successfully');
      setIsLogin(true);
      navigate('/home');
    } else {
      toast.error('Invalid credentials');
    }
  }
useEffect(()=>{
  inputRef.current.focus()
},[])

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <img src={formImage} alt="fruit image" className="img-fluid" />
        </div>
        <div className="col">
          <form onSubmit={handleFormSubmit} className={`${theme === 'light' ? 'bg-light text dark' : 'bg-dark text-light'}`}>
            <h3>Login here</h3>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                ref={inputRef}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Login
            </button>
            <Link to="/register">If Not Registered</Link>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
