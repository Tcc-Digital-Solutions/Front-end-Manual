import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./src/pages/home"
import Login from "./src/pages/login"
import Informacoes from "./src/pages/informacoes"
import Montagem from "./src/pages/montagem";
import Crud from "./src/pages/crud";
import Settings from "./src/pages/settings"
import Manual from "./src/pages/manual"
import Careegamento from "./src/pages/carregamento"
import { BoxLoginMk } from "./src/components/screen-login-mk/BoxLoginMk";
import ToCheck from "./src/pages/toCheck";


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