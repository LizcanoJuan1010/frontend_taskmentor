import React, { useState } from 'react';
import './LoginPage.css';

function LoginPage({ handleLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLoginSubmit = (e) => {
    e.preventDefault();

    // Aquí iría la lógica de autenticación real, simulamos un login exitoso:
    const loggedInUser = {
      name: email, // Simular que el email es el nombre del usuario
      email: email,
    };

    // Pasar el usuario autenticado a handleLogin
    handleLogin(loggedInUser); // Pasar el usuario autenticado al componente App
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Iniciar Sesión</h1>
        <form onSubmit={onLoginSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              placeholder="Introduce tu email"
            />
          </div>
          <div className="input-group">
            <label>Contraseña</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              placeholder="Introduce tu contraseña"
            />
          </div>
          <button type="submit" className="btn-login">Iniciar Sesión</button>
        </form>
        <p className="link" onClick={() => handleLogin('register')}>
          ¿No tienes cuenta? Regístrate aquí
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
