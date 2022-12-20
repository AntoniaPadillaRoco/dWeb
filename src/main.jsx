import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './router/Router'
import ContextProvider from './Context/Context';
import { Toaster } from 'react-hot-toast';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </ContextProvider>
    <Toaster/>
  </React.StrictMode>,
)
