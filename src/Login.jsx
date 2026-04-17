import React, { useState } from 'react';
import { auth } from './firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {

      await signInWithEmailAndPassword(auth, email, senha);
      
      navigate('/principal'); 
    } catch (error) {

      alert("Erro ao entrar: E-mail ou senha incorreta");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>
        <div className="input-group">
          <input 
            placeholder="E-mail" 
            onChange={e => setEmail(e.target.value)} 
          />
          <input 
            type="password" 
            placeholder="Senha" 
            onChange={e => setSenha(e.target.value)} 
          />
        </div>
        <button className="btn-acessar" onClick={handleLogin}>Acessar</button>
        
        <p style={{ marginTop: '15px', fontSize: '14px' }}>
          Não tem uma conta? <Link to="/cadastro">Cadastre-se aqui!</Link>
        </p>
      </div>
    </div>
  );
}