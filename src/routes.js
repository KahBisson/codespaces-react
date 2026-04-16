import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cadastro from './Cadastro';
import Login from './Login';
import Principal from './Principal';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/principal" element={<Principal />} />
      </Routes>
    </BrowserRouter>
  );
}