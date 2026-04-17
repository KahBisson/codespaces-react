import React, { useState } from 'react';
import { auth, db } from './firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate, Link } from 'react-router-dom';

export default function Cadastro() {
  const [dados, setDados] = useState({ 
    email: '', 
    senha: '', 
    nome: '', 
    sobrenome: '', 
    nascimento: '' 
  });
  const navigate = useNavigate();

  const handleCadastro = async () => {
    try {

      const userCredential = await createUserWithEmailAndPassword(auth, dados.email, dados.senha);
      const user = userCredential.user;

      await setDoc(doc(db, "usuarios", user.uid), {
        uid: user.uid,
        nome: dados.nome,
        sobrenome: dados.sobrenome,
        nascimento: dados.nascimento,
        email: dados.email
      });

      alert("Usuário cadastrado com sucesso!");
      navigate('/');
    } catch (error) {
      alert("Erro ao cadastrar: " + error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Cadastro</h1>
        <div className="input-group">
          <input 
            placeholder="Nome" 
            onChange={e => setDados({...dados, nome: e.target.value})} 
          />
          <input 
            placeholder="Sobrenome" 
            onChange={e => setDados({...dados, sobrenome: e.target.value})} 
          />
          <input 
            type="date" 
            onChange={e => setDados({...dados, nascimento: e.target.value})} 
          />
          <input 
            placeholder="E-mail" 
            onChange={e => setDados({...dados, email: e.target.value})} 
          />
          <input 
            type="password" 
            placeholder="Senha" 
            onChange={e => setDados({...dados, senha: e.target.value})} 
          />
        </div>
        <button className="btn-acessar" onClick={handleCadastro}>Cadastrar</button>
        
        <p style={{ marginTop: '15px' }}>
          Já tem conta? <Link to="/">Faça Login</Link>
        </p>
      </div>
    </div>
  );
}