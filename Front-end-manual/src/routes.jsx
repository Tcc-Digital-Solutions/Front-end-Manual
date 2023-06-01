import React from "react";
import { RequireAuth } from 'react-auth-kit';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Careegamento from "./pages/Carregamento";
import Crud from "./pages/Crud";
import Home from "./pages/Home";
import Informacoes from "./pages/Informacoes";
import Login from "./pages/Login";
import Manual from "./pages/Manual";
import Montagem from "./pages/Montagem";
import Settings from "./pages/Settings";
import ToCheck from "./pages/ToCheck";


export const RoutesJS = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:id?" element={<Careegamento />} />
        <Route path="/home" element={<Home />} />
        <Route path="/to-check" element={<ToCheck />} />
        <Route path="/informacoes/:id?" element={<Informacoes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/montagem/:id?" element={<Montagem />} />
        <Route path="/register-manual" element={
          <RequireAuth loginPath={'/login'}>
            <Crud />
          </RequireAuth>
        }
        />
        <Route path="/settings" element={<Settings />} />
        <Route path="/manual/:id?" element={<Manual />} />
        <Route path="/cadastro-manual" element={<Crud />} />
      </Routes>
    </BrowserRouter>
  )
}