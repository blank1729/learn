import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Post from './Components/Post'
import { AnimatePresence } from 'framer-motion'
import AnimatedRoutes from './Routes/AnimatedRoutes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <Header/> */}
      <AnimatedRoutes/>
    </BrowserRouter>
  </React.StrictMode>,
)
