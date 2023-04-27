import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./src/pages/Home"
import Login from "./src/pages/Login"
import Informacoes from "./src/pages/Informacoes"
import Montagem from "./src/pages/Montagem";
import Crud from "./src/pages/Crud";
import Settings from "./src/pages/Settings"
import Manual from "./src/pages/Manual"
import Careegamento from "./src/pages/Carregamento"
import { BoxLoginMk } from "./src/components/screen-login-mk/BoxLoginMk";
import ToCheck from "./src/pages/ToCheck";


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
        <Route path="/register-manual" element={<Crud />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/manual/:id?" element={<Manual />} />
        <Route path="/login" element={<BoxLoginMk />} />
        <Route path="/cadastro-manual" element={<Crud />} />
      </Routes>
    </BrowserRouter>
  )
}