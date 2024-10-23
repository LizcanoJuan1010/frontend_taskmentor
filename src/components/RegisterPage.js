import React, { useState } from 'react'; 
import './RegisterPage.css';

function RegisterPage({ setCurrentPage }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de registro

    // Simular registro exitoso y redirigir al dashboard
    setCurrentPage('performance'); // Redirigir al performance page después del registro exitoso
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h1>Registrarse</h1>
        <form onSubmit={handleRegister}>
          <div className="input-group">
            <label>Nombre</label>
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
              placeholder="Introduce tu nombre"
            />
          </div>
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
          <button type="submit" className="btn-register">Registrarse</button>
        </form>
        <p className="link" onClick={() => setCurrentPage('login')}>
          ¿Ya tienes cuenta? Inicia sesión aquí
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
