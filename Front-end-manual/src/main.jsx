import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // comentar essa linha quando colocar em produção por isso a api quando atualiza a página está 
  // puxando duas vezes a mesma coisa, essa configuração vem por padrão no react: commente o React.StrictMode
  // <React.StrictMode>
    <App />
  // </React.StrictMode>,
)
