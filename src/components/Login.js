import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3333/auth/login', {
        email,
        password
      });
      const token = response.data.token;

      localStorage.setItem('token', token);

      navigate('/home');
    } catch (error) {
      console.error('error logging in!', error);

    }
  };

  return (
    <div className="login-main">
      <div className="login-left">
        
      </div>
      <div className="login-right">
        <div className="login-right-container">
            <div className="login-center">
            <h2>Bem Vindo</h2>
            <p>Coloque os seus dados</p>
            <form>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="pass-input-div">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {showPassword ? (
                  <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
                ) : (
                  <FaEye onClick={() => setShowPassword(!showPassword)} />
                )}
              </div>

              <div className="login-center-options">
                <div className="remember-div"> 
                </div>
                <a href="#" className="forgot-pass-link">
                  Esqueceu a senha?
                </a>
              </div>
              <div className="login-center-buttons">
                <button type="button" onClick={handleLogin}>Log In</button>
              </div>
            </form>
          </div>

          <p className="login-bottom-p">
            Não tem conta? <a href="#">Cadastro</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;