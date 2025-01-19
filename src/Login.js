import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Supabase Login-API aufrufen
      const { data } = await axios.post('https://oqfwncayddaumfgzyeor.supabase.co/auth/v1/token', {
        email,
        password
      });

      // Benutzerinformationen im Zustand speichern
      setUser(data);
      
      // Weiterleitung zur Studiengang-Auswahl
      navigate.push('/create-study-program');
    } catch (err) {
      setError('Login fehlgeschlagen. Bitte versuche es erneut.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Passwort</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
