import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import CadastroColaborador from "../pages/Colaborador/CadastroColaborador";
import FirstAccess from "pages/FirstAccess";
import CadastroArtigo from "../pages/Artigos/Cadastro";
import UltimosArtigos from "../pages/Artigos/Ultimos";
import TodosArtigos from "../pages/Artigos/Todos";
import { AuthProvider } from '../auth/AuthContext';
import PrivateRoute from '../auth/PrivateRoute';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
  window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function AppRoutes() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<FirstAccess pageId='loginPage' />} />
          <Route path='/login' element={<FirstAccess pageId='loginPage' />} />
          <Route path='/home' element={
            <PrivateRoute>
              <Home pageId='homePage' />
            </PrivateRoute>
          } />
          <Route path='/cadastro-artigo' element={
            <PrivateRoute>
              <CadastroArtigo />
            </PrivateRoute>
          } />
          <Route path='/ultimos-artigos' element={
            <PrivateRoute>
              <UltimosArtigos />
            </PrivateRoute>
          } />
          <Route path='/todos-artigos' element={
            <PrivateRoute>
              <TodosArtigos />
            </PrivateRoute>
          } />
          <Route path='/cadastro-colaborador' element={
            <PrivateRoute>
              <CadastroColaborador />
            </PrivateRoute>
          } />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
