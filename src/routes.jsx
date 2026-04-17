import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login.jsx';
import Principal from './Principal.jsx';
import Cadastro from './Cadastro.jsx';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/Cadastro" element={<Cadastro/>} />
        <Route path="/Principal" element={<Principal/>} />
      </Routes>
    </BrowserRouter>
  );
}