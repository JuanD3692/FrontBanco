import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'


const root = ReactDOM.createRoot(document.getElementById('root')) // <--- createRoot

root.render(

  <BrowserRouter> 
      <App />
  </BrowserRouter>
) // <--- render
