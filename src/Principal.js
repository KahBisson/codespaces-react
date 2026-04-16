import React, { useEffect, useState } from 'react';
import { auth, db } from './firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

export default function Principal() {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, "usuarios", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserData(docSnap.data());
        }
      } else {
        navigate('/');
      }
    };
    fetchUserData();
  }, [navigate]);

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Bem-vindo!</h1>
        {userData ? (
          <div style={{textAlign: 'left'}}>
            <p><strong>Nome:</strong> {userData.nome}</p>
            <p><strong>Sobrenome:</strong> {userData.sobrenome}</p>
            <p><strong>Nascimento:</strong> {userData.nascimento}</p>
          </div>
        ) : <p>Carregando dados...</p>}
        <button className="btn-acessar" style={{marginTop: '20px'}} onClick={() => auth.signOut().then(() => navigate('/'))}>Sair</button>
      </div>
    </div>
  );
}