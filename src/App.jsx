import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppNavbar from './components/AppNavBar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Inicio from './pages/Inicio';
import Productos from './pages/Productos';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
import Carrito from './pages/Carrito';
import Login from './pages/Login';

export default function App() {
  return (
  
      <BrowserRouter basename="/marco-espinoza-25235">
        <AppNavbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    
  );
}