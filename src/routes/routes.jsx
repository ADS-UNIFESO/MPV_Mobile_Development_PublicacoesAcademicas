import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import CadastroColaborador from "../pages/Colaborador/CadastroColaborador";
import FirstAccess from "pages/FirstAccess";
import CadastroArtigo from "../pages/Artigos/Cadastro";
import UltimosArtigos from "../pages/Artigos/Ultimos";
import TodosArtigos from "../pages/Artigos/Todos";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Rola a página para o topo quando a rota muda
  }, [pathname]);

  return null;
}

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<FirstAccess pageId='loginPage' />} />
          <Route
            path='/home'
            element={<Home pageId='homePage' />}
          >
            <Route
              index
              element={<Home />}
            />
          </Route>
          <Route
            path='/login'
            element={<FirstAccess pageId='loginPage' />}
          />
          <Route
            path='/cadastro-artigo'
            element={<CadastroArtigo />}
          />
          <Route
            path='/ultimos-artigos'
            element={<UltimosArtigos />}
          />
          <Route
            path='/todos-artigos'
            element={<TodosArtigos />}
          />
          <Route
            path='/cadastro-colaborador'
            element={<CadastroColaborador />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
